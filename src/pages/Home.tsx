import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="text-page">
      <p className="eyebrow">Escape the System</p>
      <h1>Du är instängd i Project NEXUS.</h1>
      <p>
        Gå igenom den övergivna AI-forskningsanläggningen, lös varje rum med
        rätt föremål och samla det du behöver för att låsa upp utgången.
      </p>

      <Link className="button" to="/rooms/server-room">
        Gå in i serverrummet
      </Link>
    </div>
  );
};
