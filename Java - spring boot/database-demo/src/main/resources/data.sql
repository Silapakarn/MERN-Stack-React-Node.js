create table person(
id integer not null,
name varchar(255) not null,
location varchar(255),
birth_date timestamp,
primary key(id)
);

INSERT INTO person (id,name,location,birth_date)
VALUES(10001, 'Kon','BKK',CURRENT_TIMESTAMP);
INSERT INTO person (id,name,location,birth_date)
VALUES(10002, 'James','BKK',CURRENT_TIMESTAMP);
INSERT INTO person (id,name,location,birth_date)
VALUES(10003, 'Silapakan','BKK',CURRENT_TIMESTAMP);
INSERT INTO person (id,name,location,birth_date)
VALUES(10004, 'Dragon','BKK',CURRENT_TIMESTAMP);