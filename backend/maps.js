import { Client } from "@googlemaps/google-maps-services-js";

const client = new Client({});

client
  .findPlaceFromText({
    params: {
      input: "Warung Pecel dan Rawon Setan H Lutfi, Jalan Ahmad Yani, Gumuk Kerang, Kebonsari, Kabupaten Jember, Jawa Timur",
      inputtype: "textquery",
      fields: ["formatted_address", "name", "geometry", "rating"],
      key: "AIzaSyDacnkSJVjuYm1AbeaTsaza6hyB2E-6Bfg",
    },
    timeout: 1000, // milliseconds
  })
  .then((response) => {
    const results = response.data.candidates;
    results.forEach((place) => {
      console.log("Place Name:", place.name);
      console.log("Rating:", place.rating);
      console.log("Formatted Address:", place.formatted_address);
      console.log("Latitude:", place.geometry.location.lat);
      console.log("Longitude:", place.geometry.location.lng);
      console.log("------------------------");
    });
  })
  .catch((error) => {
    console.log(error.response.data.error_message);
  });
