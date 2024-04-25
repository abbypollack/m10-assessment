package learn.fans.data;

import learn.fans.models.GOTCharacter;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
class GOTCharacterRepositoryTest {

    @Autowired
    private GOTCharacterRepository repository;

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @BeforeEach
    void setup() {
        jdbcTemplate.update("call set_known_good_state()");
    }

    @Test
    void findAll() {
        List<GOTCharacter> characters = repository.findAll();
        assertNotNull(characters);
        assertEquals(5 , characters.size());
    }

    @Test
    void findById() {
        GOTCharacter character = repository.findById(1);
        assertNotNull(character);
        assertEquals("Daenerys Targaryen", character.getFullName());
    }

    @Test
    void add() {
        GOTCharacter character = new GOTCharacter();
        character.setFirstName("Jimmy");
        character.setLastName("Snow");
        character.setFullName("Jimmy Snow");
        character.setFamily("House Stark");
        character.setTitle("King in the North");

        List<GOTCharacter> characters = repository.findAll();
        assertNotNull(characters);
        assertEquals(5 , characters.size());

        GOTCharacter result = repository.add(character);
        assertNotNull(result);
        assertEquals("Jimmy", result.getFirstName());
        assertEquals(6, result.getId());
    }

    @Test
    void update() {
        GOTCharacter character = new GOTCharacter();
        character.setId(1);
        character.setFirstName("Dana");
        character.setLastName("Targaryen");
        character.setFullName("Dana Targaryen");
        character.setFamily("House Targaryen");
        character.setTitle("Mother of Dragons");

        boolean result = repository.update(character);
        assertTrue(result);

        assertEquals(character.getFullName(), repository.findById(1).getFullName());
    }

    @Test
    void deleteById() {
        List<GOTCharacter> characters = repository.findAll();
        assertNotNull(characters);
        assertEquals(5 , characters.size());

        boolean result = repository.deleteById(1);
        assertEquals(4, repository.findAll().size());
    }
}