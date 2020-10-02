## esn-backend

it's is an Express-Sequelize-Node project skeleton for backend

### Getting Started

Install packages with `npm install`. This will install sequelize-cli globally automatically.

If you have [nvm](https://github.com/nvm-sh/nvm) configured in your operating system, use the `nvm use` command to apply the version required by the project: **lts/erbium**

Set your environment file with dialect settings to sequelize inside `.env` file, you can also specify the environment mode (which by default is **development**), PORT and HOST of application.

You are ready to go, ok now run the command: `npm start`

### Folder structure

```
- src
    - config
    - db
        - migrations
        - models
        - seeders
    - lib
```
