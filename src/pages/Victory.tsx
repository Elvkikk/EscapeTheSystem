import { Link } from "react-router-dom";

export const Victory = () => {
  return (
    <div className="text-page">
      <p className="eyebrow">Lockdown disabled</p>
      <h1>You escaped Project NEXUS.</h1>
      <p>
        The final override worked. The facility doors are open, and the AI can
        no longer keep you inside.
      </p>

      <Link className="button" to="/">
        Back to start
      </Link>
    </div>
  );
};
