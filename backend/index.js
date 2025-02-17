const express = require("express");

const app = express();

app.post("/api/v1/signup", (req, res) => {
    res.json({
        message: "Sign up",
    })
})

app.post("/api/v1/signin", (req, res) => {
    res.json({
        message: "Sign in",
    })
})

app.post("/api/v1/txn/sign", (req, res) => {
    res.json({
        message: "txn",
    })
})

app.get("/api/v1/txn/?id=id", (req, res) => {
    res.json({
        message: "txn",
    })
})

app.listen(3000);