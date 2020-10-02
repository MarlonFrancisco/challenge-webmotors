import axios from "axios";
import {
  DataResponseMakes,
  DataResponseModels,
  DataResponseVehicles,
  DataResponseVersions,
} from "../@types";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default {
  getMakes: () => {
    return api.get<DataResponseMakes>("/api/OnlineChallenge/Make");
  },
  getModels: (MakeID: number) => {
    return api.get<DataResponseModels>(`/api/OnlineChallenge/Model`, {
      params: {
        MakeID,
      },
    });
  },
  getVersions: (ModelID: number) => {
    return api.get<DataResponseVersions>(`/api/OnlineChallenge/Version`, {
      params: {
        ModelID,
      },
    });
  },
  getVehicles: (Page: number) => {
    return api.get<DataResponseVehicles>(`/api/OnlineChallenge/Vehicles`, {
      params: {
        Page,
      },
    });
  },
};
