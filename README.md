# contenta angular

## Config the contenta URL inside the folder src/api/config.ts

```
export const ANGULAR_APP_JSONAPI = 'http://localhost/contenta/CONTENTACMS/web';
```

## Get Started
```sh
npm run start
```
## Developement mode
* Terminal 1: ```npm run watch```
* Wait for the build to finish
* Terminal 2: ```npm run server```

## Prod mode
Includes AoT
```sh
npm run build:prod
npm run server
```
