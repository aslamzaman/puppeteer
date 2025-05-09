const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(express.static('static'));

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


// JSON PRITIFYE
app.set("json spaces", 2);
// log request


app.use("/upcominglist", require("./src/router/upcoming_list"));
app.use("/upcoming", require("./src/router/upcoming"));
app.use("/test", require("./src/router/test"));

app.use((req, res) => {
    res.send({ msg: "Page Not Found!" });
});

app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`);
});
