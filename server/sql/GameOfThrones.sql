drop database if exists game_of_thrones;
create database game_of_thrones;

use game_of_thrones;

CREATE TABLE `CharacterModel` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `firstName` varchar(255),
  `lastName` varchar(255),
  `fullName` varchar(255),
  `title` varchar(255),
  `family` varchar(255),
  `image` varchar(255),
  `imageUrl` varchar(255),
  `likes` int default 0,
  `dislikes` int default 0
);

INSERT INTO CharacterModel (firstName, lastName, fullName, title, family, image, imageUrl)
VALUES 
('Daenerys', 'Targaryen', 'Daenerys Targaryen', 'Mother of Dragons', 'House Targaryen', 'daenerys.jpg', 'https://thronesapi.com/assets/images/daenerys.jpg'),
('Samwell', 'Tarly', 'Samwell Tarly', 'Maester', 'House Tarly', 'sam.jpg', 'https://thronesapi.com/assets/images/sam.jpg'),
('Jon', 'Snow', 'Jon Snow', 'King of the North', 'House Stark', 'jon-snow.jpg', 'https://thronesapi.com/assets/images/jon-snow.jpg'),
('Arya', 'Stark', 'Arya Stark', 'No One', 'House Stark', 'arya-stark.jpg', 'https://thronesapi.com/assets/images/arya-stark.jpg'),
('Sansa', 'Stark', 'Sansa Stark', 'Lady of Winterfell', 'House Stark', 'sansa-stark.jpeg', 'https://thronesapi.com/assets/images/sansa-stark.jpeg'),
('Brandon', 'Stark', 'Brandon Stark', 'Lord of Winterfell', 'House Stark', 'bran-stark.jpg', 'https://thronesapi.com/assets/images/bran-stark.jpg'),
('Ned', 'Stark', 'Ned Stark', 'Lord of Winterfell', 'House Stark', 'ned-stark.jpg', 'https://thronesapi.com/assets/images/ned-stark.jpg'),
('Robert', 'Baratheon', 'Robert Baratheon', 'Lord of the Seven Kingdoms', 'House Baratheon', 'robert-baratheon.jpeg', 'https://thronesapi.com/assets/images/robert-baratheon.jpeg'),
('Jamie', 'Lannister', 'Jamie Lannister', 'Lord Commander of the Kingsguard', 'House Lannister', 'jaime-lannister.jpg', 'https://thronesapi.com/assets/images/jaime-lannister.jpg'),
('Cersei', 'Lannister', 'Cersei Lannister', 'Lady of Casterly Rock', 'House Lannister', 'cersei.jpg', 'https://thronesapi.com/assets/images/cersei.jpg'),
('Cateyln', 'Stark', 'Catelyn Stark', 'Lady of Winterfell', 'House Stark', 'catelyn-stark.jpg', 'https://thronesapi.com/assets/images/catelyn-stark.jpg'),
('Robb', 'Stark', 'Rob Stark', 'Lord of Winterfell', 'House Stark', 'robb-stark.jpg', 'https://thronesapi.com/assets/images/robb-stark.jpg'),
('Theon', 'Greyjoy', 'Theon Greyjoy', 'Captain of Sea Bitch', 'House Greyjoy', 'theon.jpg', 'https://thronesapi.com/assets/images/theon.jpg'),
('Joffrey', 'Baratheon', 'Joffrey Baratheon', 'Lord of the Seven Kingdoms, Protector of the Realm', 'House Lanister', 'joffrey.jpg', 'https://thronesapi.com/assets/images/joffrey.jpg'),
('Tyrion', 'Lannister', 'Tyrion Lannister', 'Hand of the Queen', 'House Lanister', 'tyrion-lannister.jpg', 'https://thronesapi.com/assets/images/tyrion-lannister.jpg'),
('Sandor', 'Clegane', 'The Hound', 'The Hound', 'House Clegane', 'the-hound.jpg', 'https://thronesapi.com/assets/images/the-hound.jpg'),
('Petyr', 'Baelish', 'Petyr Baelish', 'Littlefinger', 'House Baelish', 'littlefinger.jpg', 'https://thronesapi.com/assets/images/littlefinger.jpg'),
('Davos', 'Seaworth', 'Davos Seaworth', 'Hand of the King', 'House Seaworth', 'davos-seaworth.png', 'https://thronesapi.com/assets/images/davos-seaworth.png'),
('Stannis', 'Baratheon', 'Stannis Baratheon', 'Lord of Dragonstone', 'House Baratheon', 'stannis.jpg', 'https://thronesapi.com/assets/images/stannis.jpg'),
('Varys', 'Unknown', 'Varys', 'Master of Whisperers', 'Unknown', 'varys.jpg', 'https://thronesapi.com/assets/images/varys.jpg'),
('Khal', 'Drogo', 'Khal Drogo', 'Khal', 'House Targaryen', 'khal-drogo.jpg', 'https://thronesapi.com/assets/images/khal-drogo.jpg'),
('Margaery', 'Tyrell', 'Margaery Tyrell', 'Queen of the Seven Kingdoms', 'House Tyrell', 'margaery-tyrell.jpg', 'https://thronesapi.com/assets/images/margaery-tyrell.jpg'),
('Ygritte', 'None', 'Ygritte', 'Spearwife', 'Free Folk', 'ygritte.jpg', 'https://thronesapi.com/assets/images/ygritte.jpg'),
('Brienne', 'Tarth', 'Brienne of Tarth', 'Lady Brienne', 'Tarth', 'brienne-tarth.jpeg', 'https://thronesapi.com/assets/images/brienne-tarth.jpeg'),
('Missandei', 'None', 'Missandei', 'Queen''s Personal Advisor', 'Naathi', 'missandei.jpeg', 'https://thronesapi.com/assets/images/missandei.jpeg'),
('Gilly', 'None', 'Gilly', 'The Rabbit Keeper', 'None', 'gilly.jpg', 'https://thronesapi.com/assets/images/gilly.jpg'),
('Viserys', 'Targaryan', 'Viserys Targaryn', 'King Viserys III', 'Targaryan', 'viserys-targaryan.jpg', 'https://thronesapi.com/assets/images/viserys-targaryan.jpg'),
('Rickon', 'Stark', 'Rickon Stark', 'Prince', 'Stark', 'rickon.jpg', 'https://thronesapi.com/assets/images/rickon.jpg'),
('Roose', 'Bolton', 'Roose Bolton', 'Lord of Dreadfort', 'Bolton', 'roose-bolton.jpg', 'https://thronesapi.com/assets/images/roose-bolton.jpg'),
('Daario', 'Naharis', 'Daario', 'Commander of the Second Sons', 'Naharis', 'daario.jpg', 'https://thronesapi.com/assets/images/daario.jpg'),
('Shae', '', 'Shae', 'Mistress', 'Lorathi', 'shae.jpg', 'https://thronesapi.com/assets/images/shae.jpg'),
('Tommen', 'Baratheon', 'Tommen Baratheon', 'Prince', 'Baratheon', 'tommen.jpg', 'https://thronesapi.com/assets/images/tommen.jpg'),
('Gendry', 'Baratheon', 'Gendry Baratheon', 'Lord of Storm''s End', 'Baratheon', 'gendry.jpg', 'https://thronesapi.com/assets/images/gendry.jpg'),
('Jorah', 'Mormont', 'Jorah Mormont', 'Knight', 'Mormont', 'jorah-mormont.jpg', 'https://thronesapi.com/assets/images/jorah-mormont.jpg'),
('Robert', 'Baratheon', 'Robert Baratheon', 'King', 'Baratheon', 'king-robert.jpg', 'https://thronesapi.com/assets/images/king-robert.jpg'),
('Ramsey', 'Bolton', 'Ramsey Bolton', 'The Bastard of Bolton', 'Bolton', 'ramsey-bolton.jpg', 'https://thronesapi.com/assets/images/ramsey-bolton.jpg'),
('Talisa', 'Stark', 'Talisa Stark', 'Queen Consort', 'Stark', 'talisa-stark.jpg', 'https://thronesapi.com/assets/images/talisa-stark.jpg'),
('Jeor', 'Mormont', 'Jeor Mormont', 'Lord Commander of the Knight''s Watch', 'Mormont', 'lord-commander-mormont.jpg', 'https://thronesapi.com/assets/images/lord-commander-mormont.jpg'),
('The High', 'Sparrow', 'The High Sparrow', 'High Septon', 'Sparrow', 'the-high-sparrow.jpg', 'https://thronesapi.com/assets/images/the-high-sparrow.jpg'),
('Oberyn', 'Martell', 'Oberyn Martell', 'Red Viper of Dorne', 'Viper', 'red-viper.jpg', 'https://thronesapi.com/assets/images/red-viper.jpg'),
('Melisandre', 'The Red Woman', 'Melisandre', 'Melisandre of Asshai', 'Unkown', 'melisandre.jpg', 'https://thronesapi.com/assets/images/melisandre.jpg'),
('Jaqen', 'H''ghar', 'Jaqen H''ghar', 'Faceless Men of Braavos', 'Lorath', 'jaqen-hghar.jpg', 'https://thronesapi.com/assets/images/jaqen-hghar.jpg'),
('Tywin', 'Lannister', 'Tywin Lannister', 'Lord Paramount of Westerlands', 'Lannister', 'tywin-lannister.jpg', 'https://thronesapi.com/assets/images/tywin-lannister.jpg'),
('Ellaria', 'Sand', 'Ellaria Sand', 'Paramour of Prince Oberyn Martell', 'Sand', 'ellaria-sand.jpg', 'https://thronesapi.com/assets/images/ellaria-sand.jpg'),
('Tormund', 'Giantsbane', 'Tormund Giantsbane', 'Free Folk Warrior', 'Free Folk', 'tormund-giantsbane.jpg', 'https://thronesapi.com/assets/images/tormund-giantsbane.jpg'),
('Yara', 'Greyjoy', 'Yara Greyjoy', 'Lady of the Iron Islands', 'Greyjoy', 'yara-greyjoy.jpg', 'https://thronesapi.com/assets/images/yara-greyjoy.jpg'),
('Euron', 'Greyjoy', 'Euron Greyjoy', 'King of the iron Islands', 'Greyjoy', 'euron-greyjoy.jpg', 'https://thronesapi.com/assets/images/euron-greyjoy.jpg'),
('Wylis', 'Hodor', 'Hodor', 'Servant of House Stark', 'Stark', 'hodor.jpg', 'https://thronesapi.com/assets/images/hodor.jpg'),
('', 'Pycelle', 'Pycelle', 'Grand Maester of the Seven Kingdoms', '', 'pycelle.jpg', 'https://thronesapi.com/assets/images/pycelle.jpg'),
('Grey', 'Worm', 'Grey Worm', 'Commander of the Unsullied', 'Worm', 'greyworm.jpg', 'https://thronesapi.com/assets/images/greyworm.jpg'),
('Olenna', 'Tyrell', 'Olenna Tyrell', 'Queen of Thorns', 'Tyrell', 'olenna-tyrell.jpg', 'https://thronesapi.com/assets/images/olenna-tyrell.jpg'),
('Qyburn', 'Grand Maester', 'Qyburn', 'Former maester of the Citadel', 'Qyburn', 'qyburn.jpg', 'https://thronesapi.com/assets/images/qyburn.jpg'),
('Lord', 'Bronn', 'Lord Bronn', 'Lord of Highgarden', 'Bronn', 'bronn.jpg', 'https://thronesapi.com/assets/images/bronn.jpg');
