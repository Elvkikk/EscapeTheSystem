import { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import rooms from "../data/rooms.json";
import { useInventory } from "../context/inventoryContextValue";

export const RoomPage = () => {
  const { roomPath } = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { inventory, addItem } = useInventory();
  const [exitSolved, setExitSolved] = useState(false);

  const room = rooms.find((room) => room.roomPath === roomPath);
  const showHint = searchParams.get("hint") === "true";

  if (!room) {
    navigate("/", { replace: true });
    return null;
  }

  const rewardIsCollected =
    room.itemToAdd !== null &&
    inventory.some((item) => item.id === room.itemToAdd);

  const roomIsSolved = room.itemToAdd === null ? exitSolved : rewardIsCollected;
  const currentImage = roomIsSolved ? room.solvedImage : room.unsolvedImage;
  const currentInstruction = roomIsSolved
    ? room.solvedInstruction
    : room.unsolvedInstruction;

  const handleUseItem = (itemId: number) => {
    if (roomIsSolved) {
      return;
    }

    if (itemId !== room.itemToSolve) {
      return;
    }

    if (room.itemToAdd === null) {
      setExitSolved(true);
    } else {
      addItem(room.itemToAdd);
    }
  };

  const toggleHint = () => {
    if (showHint) {
      setSearchParams({});
    } else {
      setSearchParams({ hint: "true" });
    }
  };

  return (
    <div className="room-page">
      <div>
        <p className="eyebrow">Room {room.id}</p>
        <h1>{room.roomName}</h1>
        <p>{currentInstruction}</p>
      </div>

      <img className="room-image" src={currentImage} alt={room.roomName} />

      <div className="actions">
        <button type="button" onClick={toggleHint}>
          {showHint ? "Hide hint" : "Show hint"}
        </button>

        {roomIsSolved && room.itemToAdd === null && (
          <button type="button" onClick={() => navigate("/victory")}>
            Escape
          </button>
        )}
      </div>

      {showHint && <p className="hint">{room.hint}</p>}

      {!roomIsSolved && (
        <section>
          <h2>Use an item</h2>
          <div className="item-buttons">
            {inventory.map((item) => (
              <button
                className="item-button"
                key={item.id}
                type="button"
                onClick={() => handleUseItem(item.id)}
              >
                <img src={item.image} alt="" />
                <span>{item.item}</span>
              </button>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
