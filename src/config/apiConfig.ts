import axios from "axios";
import { Configuration } from "../client";

const isProduction = process.env.NODE_ENV === "production";

export const ApiConfig: Configuration = new Configuration({
  basePath: isProduction ? process.env.API_URL || "http://192.168.0.24:42872" : "http://localhost:8000",
});

export const ApiAxiosInstance = axios.create({
  baseURL: ApiConfig.basePath,
});

function setAxiosDefaults() {
  ApiAxiosInstance.defaults.baseURL = ApiConfig.basePath;
  ApiAxiosInstance.defaults.headers.common["Content-Type"] = "application/json";
  ApiAxiosInstance.defaults.timeout = 10000;
}

function setAxiosToken(storedToken: string) {
  ApiAxiosInstance.defaults.headers.common["Authorization"] = "Bearer " + storedToken;
}

export { setAxiosDefaults, setAxiosToken };
