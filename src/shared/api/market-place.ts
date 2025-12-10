import axios, { AxiosInstance } from "axios"

const baseURL = "http://192.168.1.34:3001"

export class MarketPlaceApiClient {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL,
    });
  }

  getInstance() {
    return this.instance
  }
}

export const marketPlaceApiClient = new MarketPlaceApiClient().getInstance();
