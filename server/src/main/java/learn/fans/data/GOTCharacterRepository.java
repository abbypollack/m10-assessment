package learn.fans.data;

import learn.fans.data.mappers.GOTCharacterMapper;
import learn.fans.models.GOTCharacter;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class GOTCharacterRepository {

    private final JdbcTemplate jdbctemplate;

    public GOTCharacterRepository(JdbcTemplate jdbctemplate) {
        this.jdbctemplate = jdbctemplate;
    }

    public List<GOTCharacter> findAll() {
        final String sql = "select id, firstName, lastName, fullName, title, family, image, imageUrl from CharacterModel;";
        return jdbctemplate.query(sql, new GOTCharacterMapper());
    }

    public GOTCharacter findById(int id) {
        final String sql = "select id, firstName, lastName, fullName, title, family, image, imageUrl from CharacterModel where id = ?;";
        return jdbctemplate.query(sql, new GOTCharacterMapper(), id).stream().findFirst().orElse(null);
    }

    public GOTCharacter add(GOTCharacter character) {
        final String sql = "insert into got_character (firstName, lastName, fullName, title, family, image, imageUrl) values (?,?,?,?,?,?,?);";
        int id = jdbctemplate.update(sql, character.getFirstName(), character.getLastName(), character.getFullName(), character.getTitle(), character.getFamily(), character.getImage(), character.getImageUrl());
        character.setId(id);
        return character;
    }

    public boolean update(GOTCharacter character) {
        final String sql = "update got_character set firstName = ?, lastName = ?, fullName = ?, title = ?, family = ?, image = ?, imageUrl = ? where id = ?;";
        return jdbctemplate.update(sql, character.getFirstName(), character.getLastName(), character.getFullName(), character.getTitle(), character.getFamily(), character.getImage(), character.getImageUrl(), character.getId()) > 0;
    }

    public boolean deleteById(int id) {
        final String sql = "delete from got_character where id = ?;";
        return jdbctemplate.update(sql, id) > 0;
    }

}
