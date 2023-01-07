import axios from "axios";

export const API = axios.create({
  baseURL:
    "https://api.kontenbase.com/query/api/v1/9481a30a-8ff4-430c-b8c9-e81001a097c9",
});

export const setAuthToken = (token) => {
  if (token) {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete API.defaults.headers.common["Authorization"];
  }
};
