const port = 3000,
    express = require("express"),
    app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>");
})
.listen(port, ()=> {
    console.log(`Express server is running and listening to port ${port}\nPlease follow http://localhost:${port} .`);
})

console.log(req.params);
console.log(req.body);
console.log(req.url)