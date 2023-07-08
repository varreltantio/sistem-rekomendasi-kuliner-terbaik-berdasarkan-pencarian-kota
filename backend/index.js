import express from "express";
import cors from "cors";
import edgeChromium from 'chrome-aws-lambda'
import puppeteer from 'puppeteer-core'

const app = express();
app.use(cors());
app.use(express.json());

const LOCAL_CHROME_EXECUTABLE = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

app.get("/", async (req, res) => {
  res.status(200).send({
    message: "Hello from KulinerID",
  });
});

app.post('/', async (req, res) => {
  try {
    const { city } = req.body;

    const executablePath = await edgeChromium.executablePath || LOCAL_CHROME_EXECUTABLE

    const browser = await puppeteer.launch({
      executablePath,
      args: edgeChromium.args,
    })

    const page = await browser.newPage();

    const urlFindFood = 'https://talkai.info/chat/';

    await page.goto(urlFindFood);

    const prompt = `Berikan daftar makanan khas ${city} dalam bentuk list dengan nomer dan tanpa penjelasan`;

    await page.evaluate((value) => {
      const textarea = document.querySelectorAll('.sectionChatFormInput')[0];
      textarea.value = value;
    }, prompt);

    await page.evaluate(() => {
      const submitButton = document.querySelectorAll('.sectionChatFormButton')[0];
      submitButton.click();
    });

    await new Promise((resolve) => setTimeout(resolve, 5000));

    // Wait for the messageContain element to appear
    await page.waitForSelector('.messageContain');

    const foods = await page.evaluate(() => {
      const result = document.querySelectorAll('.messageContain')[2];
      const list = result.querySelectorAll('ol')[0];

      const listItems = Array.from(list.querySelectorAll('li'))
        .map((li) => li.innerText)
        .slice(0, 5);

      return listItems;
    });

    const places = [];

    for (let i = 0; i < foods.length; i++) {
      let food = foods[i];
      const searchQuery = `makanan ${food} ${city}`;
      const encodedSearchQuery = encodeURIComponent(searchQuery);
      const urlFindPlace = `https://www.google.com/maps/search/${encodedSearchQuery}`;

      await page.goto(urlFindPlace);

      await page.waitForSelector('.kUPJ6b');

      const result = await page.evaluate(() => {
        let name = '';
        let rating = '';
        let srcImage = '';

        const checkPlace1 = document.querySelectorAll('.qBF1Pd')[0];
        const checkPlace2 = document.querySelectorAll('.DUwDvf')[0];

        if (checkPlace1 != undefined) {
          name = checkPlace1.textContent;

          const checkRating = document.querySelectorAll('.MW4etd')[0];

          if (checkRating != undefined) {
            rating = checkRating.textContent;
          }

          const checkImage = document.querySelectorAll('.p0Hhde')[0];

          if (checkImage != undefined) {
            const divImage = checkImage;
            const image = divImage.querySelector('img');
            srcImage = image.getAttribute('src');

          }
        } else if (checkPlace2 != undefined) {
          name = checkPlace2.textContent;

          const checkRating = document.querySelectorAll('.F7nice')[0];

          if (checkRating != undefined) {
            rating = checkRating.querySelector('span').textContent;
          }

          const checkImage = document.querySelectorAll('.aoRNLd')[0];

          if (checkImage != undefined) {
            const image = checkImage.querySelector('img');
            if (image) {
              srcImage = image.getAttribute('src');
            }
          }
        }

        return { 'name': name, 'rating': rating, 'image': srcImage };
      });

      places.push(result);
    }

    await browser.close();

    res.status(200).send({
      city: city,
      foods: foods,
      places: places,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
