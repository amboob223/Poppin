CREATE DATABASE poppin;

CREATE TABLE clubs(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    sectionnum VARCHAR(255),
    sectioncost VARCHAR(255),
    phone INT,
    --  change this to varchar int only for one or two digitys
    address VARCHAR(255)
);

ALTER TABLE clubs ALTER COLUMN phone TYPE VARCHAR(255);

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    phone INT,
    email VARCHAR(255)
    paying VARCHAR(255)
    
)