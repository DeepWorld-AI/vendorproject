import { ZedHistoryContext } from "@/context/zedHistory-context";
import { useContext } from "react";

const useZedHistory = () => {
  const context = useContext(ZedHistoryContext);
  if (!context) {
    throw new Error("context must be withing the zed history provider");
  }

  return context;
};

export default useZedHistory;
