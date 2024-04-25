const apiUrl = "http://localhost:8080/got-character";

export async function findAll() {
    const response = await fetch(apiUrl);
    if (response.ok) {
        return await response.json();
    }
    return Promise.reject([response.status.toString()]);
}

export async function findById(characterId) {
    const response = await fetch(`${apiUrl}/${characterId}`);
    if (response.ok) {
        return await response.json();
    }
    return Promise.reject([response.status.toString()]);
}

export async function add(character){
    const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(character)
    }
    const response = await fetch(apiUrl, config);
    if (response.ok) {
        return;
    }

    const errors = await response.json();
    return Promise.reject(errors);
}

export async function edit(character) {
    const config = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(character)
    }
    const response = await fetch(`${apiUrl}/${character.id}`, config)
    if (response.ok) {
        return;
    }

    const errors = await response.json();
    return Promise.reject(errors);
}

export async function save(character) {
    return character.id ? edit(character) : add(character);
}

export async function deleteCharacter(characterId){
    const config = {
        method: "DELETE"
    }
    const response = await fetch(`${apiUrl}/${characterId}`, config);
    if (response.ok) {
        return;
    } else {
        return Promise.reject([response.status.toString()]);
    }
    
}