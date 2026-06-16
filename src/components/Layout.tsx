import { Link, NavLink, Outlet } from "react-router-dom";
import rooms from "../data/rooms.json";
import { Inventory } from "./inventory";

export const Layout = () => {
  return (
    <div className="app-shell">
      <header className="topbar">
        <Link className="logo" to="/">
          Project NEXUS
        </Link>

        <nav>
          {rooms.map((room) => (
            <NavLink key={room.id} to={`/rooms/${room.roomPath}`}>
              {room.roomName}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="main-layout">
        <section className="page">
          <Outlet />
        </section>

        <Inventory />
      </main>
    </div>
  );
};
