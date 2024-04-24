package learn.fans.data.mappers;

import learn.fans.models.GOTCharacter;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;


public class GOTCharacterMapper implements RowMapper<GOTCharacter> {

    @Override
public GOTCharacter mapRow(ResultSet resultSet, int i) throws SQLException {
        GOTCharacter gotCharacter = new GOTCharacter();
        gotCharacter.setId(resultSet.getInt("id"));
        gotCharacter.setFirstName(resultSet.getString("firstName"));
        gotCharacter.setLastName(resultSet.getString("lastName"));
        gotCharacter.setFullName(resultSet.getString("fullName"));
        gotCharacter.setTitle(resultSet.getString("title"));
        gotCharacter.setFamily(resultSet.getString("family"));
        gotCharacter.setImage(resultSet.getString("image"));
        gotCharacter.setImageUrl(resultSet.getString("imageUrl"));
        return gotCharacter;
    }
}
