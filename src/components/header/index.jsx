import { useContext, useEffect, useState } from "react";

import {
  Anchor,
  AnchorLogin,
  DropDownContact,
  DropDownLogin,
  DropDownLoginButton,
  DropDownLoginInput,
  ErrorSpan,
  HeaderSearchBar,
  HeaderSearchButton,
  HeaderSearchInput,
  Logo,
  Main,
  Nav,
} from "./style";

import {
  BsSearch,
  BsFacebook,
  BsInstagram,
  BsWhatsapp,
  BsBag,
} from "react-icons/bs";
import { motion } from "framer-motion";

import { LoginSchema } from "../../schemas/login";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ShopContext } from "../../provider/shop";

export default function Header() {
  const { findProducts } = useContext(ShopContext);

  const [dropDownShow, setDropDownShow] = useState(false);

  const [searchInputValue, setSearchInputValue] = useState("");
  
  function onclickhandler(event, value) {
    event.preventDefault();
    findProducts(value)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(LoginSchema) });

  const signUp = (data) => {
    console.log(data);
  };

  const [dropDownContactShow, setDropDownContactShow] = useState(false);

  return (
    <>
      <Main>
        <Logo>No Brand</Logo>
        <HeaderSearchBar>
          <HeaderSearchInput
            onChange={(event) => setSearchInputValue(event.target.value)}
          />
          <HeaderSearchButton
            type="submit"
            onClick={(event) => onclickhandler(event, searchInputValue)}
          >
            <BsSearch />
          </HeaderSearchButton>
        </HeaderSearchBar>
        <Nav>
          <Anchor>
            <BsBag />
          </Anchor>
          <AnchorLogin
            onMouseEnter={() => setDropDownShow(true)}
            onMouseLeave={() => setDropDownShow(false)}
          >
            Login
            {dropDownShow && (
              <DropDownLogin
                onSubmit={handleSubmit(signUp)}
                as={motion.form}
                initial={{ y: "15px", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <DropDownLoginInput
                  type="email"
                  placeholder="EMAIL"
                  {...register("email")}
                />
                <ErrorSpan>{errors?.email?.message}</ErrorSpan>
                <DropDownLoginInput
                  type="password"
                  placeholder="SENHA"
                  {...register("password")}
                />
                <ErrorSpan>{errors ? errors.password?.message : " "}</ErrorSpan>
                <DropDownLoginButton
                  type="submit"
                  as={motion.button}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Entrar
                </DropDownLoginButton>
              </DropDownLogin>
            )}
          </AnchorLogin>
          <Anchor>Cadastro</Anchor>
          <Anchor
            onMouseEnter={() => setDropDownContactShow(true)}
            onMouseLeave={() => setDropDownContactShow(false)}
          >
            Contato{" "}
            {dropDownContactShow && (
              <DropDownContact
                as={motion.div}
                initial={{ y: "15px", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <BsFacebook />
                <BsInstagram />
                <BsWhatsapp />{" "}
              </DropDownContact>
            )}
          </Anchor>
        </Nav>
      </Main>
    </>
  );
}
