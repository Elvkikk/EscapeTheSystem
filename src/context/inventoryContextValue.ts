import { createContext, useContext } from "react";
import type { Item } from "./inventoryProvider";

type InventoryContextType = {
  inventory: Item[];
  addItem: (itemId: number) => void;
};

export const InventoryContext = createContext<InventoryContextType | null>(null);

export const useInventory = () => {
  const context = useContext(InventoryContext);

  if (!context) {
    throw new Error("useInventory must be used inside InventoryProvider");
  }

  return context;
};
