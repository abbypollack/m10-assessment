import { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import { findAll } from "../api/CharacterAPI";

function CharacterCards() {

    const [characters, setCharacters] = useState([]);
    const [sortMethod, setSortMethod] = useState("likes");
    const [searchQuery, setSearchQuery] = useState("");

    function sortCharacters(sortMethod, characters) {
        let charactersCopy = [...characters];
        switch (sortMethod) {
            case "likes":
                return charactersCopy.sort((a, b) => b.likes - a.likes);
            case "alphabetically":
                return charactersCopy.sort((a, b) => a.fullName.localeCompare(b.fullName));
            case "family":
                return charactersCopy.sort((a, b) => a.family.localeCompare(b.family));
            default:
                return charactersCopy;
        }
    }

    function handleSearchChange(evt) {
        setSearchQuery(evt.target.value);
    }

    useEffect(() => {
        findAll()
            .then(characters => {
                const sortedCharacters = sortCharacters(sortMethod, characters)
                setCharacters(sortedCharacters);
            })
            .catch(console.error);
    }, [sortMethod]);

    return (
        <div className="container mt-4">
            <div className="mb-3 sorting-container">
                <select
                    className="form-select char-sort-method"
                    onChange={(evt) => setSortMethod(evt.target.value)}
                    aria-label="Sort characters">
                    <option value="likes">Sort by Likes</option>
                    <option value="alphabetically">Sort Alphabetically</option>
                    <option value="family">Sort by Family</option>
                </select>
                <input
                    className="form-control char-search"
                    type="text"
                    placeholder="Search by name..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div>
            <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                {characters
                    .filter(character => character.fullName.toLowerCase().startsWith(searchQuery.toLowerCase()))
                    .map(character => <CharacterCard key={character.id} character={character} />)
                }
            </div>
        </div>
    );
}

export default CharacterCards;