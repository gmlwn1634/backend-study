const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const todo = require("./models/todo");

mongoose.connect("mongodb://localhost/todo-demo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hi!");
});

router.post("/todos", async (req, res) => {
  const { value } = req.body;
  const maxOrderTodo = await todo.findOne().sort("-order").exec() //order를 기준으로 내림차순
  //구조 분해 할당 구문은 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식입니다.
  let order = 1;

})

app.use("/api", bodyParser.json(), router);
app.use(express.static("./assets"));

app.listen(8080, () => {
  console.log("서버가 켜졌어요!");
});