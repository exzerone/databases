DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE users ( id INTEGER PRIMARY KEY, names TEXT);

CREATE TABLE messages ( 
  id INTEGER PRIMARY KEY, 
  message_text TEXT NOT NULL, 
  users_id INTEGER, 
  foreign key(users_id) references users(id)
);

CREATE TABLE rooms 
( id INTEGER PRIMARY KEY, 
  roomname TEXT NOT NULL, 
  messages_id INTEGER, 
  FOREIGN KEY(messages_id) REFERENCES messages(id)
);


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

