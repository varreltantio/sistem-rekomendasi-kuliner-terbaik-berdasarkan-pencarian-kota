import sun from "../../images/sun.png";
import star from "../../images/star.png";
import image from "../../images/image.png";
import Stack from "react-bootstrap/Stack";
import { ResultImage, ResultItem, VerticalLine } from "./ResultDetailElements";

const ResultDetail = ({ data }) => {
  return (
    <>
      {data.foods.length > 0 ? (
        data.foods.map((food, index) => {
          if (!data.places[index]) {
            return null;
          }

          return (
            <div key={index}>
              <Stack direction="horizontal" className="mt-3" >
                <img src={sun} alt={`image ${food}`} />
                <div className="p-2 fw-bold text-warning">{food}</div>
              </Stack>
              <VerticalLine>
                <div className="ps-3">
                  <p>Alamat: {data.places[index].formattedAddress}</p>
                  <ResultImage className="mb-5">
                    <img
                      src={data.places[index].image ? data.places[index].image : image}
                      alt={`image${index}`}
                      id="imageResult"
                      style={{
                        transform: 'scale(1.2)',
                        width: '300px',
                        height: '150px',
                        marginTop: '20px',
                        marginLeft: '30px',
                      }}
                    />

                    <ResultItem className="text-white">
                      <p className="mb-1" style={{ textShadow: '2px 2px 4px black' }}>
                        {data.places[index].name}
                      </p>
                      <Stack direction="horizontal">
                        <img src={star} alt={`image ${data.places[index].name}}`} />
                        <div className="p-2 fw-bold" style={{ textShadow: '2px 2px 4px black' }}>
                          Rating: {data.places[index].rating}
                        </div>
                      </Stack>
                    </ResultItem>
                  </ResultImage>
                </div>
              </VerticalLine>
            </div>
          );
        })
      ) : (
        <p style={{ color: 'white', textAlign: 'center', marginTop: '50px' }}>Tidak ada data yang tersedia.</p>
      )}

    </>
  );
};

export default ResultDetail;
