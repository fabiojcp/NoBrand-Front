import { useEffect, useState } from "react";
import {
  Discount,
  DiscountValue,
  Image,
  Main,
  OriginalValue,
  TextArea,
  Title,
} from "./style";

import { motion } from "framer-motion";

export default function ProductCard(product) {
  const [dropDownShow, setDropDownShow] = useState(false);
  const [windowwidth, setwindowwidth] = useState(
    Number((window.innerWidth - window.innerWidth * 0.4) / 5)
  );

  const discount = Math.abs(
    Math.round(
      (1 - product.product.price / product.product.original_price) * 100
    )
  );
  function handleResize() {
    Number((window.innerWidth - window.innerWidth * 0.4) / 5);
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <Main
      windowwidth={windowwidth}
      onMouseEnter={() => setDropDownShow(true)}
      onMouseLeave={() => setDropDownShow(false)}
      as={motion.div}
      initial={{ x: "100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        windowwidth={windowwidth}
        backgound={product.product.thumbnail}
      ></Image>
      <TextArea windowwidth={windowwidth}>
        <OriginalValue windowwidth={windowwidth}>
          {discount < 100 && product.product.original_price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
        </OriginalValue>
        <DiscountValue windowwidth={windowwidth}>
          {product.product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
        </DiscountValue>
        <Discount windowwidth={windowwidth}>
          {discount < 100 && discount + "% OFF"}
        </Discount>
        <Title windowwidth={windowwidth}>{product.product.title}</Title>
      </TextArea>
    </Main>
  );
}
