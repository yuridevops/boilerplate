# **Introduction**

This is a create-react-app template to help the creation of react based projects at frete.com.

# **Quickstart**

#### Installing project

- Install [Node 14.17.0](https://nodejs.org/en/blog/release/v14.17.0/)

> We suggest using [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) to manage and change node version easily

This package and other packages in this monorepo uses yarn to manage dependencies

- Install [Yarn](https://classic.yarnpkg.com/en/)

This repository contains private packages, to get install dependencies correctly

Create a file named `.npmrc` in your OS root folder with

```
//registry.npmjs.org/:_authToken={YOUR_TOKEN}
```

Replace `{YOUR_TOKEN}` for Access Token

> Contact the team to get the token.

Now you can create a project with this template:

```
yarn create react-app <project_name> --template frete-boilerplate
```

#### Starting project

Run in the root directory:

```
yarn start
```

#### Other commands

To test the application, you can use the following command:

```
yarn test
```

To build the application, you can use the following command:

```
yarn build
```

### About Frete.com

We are the largest freight matching platform in Latin America. We use technology to better connect carriers to owner operators, reversing the current scenario of high idle capacity of trucks, lack of safety and extreme bureaucracy.
