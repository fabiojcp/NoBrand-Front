import {
  DropDownLogin,
  DropDownLoginButton,
  DropDownLoginInput,
  ErrorSpan,
  MainWrapper,
} from "./style";
import { motion } from "framer-motion";

import { LoginSchema, RegisterAdmSchema } from "../../schemas/login";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext } from "../../provider/auth";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function ManagementLanding() {
  const { isLogged, loginUser, registerManager, userLocal } =
    useContext(AuthContext);

  const {
    register: loginRegister,
    handleSubmit: loginSubmit,
    formState: { errors: loginErrors },
  } = useForm({ resolver: yupResolver(LoginSchema) });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(RegisterAdmSchema) });

  const signUp = (data) => {
    console.log(data)
    registerManager(data);
  };
  const signIn = (data) => {
    loginUser(data, "adm");
    navigate("/management/home");
  };

  const navigate = useNavigate();
  return (
    <MainWrapper>
      <DropDownLogin
        onSubmit={loginSubmit(signIn)}
        as={motion.form}
        initial={{ y: "15px", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <ErrorSpan>Login</ErrorSpan>
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

      <DropDownLogin
        onSubmit={handleSubmit(signUp)}
        as={motion.form}
        initial={{ y: "15px", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <ErrorSpan>Cadastro</ErrorSpan>
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

        
        <DropDownLoginInput
          type="text"
          placeholder="Chave Secreta"
          {...register("registerSecretKey")}
        ></DropDownLoginInput>

        <ErrorSpan>{errors?.registerSecretKey?.message}</ErrorSpan>

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
      </DropDownLogin>
    </MainWrapper>
  );
}

