import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="text-page">
      <p className="eyebrow">Escape the System</p>
      <h1>You are trapped inside Project NEXUS.</h1>
      <p>
        Move through the abandoned AI research facility, solve each room with
        the right item, and collect what you need to unlock the exit.
      </p>

      <Link className="button" to="/rooms/server-room">
        Enter Server Room
      </Link>
    </div>
  );
};
