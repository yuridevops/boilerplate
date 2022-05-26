# **Introduction**

This is a boilerplate to help the creation of react based projects at frete.com.

# **Quickstart**

#### Installing project

Clone this project by running:

```
git clone https://github.com/frete-com/boilerplate.git
```

- Install [Node 14.17.0](https://nodejs.org/en/blog/release/v14.17.0/)

> We suggest using [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) to manage and change node version easily

This package and other packages in this monorepo uses yarn to manage dependencies

- Install [Yarn](https://classic.yarnpkg.com/en/)

This repository contains private packages, to get install dependencies correctly

create a file named `.npmrc` with

```
//registry.npmjs.org/:_authToken={YOUR_TOKEN}
```

replace `{YOUR_TOKEN}` for Access Token

> Contact the team to get the token.

run the command below to install all dependencies

```
yarn
```

#### Starting project

With all dependencies installed, now you can start the project!

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
