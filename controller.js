import express from "express";
import cookieParser from "cookie-parser";
import fs from "fs";
import { rechne, getHistory, loadHistory, getAllUsers } from "./rechnung.js";
import { renderIndex } from "./pageIndex.js";
import { renderEE } from "./pageEE.js";
import { renderSecret } from "./pageSecret.js";
import { renderLogin } from "./pageLogin.js";
import { get } from "http";

const app = express();
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// config
const port = 3000;
const length = 50;
const historyFile = "";
loadHistory(historyFile);

// load site
app.get("/", (req, res) => {
  const user = req.cookies.username;
  if (!user) {
    res.cookie("login", "false", { maxAge: 1000 });
    return res.redirect("/login");
  }
  res.send(renderIndex("", getHistory(user, length), user));
});

app.get("/login", (req, res) => {
  res.clearCookie("username");
  res.send(renderLogin(req.cookies.login, getAllUsers()));
});

app.post("/login", (req, res) => {
  res.cookie("username", req.body.username);
  // console.log(`User ${req.body.username} logged in.`);
  res.redirect("/");
});

// POST-request
app.post("/", (req, res) => {
  if (!req.cookies.username) {
    return res.redirect("/login");
  }
  const user = req.cookies.username;
  const { one, two, operator } = req.body;
  const result = rechne(one, two, operator, user);
  if (result === 42) {
    res.redirect("/EASTER-EGG");
  } else if (result === 88) {
    // from oo7
    res.redirect("/SECRET");
  } else {
    res.send(renderIndex(result, getHistory(user, length), user));
  }
});

app.get("/EASTER-EGG", (req, res) => {
  res.send(renderEE());
});

app.get("/SECRET", (req, res) => {
  if (req.cookies.username === " ") {
    res.send(renderSecret());
  } else {
    res.redirect("/");
  }
});

export default app;

app.listen(port, () => {
  console.log(`Server läuft unter http://localhost:${port}`);
});
