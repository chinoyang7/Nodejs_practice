"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

const quotesEng = [
  "The value of a man resides in what he gives and not in what he is capable of receiving.",
  "The mass of a body is a measure of its energy content.",
  "Anyone who has never made a mistake has never tried anything new."
];

const quotesZh = [
  "一個人的價值，在於他貢獻了什麼，而不在於他能得到什麼。",
  "一個物體的質量就是其所含能量的度量單位。",
  "一個從未犯錯的人是因為他不曾嘗試新鮮事物。"
];

let sentence;

function ENorCH(ENorCH) {
  console.log(ENorCH);
  let number;
  switch (ENorCH) {
    case "EN":
      number = Math.floor(Math.random() * (quotesEng.length - 1));
      sentence = quotesEng[number];
      break;
    case "CH":
      number = Math.floor(Math.random() * (quotesZh.length - 1));
      sentence = quotesZh[number];
      break;
    default:
      break;
  }
  return sentence;
}

app.get("/:ENorCH", function(request, response) {
  ENorCH(request.params.ENorCH);
  response.send(JSON.stringify(sentence));
});
// app.get("/CH", function(request, response) {
//   ENorCH("CH");
//   response.send(JSON.stringify(sentence));
// });

app.post("/", function(request, response) {
  response.send("What are you looking for?");
});

app.put("/", function(request, response) {
  response.send("How are you today?");
});

app.listen(8080, function() {
  console.log("Server is started");
});
