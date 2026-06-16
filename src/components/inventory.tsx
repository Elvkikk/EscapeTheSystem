import { useInventory } from "../context/inventoryContextValue";

export const Inventory = () => {
  const { inventory } = useInventory();

  return (
    <aside className="inventory">
      <h2>Inventory</h2>

      <div className="inventory-list">
        {inventory.map((item) => (
          <div className="inventory-card" key={item.id}>
            <img src={item.image} alt={item.item} />
            <div>
              <strong>{item.item}</strong>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};
