drop database if exists game_of_thrones_test;
create database game_of_thrones_test;

use game_of_thrones_test;

create table CharacterModel (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `firstName` varchar(255),
  `lastName` varchar(255),
  `fullName` varchar(255),
  `title` varchar(255),
  `family` varchar(255),
  `image` varchar(255),
  `imageUrl` varchar(255)
);

delimiter //
create procedure set_known_good_state()
begin

	delete from CharacterModel;
    alter table CharacterModel auto_increment=1;
    INSERT INTO CharacterModel (firstName, lastName, fullName, title, family, image, imageUrl)
		VALUES 
		('Daenerys', 'Targaryen', 'Daenerys Targaryen', 'Mother of Dragons', 'House Targaryen', 'daenerys.jpg', 'https://thronesapi.com/assets/images/daenerys.jpg'),
		('Samwell', 'Tarly', 'Samwell Tarly', 'Maester', 'House Tarly', 'sam.jpg', 'https://thronesapi.com/assets/images/sam.jpg'),
		('Jon', 'Snow', 'Jon Snow', 'King of the North', 'House Stark', 'jon-snow.jpg', 'https://thronesapi.com/assets/images/jon-snow.jpg'),
		('Arya', 'Stark', 'Arya Stark', 'No One', 'House Stark', 'arya-stark.jpg', 'https://thronesapi.com/assets/images/arya-stark.jpg'),
		('Sansa', 'Stark', 'Sansa Stark', 'Lady of Winterfell', 'House Stark', 'sansa-stark.jpeg', 'https://thronesapi.com/assets/images/sansa-stark.jpeg');
        
end //
delimiter ;
