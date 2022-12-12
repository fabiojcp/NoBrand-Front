import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  loginEmail: yup
    .string()
    .required("Este campo é obrigatório")
    .email("Precisa ser um email"),
  loginPassword: yup.string().required("Este campo é obrigatório"),
});

export const RegisterSchema = yup.object().shape({
  registerName: yup.string().required("Este campo é obrigatório"),
  registerPhone: yup.string().required("Este campo é obrigatório"),
  registerEmail: yup.string().required("Este campo é obrigatório").email(),
  registerPassword: yup.string().required("Este campo é obrigatório"),
});

export const RegisterAdmSchema = yup.object().shape({
  registerName: yup.string().required("Este campo é obrigatório"),
  registerPhone: yup.string().required("Este campo é obrigatório"),
  registerEmail: yup.string().required("Este campo é obrigatório").email(),
  registerPassword: yup.string().required("Este campo é obrigatório"),
  registerSecretKey : yup.string().required("Este campo é obrigatório")
});