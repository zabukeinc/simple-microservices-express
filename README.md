# Simple Express Microservices with Kafka, TypeORM & MySQL.

### References
[Draw.io - System Design & Structure Folder Concepts](https://drive.google.com/file/d/1vTmn0iC6LX1YXymLDytRG8s5TbxXVjaM/view?usp=sharing)

[DBDiagram - DB Schema](https://dbdiagram.io/d/Badr-Backend-Assessment-64507c4fdca9fb07c455a78b)

[Postman - API Endpoints](https://lively-water-387458.postman.co/workspace/regy~fd53316d-d94b-4293-82cc-39ac23ef09e5/folder/3755044-d086c700-f9fe-4e80-9d54-97abf2f91ead?action=share&creator=3755044&ctx=documentation)

## Setup Project & Installements
```
cd project
npm install

cd services/user
npm install

cd services/transaction
npm install

cd services/material
npm install

cd services/gateway
npm install
```

## Project Configurations
On each services has their own `.env`, make sure you have configured it up based on your local machine.

Alternatively, you can copy the `.env.example` to `.env` and change only `kafka` and `database` configs.
Note: Each env must be on different port(s).


## Migration
#### Prerequisites
Before you start, you have to create 3 database(s) on your local machine (for this context), and set-up the `.env` based on your local machine.


You have to enter each services to do a migration syntax, when you have already entered the service directory, execute following command(s):

#### Create Migration

```
> cd services/user
> npm run migration:generate --name your-migration-name
```

### Run existing migration

```
> cd services/user
> npm run migrate:up
```

#### Undo Migration
```
> cd services/user
> npm run migration:generate --name your-migration-name
```



## Run the app
You can run the apps concurently using:

On folder project, execute following command(s)

### Hot Reload / Dev Mode
```
> npm run dev
```

### Production Mode
```
> npm run start
```


Alternatively, you can run single service using:
```
> cd services/user
> npm run dev
```
