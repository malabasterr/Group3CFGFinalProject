import { useState } from "react";
import "./game.css";

const JoinLink = ({ link }) => {
  const [active, setActive] = useState(false);

  const handleChange = () => {
    setActive(true);
    navigator.clipboard.writeText(link);
  };

  return (

    
    <div className='join_link_container'>
      <h2 className='join_link_text'>
        Send this link to your friend to connect.
      </h2>
      <div className='copy_link' onClick={handleChange}>
        {active ? "Copied !" : "Click to copy !"}
      </div>
      <button
      className={
        active
          ? 'join_link join_link_active'
          : 'join_link'
      }
      onClick={handleChange}
    >
      {link}
    </button>
      
    </div>
    

  );
};

export default JoinLink;
