import "reflect-metadata"

/** @constants */
import { AppDataSource } from './data-source';

AppDataSource.initialize()
    .then(async (AppDataSource) => {

        // run all migrations
        //await AppDataSource.runMigrations()

        // and undo migrations two times (because we have two migrations)
        //await AppDataSource.undoLastMigration()
        //await AppDataSource.undoLastMigration()

        console.log("Done. We run the migration.")
    })
    .catch((error) => console.log("Error: ", error))