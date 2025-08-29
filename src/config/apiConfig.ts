import axios from "axios";
import { Configuration } from "../client";

const isProduction = process.env.NODE_ENV === "production";

export const ApiConfig: Configuration = new Configuration({
  basePath: isProduction
    ? process.env.TEST_AUTOMATION_API_URL || "http://192.168.168.188:5601"
    : "http://localhost:5164",
});

export const ApiAxiosInstance = axios.create({
  baseURL: ApiConfig.basePath,
});
