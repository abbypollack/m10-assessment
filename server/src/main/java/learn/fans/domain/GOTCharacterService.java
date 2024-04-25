package learn.fans.domain;

import learn.fans.data.GOTCharacterRepository;
import learn.fans.models.GOTCharacter;

import java.util.List;

public class GOTCharacterService {

    private final GOTCharacterRepository repository;

    public GOTCharacterService(GOTCharacterRepository repository) {
        this.repository = repository;
    }

    public List<GOTCharacter> findAll() {
        return repository.findAll();
    }

    public GOTCharacter findById(int characterId) {
        return repository.findById(characterId);
    }

    public Result<GOTCharacter> add(GOTCharacter character) {
        Result<GOTCharacter> result = validate(character);
        if (!result.isSuccess()) {
            return result;
        }

        if (character.getId() != 0) {
            result.addErrorMessage("Character ID cannot be set for `add` operation.", ResultType.INVALID);
            return result;
        }

        result.setPayload(repository.add(character));
        return result;
    }

    public Result<GOTCharacter> update(GOTCharacter character) {
        Result<GOTCharacter> result = validate(character);
        if (!result.isSuccess()) {
            return result;
        }

        if (character.getId() <= 0) {
            result.addErrorMessage("Character ID must be set for `update` operation.", ResultType.INVALID);
            return result;
        }

        if (!repository.update(character)) {
            result.addErrorMessage("Character ID not found.", ResultType.NOT_FOUND);
        }
        return result;

    }

    public Result<GOTCharacter> deleteById(int characterId) {
        Result<GOTCharacter> result = new Result<>();
        if (!repository.deleteById(characterId)) {
            result.addErrorMessage("Character ID not found.", ResultType.NOT_FOUND);
        }
        return result;
    }

    private Result<GOTCharacter> validate(GOTCharacter character) {
        Result<GOTCharacter> result = new Result<>();
        if (character == null) {
            result.addErrorMessage("Character cannot be null.", ResultType.INVALID);
            return result;
        }

        if (character.getFullName() == null || character.getFullName().isBlank()) {
            result.addErrorMessage("Name is required.", ResultType.INVALID);
        }

        return result;
    }

}
