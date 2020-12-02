const app = require("./backend/app");
const port = 3000;


app.listen(process.env.PORT || port, () => console.log("example app listining"));

