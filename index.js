const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
app.use(cors())
app.use(express.json())

const users = [
    { name: 'hasan', id: "1" },
    { name: 'hasan', id: "12" },
    { name: 'hasan', id: "2" },
    { name: 'hasan', id: "3" },
    { name: 'hasan', id: "4" },
    { name: 'hasan', id: "5" },
    { name: 'hasan', id: "6" },
    { name: 'hasan', id: "8" }
]
app.get('/users', (req, res) => {
    res.send(users)
})
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)
})
app.get('/', (req, res) => {
    res.send("server is runnig")
})
app.post('/users', (req, res) => {
    const recivededData = req.body;
    recivededData.id = users.length;
    users.push(recivededData);

    console.log(recivededData);
    res.json(recivededData)
})
app.listen(port, () => {
    console.log("server is runing in port", port);
})