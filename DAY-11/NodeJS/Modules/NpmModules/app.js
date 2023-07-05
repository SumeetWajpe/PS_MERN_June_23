import axios from "axios";

axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then(res => console.log(res.data));

console.log("Program ended !");
