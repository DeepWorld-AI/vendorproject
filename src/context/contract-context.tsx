import { Chat, contracts } from "@/json data/contracts";
import { Contract } from "@/types";
import { createContext, ReactNode, useEffect, useState } from "react";

interface contractContextProps {
  contract: any | null;
  filteredContract: any | null;
  filterContract: (contratTitle: string) => void;
  activeChat: Chat | any;
  filterZedHistory: (title: string) => void;
  searchFilterContract: (titleOrType: string) => void;
}

export const ContractContext = createContext<contractContextProps | undefined>(
  undefined
);

interface contextProviderProps {
  children: ReactNode;
}

export const ContractContextProvider = ({ children }: contextProviderProps) => {
  // Get the contrat name from url
  const [activeChat, setActiveChat] = useState(
    contracts[0]?.zed_history?.[0] ?? { id: 0, title: "", messages: [] }
  );

  const [contract, setContract] = useState<Contract[]>(contracts ?? []);

  // Store filtered contract (or initially show all)
  const [filteredContract, setFilteredContract] = useState<Contract | null>(
    contracts.length > 0 ? contracts[0] : null
  );

  // Update state when `contracts` change (useful if fetched from an API)
  useEffect(() => {
    setContract(contracts ?? []);
  }, [contracts]);

  // function to set active contracts
  function filterContract(contractTitle: string) {
    if (!contract || contract.length === 0) return;

    const foundContract = contract.find(
      (cont) => cont.contract_name.toLowerCase() === contractTitle.toLowerCase()
    );
    setFilteredContract(foundContract ?? null);
  }

  // Function to filter and set the active chat history of Zed
  function filterZedHistory(title: string) {
    const chat = contracts
      .flatMap((cont) => cont.zed_history ?? [])
      .find((hist) => hist.title.toLowerCase() === title.toLowerCase()) ?? {
      id: 0,
      title: "No Chat Found",
      messages: [],
    };
    setActiveChat({ ...chat });
  }

  // function to filter the contract based on the contract-name and contract type
  function searchFilterContract(titleOrType: string) {
    const filteredContract = contracts.filter((cont) => {
      if (
        cont.contract_name.toLowerCase().includes(titleOrType.toLowerCase())
      ) {
        return cont;
      }
    });
    setContract(filteredContract);
  }

  return (
    <ContractContext.Provider
      value={{
        contract,
        filteredContract,
        filterContract,
        activeChat,
        filterZedHistory,
        searchFilterContract,
      }}
    >
      {children}
    </ContractContext.Provider>
  );
};
