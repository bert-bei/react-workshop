# reactapp

## Installation

https://code.visualstudio.com/download
https://nodejs.org/en

## Yarn (Replace npm)

Give yourself full control permission of this folder

```shell
C:\Program Files\nodejs
```

Run in vscode terminal

```shell
corepack enable
corepack prepare yarn@stable --activate
yarn -v
```

Successful if it is version 4.0.0 or above


## Yarn (VSCode support)

Open a react project folder and run

```shell
yarn dlx @yarnpkg/sdks vscode
```

Install Typescript language SDK in workspace

- ctrl+shift+p in a TypeScript file

- "Select TypeScript Version"

- "Use Workspace Version"


To switch project from npm to yarn

- Delete package-lock.json

- Delete node_modules

- Add new empty file yarn.lock

## Yarn (Usage)

Install package

```shell
yarn install
```

Run scripts from package.json

```shell
yarn run xxx
```

Update yarn

```shell
yarn set version latest
```