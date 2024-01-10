import Player from "./Player";
const Players = ({ players, activePlayer, onUpdate, ...attrs }) => {
  return (
    <ol {...attrs}>
      <Player
        name={players.X}
        symbol="X"
        isActive={activePlayer === "X"}
        onUpdate={onUpdate}
      />
      <Player
        name={players.O}
        symbol="O"
        isActive={activePlayer === "O"}
        onUpdate={onUpdate}
      />
    </ol>
  );
};

export default Players;
