import { Link } from "react-router-dom";
import like from "../assets/like-button.svg";
import dislike from "../assets/dislike-button.svg";

function CharacterCard({ character }) {
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
                        <button className="btn btn-light me-2">
                            <img src={like} alt="Like" style={{ width: "20px" }} />
                        </button>
                        <button className="btn btn-light">
                            <img src={dislike} alt="Dislike" style={{ width: "20px" }} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CharacterCard;
