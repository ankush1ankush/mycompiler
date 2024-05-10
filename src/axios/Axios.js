import axios from "axios";

const instance = axios.create({
  //baseURL:"http://127.0.0.1:5001/mycompiler-ddc66/us-central1/api",
  baseURL:"http://localhost:5000",
});

export default instance;
