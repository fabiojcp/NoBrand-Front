import { useContext, useEffect, useState } from "react";

import { ShopContext } from "../../provider/shop";
import { StyleContext } from "../../provider/style";

import ProductCard from "../productCard";
import {
  Main,
  ChangeItensPlusButton,
  ChangeItensDecreaseButton,
} from "./style";
import { motion } from "framer-motion";

import { GrFormNext, GrFormPrevious } from "react-icons/gr";

export default function MainBox() {
  const { findProducts, products } = useContext(ShopContext);

  const {
    setLoginDropDownShow,
    setRegisterDropDownShow,
    setDropDownContactShow,
  } = useContext(StyleContext);

  const [dropDownShow, setDropDownShow] = useState(false);

  const [quantity, setQuantity] = useState(10);

  function changeItens(value) {
    value !== "plus"
      ? setQuantity(quantity - 10)
      : quantity < products.length && setQuantity(quantity + 10);
  }

  useEffect(() => {
    findProducts("d86271701707fa44d3208faa82de98544a2737db");
  }, []);

  return (
    <Main
      onMouseEnter={() => {
        setDropDownShow(true);
        setLoginDropDownShow(false);
        setRegisterDropDownShow(false);
        setDropDownContactShow(false);
      }}
      onMouseLeave={() => setDropDownShow(false)}
      as={motion.div}
      initial={{ y: "15px", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      {dropDownShow && quantity > 10 && (
        <ChangeItensDecreaseButton onClick={() => changeItens("decrease")}>
          {GrFormPrevious()}
        </ChangeItensDecreaseButton>
      )}
      {products.length > 0 &&
        products.slice(quantity - 10, quantity)?.map((product, index) => {
          return (
            <ProductCard
              key={index}
              product={product}
              as={motion.div}
              initial={{ x: "-15px", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            />
          );
        })}
      {dropDownShow && quantity < products.length && (
        <ChangeItensPlusButton
          onClick={() => {
            changeItens("plus");
          }}
        >
          {GrFormNext()}
        </ChangeItensPlusButton>
      )}
    </Main>
  );
}
