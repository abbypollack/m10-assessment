import { Link } from "react-router-dom";

function CharacterCard({ character }) {
    return (
        <div className="col">
            <div className="card h-100">
                <img src={character.imageUrl} className="card-img-top" alt={character.fullName} />
                <div className="card-body">
                    <h5 className="card-title">{character.fullName}</h5>
                </div>
                <div className="card-footer text-center">
                    <Link to={`/delete/${character.id}`} className="btn btn-danger me-2">Delete</Link>
                    <Link to={`/edit/${character.id}`} className="btn btn-secondary">Edit</Link>
                </div>
            </div>
        </div>
    );
}

export default CharacterCard;