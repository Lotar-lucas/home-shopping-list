DROP DATABASE IF EXISTS ListaSmart;
CREATE DATABASE ListaSmart; 

USE "ListaSmart"

CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) not  null,
    email VARCHAR(100) not null unique
);

CREATE TABLE category (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT null unique
);

CREATE TABLE item (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(500),
    price NUMERIC(10, 2) not null default 0.00,
    category_id INTEGER not null,
    foreign key (category_id) references category(id)
);


create table list (
	id SERIAL primary key,
	name VARCHAR(100) not null,
	created_at TIMESTAMP default CURRENT_TIMESTAMP,
	user_id INTEGER not null,
	foreign key (user_id) references "user"(id)
);

create table list_item (
	id SERIAL primary key,
	list_id INTEGER not null,
	item_id INTEGER not null,
	quantity INTEGER not null default 0,
	has_purchased BOOLEAN default false,
	foreign key (list_id) references list(id),
	foreign key (item_id) references item(id)
);