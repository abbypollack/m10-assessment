package learn.fans.data;

import learn.fans.data.mappers.GOTCharacterMapper;
import learn.fans.models.GOTCharacter;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;

@Repository
public class GOTCharacterRepository {

    private final JdbcTemplate jdbctemplate;

    public GOTCharacterRepository(JdbcTemplate jdbctemplate) {
        this.jdbctemplate = jdbctemplate;
    }

    public List<GOTCharacter> findAll() {
        final String sql = "select id, firstName, lastName, fullName, title, family, image, imageUrl, likes, dislikes from CharacterModel;";
        return jdbctemplate.query(sql, new GOTCharacterMapper());
    }

    public GOTCharacter findById(int id) {
        final String sql = "select id, firstName, lastName, fullName, title, family, image, imageUrl, likes, dislikes from CharacterModel where id = ?;";
        return jdbctemplate.query(sql, new GOTCharacterMapper(), id).stream().findFirst().orElse(null);
    }

    public GOTCharacter add(GOTCharacter character) {
        final String sql = "insert into CharacterModel (firstName, lastName, fullName, title, family, image, imageUrl) values (?,?,?,?,?,?,?);";
        SimpleJdbcInsert insert = new SimpleJdbcInsert(jdbctemplate).withTableName("CharacterModel").usingGeneratedKeyColumns("id");
        HashMap<String, Object> map = new HashMap<>();
        map.put("firstName", character.getFirstName());
        map.put("lastName", character.getLastName());
        map.put("fullName", character.getFullName());
        map.put("title", character.getTitle());
        map.put("family", character.getFamily());
        map.put("image", character.getImage());
        map.put("imageUrl", character.getImageUrl());
        character.setId(insert.executeAndReturnKey(map).intValue());
        return character;
    }

    public boolean update(GOTCharacter character) {
        final String sql = "update CharacterModel set firstName = ?, lastName = ?, fullName = ?, title = ?, family = ?, image = ?, imageUrl = ?, likes = ?, dislikes = ? where id = ?;";
        return jdbctemplate.update(sql, character.getFirstName(), character.getLastName(), character.getFullName(), character.getTitle(), character.getFamily(), character.getImage(), character.getImageUrl(), character.getId(), character.getLikes(), character.getDislikes()) > 0;
    }

    public boolean deleteById(int id) {
        final String sql = "delete from CharacterModel where id = ?;";
        return jdbctemplate.update(sql, id) > 0;
    }

}
