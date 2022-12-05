import axios from "axios";


export const MercadoLivreApi = axios.create({
  baseURL: "https://api.mercadolibre.com/sites/MLB",
});