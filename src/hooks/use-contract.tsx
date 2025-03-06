import { ContractContext } from "@/context/contract-context";
import { useContext } from "react";

export const useContract = () => {
  const context = useContext(ContractContext);

  if (!context) {
    throw new Error(
      "contract context must be within the contract context provider"
    );
  }

  return context;
};
