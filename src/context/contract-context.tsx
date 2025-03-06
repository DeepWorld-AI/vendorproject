import { contracts } from "@/json data/contracts";
import { createContext, ReactNode } from "react";
import { useParams } from "react-router";

interface contractContextProps {
  contract: any | null;
}

export const ContractContext = createContext<contractContextProps | undefined>(
  undefined
);

interface contextProviderProps {
  children: ReactNode;
}

export const ContractContextProvider = ({ children }: contextProviderProps) => {
  // Get the contrat name from url
  const { contractName } = useParams<{ contractName: string }>();

  // find the contract by name from contract list
  const contract =
    contracts.find(
      (c) => c.contract_name.toLowerCase() === contractName?.toLowerCase()
    ) || null;

  return (
    <ContractContext.Provider value={{ contract }}>
      {children}
    </ContractContext.Provider>
  );
};
