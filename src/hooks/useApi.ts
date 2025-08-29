import { useEffect, useState } from "react";
import { ApplicantApi, ApplicationApi, JobPostingApi, RegistrationApi } from "../client";
import { BaseAPI } from "../client/base";
import { ApiConfig, ApiAxiosInstance } from "../config/apiConfig";

enum ApiRoutes {
  Applicant,
  Application,
  JobPosting,
  Registration,
}

const useApi = (route: ApiRoutes) => {
  const [api, setApi] = useState<BaseAPI | undefined>(undefined);

  useEffect(() => {
    let apiInstance;

    console.log("API called with route:", route);

    switch (route) {
      case ApiRoutes.Applicant:
        apiInstance = new ApplicantApi(ApiConfig, undefined, ApiAxiosInstance);
        break;
      case ApiRoutes.Application:
        apiInstance = new ApplicationApi(ApiConfig, undefined, ApiAxiosInstance);
        break;
      case ApiRoutes.JobPosting:
        apiInstance = new JobPostingApi(ApiConfig, undefined, ApiAxiosInstance);
        break;
      case ApiRoutes.Registration:
        apiInstance = new RegistrationApi(ApiConfig, undefined, ApiAxiosInstance);
        break;
      default:
        throw new Error("Invalid API route");
    }

    setApi(apiInstance);
  }, [route]);

  return api;
};

export { ApiRoutes };
