import "reflect-metadata"
import { DataSource, DataSourceOptions } from "typeorm"
import { User } from "./database/entities/User"

const options: DataSourceOptions = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "migrationTest",
    password: "migrationTest",
    database: "migrationTest",
    synchronize: true,
    logging: ["query", "error"],
    entities: [User],
    migrations: [__dirname + "/database/migrations/*{.js,.ts}"],
}

const dataSource = new DataSource(options)
dataSource
    .initialize()
    .then(async (dataSource) => {

        // run all migrations
        //await dataSource.runMigrations()

        // and undo migrations two times (because we have two migrations)
        //await dataSource.undoLastMigration()
        //await dataSource.undoLastMigration()

        console.log("Done. We run the migration.")
    })
    .catch((error) => console.log("Error: ", error))