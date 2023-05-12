import axios from "axios";

const authFetchInterceptor = axios.create({
  baseURL: "http://course-api.com",
});

authFetchInterceptor.interceptors.request.use(
  (request) => {
    request.headers["Accept"] = "application/json";
    console.log("request sent");
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authFetchInterceptor.interceptors.response.use(
  (response) => {
    console.log("recieved response");
    return response;
  },
  (error) => {
    console.log(error.response);
    if (error.response.status === 404) {
      console.log("NOT FOUND");
    }
    return Promise.reject(error);
  }
);

export default authFetchInterceptor;
