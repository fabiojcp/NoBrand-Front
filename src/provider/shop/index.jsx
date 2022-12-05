import React, { createContext, useEffect, useState } from "react";

import { MercadoLivreApi } from "../../services";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  function findProducts(value) {
    value === "d86271701707fa44d3208faa82de98544a2737db"
      ? MercadoLivreApi.get(`search?category=MLB1051`).then((res) => {
          setProducts(res.data.results);
        })
      : MercadoLivreApi.get(`search?q=${value.replaceAll(" ", "%20")}`).then(
          (res) => {
            setProducts(res.data.results);

          }
        );
  }
  return (
    <ShopContext.Provider value={{ findProducts, products }}>
      {children}
    </ShopContext.Provider>
  );
};
