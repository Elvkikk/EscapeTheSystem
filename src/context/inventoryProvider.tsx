import { useState, type ReactNode } from "react";
import items from "../data/items.json";
import { InventoryContext } from "./inventoryContextValue";

export type Item = {
  id: number;
  item: string;
  description: string;
  image: string;
};

export const InventoryProvider = ({ children }: { children: ReactNode }) => {
  const startItem = items.find((item) => item.id === 1) as Item;
  const [inventory, setInventory] = useState<Item[]>([startItem]);

  const addItem = (itemId: number) => {
    const itemExists = inventory.some((item) => item.id === itemId);
    const itemToAdd = items.find((item) => item.id === itemId) as
      | Item
      | undefined;

    if (!itemExists && itemToAdd) {
      setInventory([...inventory, itemToAdd]);
    }
  };

  const resetInventory = () => {
    setInventory([startItem]);
  };

  return (
    <InventoryContext.Provider value={{ inventory, addItem, resetInventory }}>
      {children}
    </InventoryContext.Provider>
  );
};
