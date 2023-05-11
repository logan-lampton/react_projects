import axios from "axios";
import CustomInstance from "../components/CustomInstance";

const authFetch = axios.create({
  baseURL: "http://course-api.com",
  headers: {
    Accept: "application/json",
  },
});

export default authFetch;
