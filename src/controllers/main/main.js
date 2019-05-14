const axios = require("axios");

const API_KEY = "10456559-0f017c1b081538875f387541b";

const mainRoute = (request, response) => {
  const {
    headers: { xquery, xpage }
  } = request;
  console.log(xquery);
  axios
    .get(
      `https://pixabay.com/api/?image_type=photo&q=${xquery}&per_page=12&page=${xpage}&key=${API_KEY}`
    )
    .then(res => {
      response.status(200);
      response.json({ status: "success", data: res.data });
    })
    .catch(err => console.log(err));
  // response.status(200);
  // response.json({ status: "success", data: data });
};

module.exports = mainRoute;
