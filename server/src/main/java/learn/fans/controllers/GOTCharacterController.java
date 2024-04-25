package learn.fans.controllers;

import learn.fans.domain.GOTCharacterService;
import learn.fans.domain.Result;
import learn.fans.models.GOTCharacter;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/got-character")
public class GOTCharacterController {

    private final GOTCharacterService service;

    public GOTCharacterController(GOTCharacterService service) {
        this.service = service;
    }

    @GetMapping
    public List<GOTCharacter> findAll() throws DataAccessException {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<GOTCharacter> findById(@PathVariable int id) {
        GOTCharacter character = service.findById(id);
        if (character == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(character);
    }

    @PostMapping
    public ResponseEntity<GOTCharacter> add(@RequestBody GOTCharacter character) {
        Result<GOTCharacter> result = service.add(character);
        return new ResponseEntity<>(result.getPayload(), getStatus(result, HttpStatus.CREATED));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> update(@PathVariable int id, @RequestBody GOTCharacter character) {
        if (character != null && character.getId() != id) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        Result<GOTCharacter> result = service.update(character);
        return new ResponseEntity<>(getStatus(result, HttpStatus.NO_CONTENT));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable int id) {
        Result<GOTCharacter> result = service.deleteById(id);
        return new ResponseEntity<>(getStatus(result, HttpStatus.NO_CONTENT));
    }


    private HttpStatus getStatus(Result<GOTCharacter> result, HttpStatus statusDefault) {
        switch (result.getStatus()) {
            case INVALID:
                return HttpStatus.PRECONDITION_FAILED;
            case DUPLICATE:
                return HttpStatus.FORBIDDEN;
            case NOT_FOUND:
                return HttpStatus.NOT_FOUND;
        }
        return statusDefault;
    }
}
