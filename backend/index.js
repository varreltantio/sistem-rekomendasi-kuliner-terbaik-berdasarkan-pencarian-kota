import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { Configuration, OpenAIApi } from "openai";
import { Client } from "@googlemaps/google-maps-services-js";


dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const app = express();
app.use(cors());
app.use(express.json());

const client = new Client({});

app.get("/", async (req, res) => {
  res.status(200).send({
    message: "Hello from KulinerID",
  });
});

app.post('/', async (req, res) => {
  try {
    const { city } = req.body;

    const prompt = `Berikan 5 daftar makanan khas ${city}`;

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${prompt}`,
      temperature: 0,
      max_tokens: 3000,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    });
    const text = response.data.choices[0].text;

    const lines = text.split("\n");

    const foods = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      if (line !== "") {
        const food = line;
        foods.push(food);
      }
    }

    const promises = foods.map(food => {
      return client.findPlaceFromText({
        params: {
          input: food,
          inputtype: "textquery",
          fields: ["name", "photos", "rating", "formatted_address"],
          key: process.env.GOOGLE_MAPS_API_KEY,
        },
        timeout: 1000, // milliseconds
      })
    });

    Promise.all(promises)
      .then(responses => {
        const places = [];

        responses.forEach(response => {
          const results = response.data.candidates;
          results.forEach(place => {
            places.push({
              name: place.name,
              rating: place.rating,
              formattedAddress: place.formatted_address,
              image: place.photos && place.photos.length > 0
                ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${place.photos[0].photo_reference}&key=${process.env.GOOGLE_MAPS_API_KEY}`
                : null
            });
          });
        });

        const data = {
          city: city,
          foods: foods,
          places: places
        };

        res.status(200).send(data);
      })
      .catch(error => {
        console.log(error.response.data.error_message);
        res.status(500).send("Error occurred");
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
