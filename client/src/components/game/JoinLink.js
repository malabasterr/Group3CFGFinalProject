import { useState } from "react";
import "./game.css";

const JoinLink = ({ link }) => {
  const [active, setActive] = useState(false);

  // Function to handle copying to clipboard
  const handleChange = () => {
    setActive(true);
    navigator.clipboard.writeText(link);
  };

  return (
    <div className='joinLinkContainer'>
      <h2 className='joinLinkText'>
        Send this link to your friend to connect.
      </h2>
      <div className='copyLink' onClick={handleChange}>
        {active ? "Copied !" : "Click to copy !"}
      </div>
      <button
        className={
          active
          ? 'joinLink joinLinkActive'
          : 'joinLink'
        }
        onClick={handleChange}
      >
        {link}
      </button>
    </div>
  );
};

export default JoinLink;
