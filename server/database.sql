CREATE TABLE "koalas" (
	"id" serial primary key,
	"Name" varchar(80) not null,
	"Favorite_Color" varchar(80) not null,
	"Age" integer,
	"Ready_To_Transfer" varchar(80) not null,
	"Notes" varchar(150) not null
	);
	
INSERT INTO "koalas" ( "Name", "Favorite_Color", "Age", "Ready_To_Transfer", "Notes")
	Values ('Scotty', 'Red', '4' , 'Y' , 'Born in Guatemala' ),
	('Jean', 'Green', '5' , 'Y' , 'Allergic to lots of lava'),
	('Ororo', 'Yellow', '7' , 'N', 'Loves lisening to Paula (Åbdul)'),
	('K Leaf', 'Purple', '15', 'N', 'Never refuses a treat'),
	('Charlie', 'Orange', '9', 'Y' , 'Favorite band is Nirvana'),
	('Betsy', 'Blue', '4' , 'Y' , 'Has pet iguana')