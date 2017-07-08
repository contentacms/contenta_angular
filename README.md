# Contenta Angular

[![Build Status](https://travis-ci.org/contentacms/contenta_angular.svg?branch=master)](https://travis-ci.org/contentacms/contenta_angular)

Contenta Angular is a best practices showcase of decoupled Drupal with Angular. It is part of the wider [Contenta](http://www.contentacms.org) Drupal distribution. This project is under heavy development right now and we can use your help!

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.1.

## Quick start

`git clone git@github.com:contentacms/contenta_angular.git`
`cd contenta_angular`
`npm install`
`ng serve`

Your Contenta Angular build will be at: `http://localhost:4200/`.

## Live demo

This project auto deploys to Firebase, and the latest version can always be seen at [angular.contentacms.io](http://angular.contentacms.io).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. 

## Production Build

Use `ng build -prod -aot` flag for a production build.
Then run `npm run precache` to create your service worker.
And then `firebase deploy` (you'll need this configured first) to publish.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
