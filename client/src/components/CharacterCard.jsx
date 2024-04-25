import { Link } from "react-router-dom";

function CharacterCard({ character }) {
    return (
        <div className="col">
            <div className="card h-100 bg-dark text-white"> {/* Add bg-dark and text-white classes */}
                <img src={character.imageUrl} className="card-img-top img-fluid uniform-img" alt={character.fullName} />
                <div className="card-body">
                    <h5 className="card-title">{character.fullName}</h5>
                    <p className="card-text">{character.family}</p>
                    <p className="card-text">{character.title}</p>
                </div>
                <div className="card-footer bg-transparent border-top-0"> {/* Make footer background transparent */}
                    <Link to={`/characters/delete/${character.id}`} className="btn btn-danger me-2">Delete</Link>
                    <Link to={`/characters/edit/${character.id}`} className="btn btn-secondary">Edit</Link>
                </div>
            </div>
        </div>
    );
}

export default CharacterCard;
