import axios from "axios";

export const MercadoLivreApi = axios.create({
  baseURL: "https://api.mercadolibre.com/sites/MLB",
});

export const NoBrandApi = axios.create({
  baseURL: "http://localhost:3333/",
});