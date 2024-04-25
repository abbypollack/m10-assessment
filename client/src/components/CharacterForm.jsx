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
        next[evt.target.name] = evt.target.value;
        setCharacter(next);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        save(character)
            .then(() => navigate("/"))
            .catch(setErrors);
    }

    return (
        <>
            <h1>{characterId ? "Edit Hero" : "Add Hero"}</h1>
            <form onSubmit={handleSubmit} className="row">
                <div className="col">
                    <input type="hidden" value={hero.heroId} />
                    <div className="mb-3">
                        <label htmlFor="superName" className="form-label">Super Name</label>
                        <input id="superName" name="superName" className="form-control"
                            value={hero.superName} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="realName" className="form-label">Real Name</label>
                        <input id="realName" name="realName" className="form-control"
                            value={hero.realName} onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="imageUrl" className="form-label">Image URL</label>
                        <input id="imageUrl" name="imageUrl" className="form-control" type="url"
                            value={hero.imageUrl} onChange={handleChange} />
                    </div>
                </div>
                <div className="col">
                    <h3>Powers</h3>
                    {powers.map(power => (
                        <div className="mb-2" key={power.powerId}>
                            <div className="form-check">
                                <input className="form-check-input"
                                    type="checkbox"
                                    value={power.powerId}
                                    id={"chk" + power.powerId}
                                    name="powers"
                                    onChange={handleChange}
                                    checked={hero.powers.findIndex(p => p.powerId === power.powerId) > -1}
                                />

                                <label className="form-check-label" htmlFor={"chk" + power.powerId}>
                                    {power.name}
                                </label>
                            </div>
                        </div>
                    ))}
                </div>

                <ValidationSummary errors={errors} />

                <div className="mt-3">
                    <button type="submit" className="btn btn-primary me-2">Save</button>
                    <Link to="/" className="btn btn-warning">Cancel</Link>
                </div>
            </form>
        </>
    );
}

export default CharacterForm;