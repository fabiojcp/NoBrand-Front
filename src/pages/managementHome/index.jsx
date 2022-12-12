import { Button, MainWrapper } from "./style";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AuthContext } from "../../provider/auth";
import printUSers from "../../utils/print";

export default function ManagementHome() {
  const { getUsersData } = useContext(AuthContext);

  const HandlerPrint = async () => {
    const users = await getUsersData();
    setTimeout(() => printUSers(users), 5000);
  };
  return (
    <MainWrapper>
      <Button
        onClick={() => HandlerPrint()}
        as={motion.button}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 17,
        }}
      >
        Download usuários
      </Button>
    </MainWrapper>
  );
}
