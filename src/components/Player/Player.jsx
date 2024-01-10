import { useState } from "react";

const Player = ({ name, symbol, isActive, onUpdate }) => {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);
  const handleClick = () => {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onUpdate(symbol, playerName);
    }
  };
  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  let buttonCaption = "Edit";
  let playerComponent = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    buttonCaption = "Save";
    playerComponent = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  } else {
    buttonCaption = "Edit";
    playerComponent = <span className="player-name">{playerName}</span>;
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerComponent}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{buttonCaption}</button>
    </li>
  );
};

export default Player;
