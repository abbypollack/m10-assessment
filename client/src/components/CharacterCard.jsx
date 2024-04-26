import { Link } from "react-router-dom";
import like from "../assets/like-button.svg";
import dislike from "../assets/dislike-button.svg";
import { edit } from "../api/CharacterAPI";
import { useState } from "react";

function CharacterCard({ character }) {

    const [likeButton, setLikeButton] = useState(false);
    const [dislikeButton, setDislikeButton] = useState(false);

    function handleLike(evt) {
        if (!dislikeButton && !likeButton) {
            const updatedCharacter = { ...character, likes: character.likes + 1 };
            edit(updatedCharacter);
            character.likes++;
            setLikeButton(true);
        } else if (dislikeButton && !likeButton) {
            const updatedCharacter = { ...character, likes: character.likes + 1, dislikes: character.dislikes - 1 };
            edit(updatedCharacter);
            character.likes++;
            character.dislikes--;
            setLikeButton(true);
            setDislikeButton(false);
        } else if (likeButton) {
            const updatedCharacter = { ...character, likes: character.likes - 1 };
            edit(updatedCharacter);
            character.likes--;
            setLikeButton(false);
        }
    }
    function handleDislike(evt) {
        if (!likeButton && !dislikeButton) {
            const updatedCharacter = { ...character, dislikes: character.dislikes + 1 };
            edit(updatedCharacter);
            character.dislikes++;
            setDislikeButton(true);
        } else if (likeButton && !dislikeButton) {
            const updatedCharacter = { ...character, dislikes: character.dislikes + 1, likes: character.likes - 1 };
            edit(updatedCharacter);
            character.dislikes++;
            character.likes--;
            setDislikeButton(true);
            setLikeButton(false);
        } else if (dislikeButton) {
            const updatedCharacter = { ...character, dislikes: character.dislikes - 1 };
            edit(updatedCharacter);
            character.dislikes--;
            setDislikeButton(false);
        }
    }

    return (
        <div className="col">
            <div className="card h-100 bg-dark text-white">
                <img src={character.imageUrl} className="card-img-top img-fluid uniform-img" alt={character.fullName} />
                <div className="card-body">
                    <h5 className="card-title">{character.fullName}</h5>
                    <p className="card-text">{character.family}</p>
                    <p className="card-text">{character.title}</p>
                </div>
                <div className="card-footer bg-transparent border-top-0">
                    <div className="mb-2">
                        <Link to={`/characters/delete/${character.id}`} className="btn btn-danger me-2">Delete</Link>
                        <Link to={`/characters/edit/${character.id}`} className="btn btn-secondary">Edit</Link>
                    </div>
                    <div>
                        <button className="btn btn-light me-2" onClick={handleLike} style={{ backgroundColor: likeButton && "#000015" }}>
                            <img src={like} alt="Like" style={{ width: "20px" }} />
                            <span style={{ color: likeButton && 'white' }}>{character.likes}</span>
                        </button>
                        <button className="btn btn-light" onClick={handleDislike} style={{ backgroundColor: dislikeButton && "#000015" }}>
                            <img src={dislike} alt="Dislike" style={{ width: "20px" }} />
                            <span style={{ color: dislikeButton && 'white' }}>{character.dislikes}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CharacterCard;
