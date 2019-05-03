DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE `users` (
  `id` int AUTO_INCREMENT,
  `username` VARCHAR(255),
  PRIMARY KEY (`id`)
);

CREATE TABLE `messages` (
  `id` int AUTO_INCREMENT,
  `message` VARCHAR(255),
  `username` VARCHAR(255),
  `roomname` VARCHAR(255),
  PRIMARY KEY (`id`)
);

CREATE TABLE `rooms` (
  `id` int AUTO_INCREMENT,
  `roomname` VARCHAR(255),
  `messages` VARCHAR(255),
  PRIMARY KEY (`id`)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

