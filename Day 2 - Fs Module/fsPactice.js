const fs = require("fs");

fs.writeFile("demo.text2", "Hello! I am trying to learing backend.", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("successfull");
  }
});

fs.appendFile("demo.text2", "Is backend easy?", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("successfull");
  }
});

fs.rename("demo.text2", "learningBackend.text", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("successfull");
  }
});

fs.readFile("demo.text2", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

fs.unlink("demo.text2", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("successfull");
  }
});

fs.exists("demo.text2", (result) => {
  if (result) {
    console.log("found");
  } else {
    console.log("not found!");
  }
});
