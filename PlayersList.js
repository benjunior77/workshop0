import React from "react";
import Players from "./PlayersList";
import Player from "./Player"
const PlayersList = () => {
    return(
        <div>
            {
                Player.map((joueur) => (
                    <div>
                        <Players
                            name={joueur.name}
                            age={joueur.age}
                            nationalite={joueur.nationalite}
                            url={joueur.url}
                        />
                    </div>
                ))}
        </div>
)}
export default PlayersList

export default players;
