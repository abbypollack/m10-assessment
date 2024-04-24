package learn.fans.data;

import learn.fans.models.GOTCharacter;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
class GOTCharacterRepositoryTest {

    @Autowired
    GOTCharacterRepository repository;

    @Test
    void findAll() {
        List<GOTCharacter> characters = repository.findAll();
        assertNotNull(characters);
        assertEquals(53 , characters.size());
    }

    @Test
    void findById() {
    }

    @Test
    void add() {
    }

    @Test
    void update() {
    }

    @Test
    void deleteById() {
    }
}