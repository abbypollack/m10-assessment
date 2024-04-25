package learn.fans.domain;

import learn.fans.data.GOTCharacterRepository;
import learn.fans.models.GOTCharacter;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.dao.DataAccessException;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
class GOTCharacterServiceTest {

    @Autowired
    GOTCharacterService service;

    @MockBean
    GOTCharacterRepository repository;

    @Test
    void shouldFindAll() throws DataAccessException {
        when(repository.findAll()).thenReturn(List.of(
                new GOTCharacter(1, "Daenerys", "Targaryen", "Daenerys Targaryen", "Mother of Dragons", "House Targaryen", "", ""),
                new GOTCharacter(2, "Jon", "Snow", "Jon Snow", "King in the North", "House Stark", "", "")
        ));

        List<GOTCharacter> characters = service.findAll();
        assertNotNull(characters);
        assertEquals(2, characters.size());



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