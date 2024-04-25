import { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import { findAll } from "../api/CharacterAPI";

function CharacterCards() {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        findAll()
            .then(setCharacters)
            .catch(console.error);
    }, []);

    return (
        <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
            {characters.map(character => <CharacterCard key={character.id} character={character} />)}
        </div>
    );
}

export default CharacterCards;