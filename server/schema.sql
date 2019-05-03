DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id INTEGER AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE messages (
  id INTEGER AUTO_INCREMENT,
  message VARCHAR(255) NOT NULL,
  user_id int default null,
  roomname VARCHAR(255) NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(user_id) 
    REFERENCES users (id) on delete cascade
);



/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

