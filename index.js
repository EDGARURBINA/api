const express = require("express");
const cors = require("cors")
const app = express();
app.use(cors({
    "origin": "*"
}))
const port = 3000;
app.get("/", (req, res) => {
    res.send(`mundo`);
});
app.listen(port, () => {
    console.log(`Server is running on: http://localhost:${port}`);
});