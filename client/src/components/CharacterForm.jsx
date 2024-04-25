import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { findById, save } from "../api/CharacterAPI";

const blankCharacter = {
    firstName: "",
    lastName: "",
    fullName: "",
    family: "",
    title: "",
    image: "",
    imageUrl: "",
};

function CharacterForm() {

    // router hooks
    const navigate = useNavigate();
    const { characterId } = useParams();

    // state
    const [character, setCharacter] = useState(blankCharacter)
    const [errors, setErrors] = useState();

    // effects

    useEffect(() => {
        if (characterId) {
            findById(characterId)
                .then(setCharacter)
                .catch(() => navigate("/"));
        } else {
            setCharacter(blankCharacter);
        }
    }, [characterId])


    function handleChange(evt) {
        const next = { ...character };

        if (evt.target.name == "firstName") {
            next["fullName"] = evt.target.value + " " + next["lastName"]
            console.log(next["fullName"])
        }

        if (evt.target.name == "lastName") {
            next["fullName"] = next["firstName"] + " " + evt.target.value
            console.log(next["fullName"])
        }

        next[evt.target.name] = evt.target.value;
        setCharacter(next);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        save(character)
            .then(() => navigate("/characters"))
            .catch(setErrors);
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <h1>{characterId ? "Edit Character" : "Add Character"}</h1>
                        <input type="hidden" value={character.characterId} />

                        <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                className="form-control"
                                value={character.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                className="form-control"
                                value={character.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <input type="hidden" id="fullName" name="fullName" value={character.fullName} />

                        <div className="mb-3">
                            <label htmlFor="family" className="form-label">Family</label>
                            <input
                                type="text"
                                id="family"
                                name="family"
                                className="form-control"
                                value={character.family}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                className="form-control"
                                value={character.title}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="imageUrl" className="form-label">Image URL</label>
                            <input
                                type="url"
                                id="imageUrl"
                                name="imageUrl"
                                className="form-control"
                                value={character.imageUrl}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-3 d-grid gap-2">
                            <button type="submit" className="btn btn-primary">Save</button>
                            <Link to="/characters" className="btn btn-warning">Cancel</Link>
                        </div>
                    </div>
                </div>
            </form>


        </>
    );
}

export default CharacterForm;