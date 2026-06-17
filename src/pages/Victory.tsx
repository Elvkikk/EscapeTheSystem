import { Link } from "react-router-dom";
import { useInventory } from "../context/inventoryContextValue";

export const Victory = () => {
  const { resetInventory } = useInventory();

  return (
    <div className="text-page">
      <p className="eyebrow">Låsning inaktiverad</p>
      <h1>Du rymde från Projekt NEXUS.</h1>
      <p>
        Den sista överstyrningen fungerade. Slussarna är öppna, och AI:n kan
        inte längre hålla dig instängd.
      </p>
      <Link className="button" to="/" onClick={resetInventory}>
        Tillbaka till start
      </Link>
    </div>
  );
};
