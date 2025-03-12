import { Chat, contracts } from "@/json data/contracts";
import { Contract } from "@/types";
import { createContext, ReactNode, useEffect, useState } from "react";

interface ContractContextProps {
  contract: Contract[] | null;
  filteredContract: Contract[] | null;
  filterContract: (contractTitle: string) => void;
  searchFilterContract: (searchTerm: string) => void;
  activeChat: Chat | null;
  filterZedHistory: (title: string) => void;
}

export const ContractContext = createContext<ContractContextProps | undefined>(
  undefined
);

interface ContextProviderProps {
  children: ReactNode;
}

export const ContractContextProvider = ({ children }: ContextProviderProps) => {
  // Initialize states
  const [contract, setContract] = useState<Contract[]>(contracts ?? []);
  const [filteredContract, setFilteredContract] = useState<Contract[] | null>(
    null
  );
  const [activeChat, setActiveChat] = useState<Chat | null>({
    id: 0,
    title: "No Chat Found",
    messages: [],
  });

  // Sync contract state when `contracts` change
  useEffect(() => {
    setContract(contracts ?? []);
  }, [contracts]);

  // Function to filter contracts by title
  function filterContract(contractTitle: string) {
    if (!contract || contract.length === 0) return;

    const foundContract = contract.find(
      (cont) => cont.contract_name.toLowerCase() === contractTitle.toLowerCase()
    );

    setFilteredContract(foundContract ? [foundContract] : []);
  }

  // Function to filter and set the active chat history
  function filterZedHistory(title: string) {
    const chat = contracts
      .flatMap((cont: any) => cont.zed_history ?? [])
      .find(
        (hist: any) => hist.title.toLowerCase() === title.toLowerCase()
      ) ?? {
      id: 0,
      title: "No Chat Found",
      messages: [],
    };

    setActiveChat(chat);
  }

  // Function to search and filter contracts by name or type
  function searchFilterContract(searchTerm: string) {
    const filtered = contracts.filter(
      (file: any) =>
        file.contract_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        file.type.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredContract(filtered.length > 0 ? filtered : []);
  }

  return (
    <ContractContext.Provider
      value={{
        contract,
        filteredContract,
        filterContract,
        searchFilterContract,
        activeChat,
        filterZedHistory,
      }}
    >
      {children}
    </ContractContext.Provider>
  );
};
