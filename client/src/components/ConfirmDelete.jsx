import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { findById, deleteCharacter } from "../api/CharacterAPI";

function ConfirmDelete() {

    const navigate = useNavigate();
    const { characterId } = useParams();

    const [character, setCharacter] = useState();
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        if (characterId) {
            findById(characterId)
                .then(setCharacter)
                .catch(() => navigate("/characters"));
        } else {
            navigate("/characters");
        }

    }, [navigate, characterId]);


    function handleDelete() {
        setIsDeleting(true);
        deleteCharacter(character.id)
            .then(() => {
                navigate("/characters");
            })
            .catch(() => {
                navigate("/characters");
            });
    }

    if (!character || isDeleting) {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="text-white custom-dark w-50 text-center delete-modal">
                <h1>Delete {character.fullName}?</h1>
                <p>Are you sure you want to delete this character?</p>
                <div>
                    <button type="button" className="btn btn-danger me-2" onClick={handleDelete}>Delete</button>
                    <Link to="/characters" className="btn btn-warning">Cancel</Link>
                </div>
            </div>
        </div>
    );
}

export default ConfirmDelete;