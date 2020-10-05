## esn-backend

it's is an Express-Sequelize-Node project skeleton for backend

### Getting Started

Install packages with `npm install`. This will install sequelize-cli globally automatically.

If you have [nvm](https://github.com/nvm-sh/nvm) configured in your operating system, use the `nvm use` command to apply the version required by the project: **lts/erbium**

Set your environment file with dialect settings to sequelize inside `.env` file, you can also specify the environment mode (which by default is **development**), PORT and HOST of application.

Create your database using the following command: `npx sequelize db:create` and run `npx sequelize db:migrate` to run migrations.

You are ready to go, ok now run the command: `npm start`

### Folder structure

The following is the recommended project structure, this keeps a directory clean and easy to read.

But you can always make your project what ;)

```
- src
    - graphql
        - resolvers
        - types
    - config
    - db
        - migrations
        - models
        - seeders
    - lib
```

## Examples
Run following example onto graphql client

```graphql
mutation add {
  ezequiel: addGreetsName(name: "Ezequiel") {
    name
    id
  }

  other: addGreetsName(name: "Other") {
    name
    id
  }

  genesis: addGreetsName(name: "Genesis") {
    name
    id
  }

  maria: addGreetsName(name: "Maria") {
    name
    id
  }

  milagros: modName(id: 2, name: "Milagros") {
    name
    id
  }
}

query all {
  allNames: names {
    name
    id
  }
  single: sayGreets(id: 1)
}

mutation delGreets {
  deleted: delName(id: 3) {
    name
    id
  }
}
```
