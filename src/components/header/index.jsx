import { useContext, useEffect, useState } from "react";

import {
  Anchor,
  AnchorLogin,
  DropDownContact,
  DropDownLogin,
  DropDownLoginButton,
  DropDownLoginInput,
  DropDownRegister,
  ErrorSpan,
  Greetings,
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

import { LoginSchema, RegisterSchema } from "../../schemas/login";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ShopContext } from "../../provider/shop";
import { StyleContext } from "../../provider/style";
import { AuthContext } from "../../provider/auth";

export default function Header() {
  const { findProducts } = useContext(ShopContext);

  const { isLogged, loginUser, registerUser, userLocal } =
    useContext(AuthContext);

  const {
    dropLoginDownShow,
    setLoginDropDownShow,
    dropRegisterDownShow,
    setRegisterDropDownShow,
    dropDownContactShow,
    setDropDownContactShow,
  } = useContext(StyleContext);

  const [searchInputValue, setSearchInputValue] = useState("");

  function onclickhandler(event, value) {
    event.preventDefault();
    findProducts(value);
  }

  const {
    register: loginRegister,
    handleSubmit: loginSubmit,
    formState: { errors: loginErrors },
  } = useForm({ resolver: yupResolver(LoginSchema) });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(RegisterSchema) });

  const signUp = (data) => {
    console.log(data, "");
    registerUser(data);
    setLoginDropDownShow(false);
    setRegisterDropDownShow(false);
    setDropDownContactShow(false);
  };
  const signIn = (data) => {
    loginUser(data);
    setLoginDropDownShow(false);
    setRegisterDropDownShow(false);
    setDropDownContactShow(false);
  };
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
          {isLogged && userLocal.name && (
            <Greetings>Olá {userLocal?.name}</Greetings>
          )}

          {isLogged == false && (
            <>
              {" "}
              <div>
                <AnchorLogin
                  onMouseEnter={() => {
                    setLoginDropDownShow(true);
                    setRegisterDropDownShow(false);
                    setDropDownContactShow(false);
                  }}
                  onMouseLeave={() => setLoginDropDownShow(false)}
                >
                  Login
                </AnchorLogin>
                {dropLoginDownShow && (
                  <DropDownLogin
                    onMouseEnter={() => setLoginDropDownShow(true)}
                    onSubmit={loginSubmit(signIn)}
                    as={motion.form}
                    initial={{ y: "15px", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                  >
                    <DropDownLoginInput
                      type="email"
                      placeholder="EMAIL"
                      {...loginRegister("loginEmail")}
                    />
                    <ErrorSpan>{loginErrors?.loginEmail?.message}</ErrorSpan>

                    <DropDownLoginInput
                      type="password"
                      placeholder="SENHA"
                      {...loginRegister("loginPassword")}
                    />

                    <ErrorSpan>{loginErrors?.loginPassword?.message}</ErrorSpan>

                    <DropDownLoginButton
                      type="submit"
                      as={motion.button}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      Entrar
                    </DropDownLoginButton>
                  </DropDownLogin>
                )}
              </div>
              <div>
                <Anchor
                  onMouseEnter={() => {
                    setLoginDropDownShow(false);
                    setRegisterDropDownShow(true);
                    setDropDownContactShow(false);
                  }}
                  onMouseLeave={() => setRegisterDropDownShow(false)}
                >
                  Cadastro
                </Anchor>
                {dropRegisterDownShow && (
                  <DropDownRegister
                    onMouseEnter={() => setRegisterDropDownShow(true)}
                    onSubmit={handleSubmit(signUp)}
                    as={motion.form}
                    initial={{ y: "15px", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                  >
                    <DropDownLoginInput
                      type="text"
                      placeholder="NOME"
                      {...register("registerName")}
                    ></DropDownLoginInput>

                    <ErrorSpan>{errors?.registerName?.message}</ErrorSpan>

                    <DropDownLoginInput
                      type="text"
                      placeholder="TELEFONE"
                      {...register("registerPhone")}
                    ></DropDownLoginInput>

                    <ErrorSpan>{errors?.registerPhone?.message}</ErrorSpan>

                    <DropDownLoginInput
                      type="email"
                      placeholder="EMAIL"
                      {...register("registerEmail")}
                    ></DropDownLoginInput>

                    <ErrorSpan>{errors?.registerEmail?.message}</ErrorSpan>

                    <DropDownLoginInput
                      type="password"
                      placeholder="SENHA"
                      {...register("registerPassword")}
                    ></DropDownLoginInput>

                    <ErrorSpan>{errors?.registerPassword?.message}</ErrorSpan>

                    <DropDownLoginButton
                      type="submit"
                      as={motion.button}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      Cadastro
                    </DropDownLoginButton>
                  </DropDownRegister>
                )}
              </div>
            </>
          )}
          <Anchor
            onMouseEnter={() => setDropDownContactShow(true)}
            onMouseLeave={() =>
              setTimeout(() => setDropDownContactShow(false), 100)
            }
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
