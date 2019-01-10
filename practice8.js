"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

let user = [
  {
    userId: 1,
    firstName: "Mome",
    lastName: "Linwww",
    userID: "100",
    PW: "1234",
    createdBy: ""
  },
  {
    userId: 2,
    firstName: "Boo",
    lastName: "Cheng",
    userID: "200",
    PW: "1234",
    createdBy: ""
  },
  {
    userId: 3,
    firstName: "Ning",
    lastName: "Chen",
    userID: "300",
    PW: "1234",
    createdBy: ""
  },
  {
    userId: 4,
    firstName: "Chin",
    lastName: "Chia",
    userID: "400",
    PW: "1234",
    createdBy: ""
  },
  {
    userId: 5,
    firstName: "Joy",
    lastName: "Oyang",
    userID: "500",
    PW: "1234",
    createdBy: ""
  }
];

app.get("/user/list", function(request, response) {
  let getuser = request.param.user;
  response.writeHead(200, { "Content-Type": "text/html" });
  // for (let index = 0; index < user.length; index++) {
  response.end(JSON.stringify(user));
  // }
});

app.get("/user", function(request, response) {
  let getuser = request.param.user;
  response.writeHead(200, { "Content-Type": "text/html" });
  for (let index = 0; index < user.length; index++) {
    if (getuser == user[index].userId) {
      // response.end("Id is = " + getuser);
      response.end(JSON.stringify(user[index]));
    }
    console.log(getuser + "/" + user[index].userId);
  }
});

app.post("/user", function(request, response) {
  // console.log(request.body[0].firstName); // your JSON
  // response.send(request.body[0].firstName); // echo the result back
  let tempData = [];
  // for (let index = 0; index < request.body.length; index++) {
  // if ( data[index].Status == "Valid" ) {
  user.push(request.body);
  //  }
  // }
  response.end(JSON.stringify(user));
});

app.put("/", function(request, response) {
  response.send("How are you today?");
});

app.listen(8080, function() {
  console.log("Server is started");
});
