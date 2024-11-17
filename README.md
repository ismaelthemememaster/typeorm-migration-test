# Awesome Project Build with TypeORM

Because I can't figure out how to make my typeorm projects run migrations

Steps to run this project ():

## Installation

```bash
$ npm install
```

## Connecting to an existing database

Edit the "database" lines from the .env file with the right credentials.
If this works for you, ignore the next section about initializing a local database, which means creating and then connecting to a new local database for testing and developing.

## Initializing a local database

Install Docker Desktop and wsl2 if required.
Copy and paste the .env and docker-compose.yml files in the source folder.
Add the credentials int the "database" lines from the .env file (the ones your new database will have at the time of creating it, if you loose them you will be loosing access to your local database so you will have to initialize it again).
Open a console on the source folder and run the next lines individually.

```bash
$ docker compose -f docker-compose.yml build
$ docker-compose up
```
At this point you should have an empty local database (you may connect to it and see it while the docker image is running, but with no tables it is of no use)

Open another console on the same folder or terminate and run the new containers from Docker Desktop and continue running lines.
(If you're not using windows remove :win from the next line)

```bash
$ npm run migration:run
```

At this point you should have your tables on the db (empty of course, not that it matters for this specific project).

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Modifying the database

When modifying the database (for example, adding a new column or removing an existing one from a table) you need to create a migration (and a new seed, if the modified tables requires data to work after initializing a local database)

First modify the database using a database manager, after the database has the right changes, run the next line after adding your migration's name in kebab-case:
(If you're not using windows remove :win from the next line)

```bash
$ npm run migration:generate -n ./src/database/migrations/your-migration-name
```
