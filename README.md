# Contenta Angular

[![Build Status](https://travis-ci.org/contentacms/contenta_angular.svg?branch=master)](https://travis-ci.org/contentacms/contenta_angular)
[![codecov](https://codecov.io/gh/contentacms/contenta_angular/branch/master/graph/badge.svg)](https://codecov.io/gh/contentacms/contenta_angular)

## [angular.contentacms.io](http://angular.contentacms.io)

Thanks for checking out Contenta Angular! The site may look like a random recipe magazine, but there is a lot more going on here than may be obvious, and we are excited to tell you all about it. Contenta Angular is part of the [Contenta](http://www.contentacms.org) family, a Drupal 8 distribution that is helping lower the barriers to entry for building decoupled sites with our favorite CMS.

This site is built by consuming data from Drupal's JSON API module into an Angular application. It is currently running the latest and greatest Angular 5.x release!

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.1. Install it before you begin, so that you can use it as a development web server:

`npm install -g @angular/cli`

## Quick start

`git clone git@github.com:contentacms/contenta_angular.git`

`cd contenta_angular`

`npm install`

`ng serve`

Your Contenta Angular build will be at: `http://localhost:4200/`.

## Use a different Drupal data backend

By default, this demo uses an installation of [ContentaCMS](https://github.com/contentacms/contenta_jsonapi) hosted [publicly](http://live-contentacms.pantheonsite.io/). If you would like to change to your own instance, edit the following files:

* `ngsw-manifest.json`
* `src/environments/environment.prod.js`
* `src/environments/environment.js`

...replacing the existing endpoint with your own.

## What's great about Contenta Angular?

This project has evolved really quickly over the summer of 2017, and we have a lot of features we're really proud of showcasing as "best practice" ways of building decoupled Drupal Angular applications. Our hope is that the examples here can go even further, to guide not just Drupal + Angular builds, but anyone wanting to build an Angular application. Here are some of the key pieces that we're excited about:

**Drupal Runs the Data**

Our backend is the public [Contenta API](http://live-contentacms.pantheonsite.io/), built on Drupal 8 using an incredible set of contributed modules like JSON API, JSON API Extras, OpenAPI, and more to make robust, opinionated API's that keep Drupal firmly in charge of the data, while giving our application the ability to get just what we need, when we need it.

**Angular CLI**

We built this application using [Angular's CLI](https://github.com/angular/angular-cli), which gives developers a lot of power to scaffold out new components, run tests, spin up a development environment, and much more. Playing around with the CLI is a great way to introduce yourself to Angular.

**Offline Capable**

Service workers can do some really neat things, and we are using the Angular service worker to handle much of our configuration automatically. One [special detail](https://github.com/contentacms/contenta_angular/blob/develop/ngsw-manifest.json) - our service worker is even caching our external API calls and images loaded from a remote server, so the entire site works offline, even the parts we request from elsewhere on the web!

**Server Push**

Firebase, our demo host, runs on HTTP/2 by default, so we can take advantage of new capabilities like [server push](https://firebase.googleblog.com/2016/09/http2-comes-to-firebase-hosting.html). Our app, with the help of a small config [library](https://www.npmjs.com/package/firebase-http2-push-config), is set up to begin pushing all essential js and css assets to you as soon as your initial request is made!

**Continuous Integration**

This repo is integrated with Travis CI. Each time a pull request here is made, we run lint, unit tests, end to end tests, and code coverage reports. Once the PR is merged, it will trigger an automatic deployment to our development Firebase instance. Once it's merged into master branch, it triggers a final deployment to production.

**ngrx 4**

Our state management solution follows best practices with the latest ngrx 4 library, based largely on the recent [writing](https://blog.nrwl.io/using-ngrx-4-to-manage-state-in-angular-applications-64e7a1f84b7b) on the topic by Victor Savkin. The basic thinking is that many types of state changes are driven by the router as the source of truth, which follows the Redux functional pattern of using reducers to derive a new state from an action. Things like remote API calls are treated as side effects, which can be triggered by an optimistic state change but then reversed if an API call fails, for example, while keeping state in perfect sync.

That may sound complex, but the end result is a careful and scalable approach to the various kinds of states our app needs to accommodate. It can be seen in action most readily by playing with the filters on our site - change a filter and it changes the URL in the address bar, which then triggers an action, a reducer, and any effects.

**Material design**

The project uses the [Material Design toolkit](https://material.angular.io/) built by the Angular core team. It provides some set of usefull sass mixins and settings as well so that you can quickly change color schemes and create your own Material theme with your own flavour. All the sass compilation is handled directly by the CLI, no setup needed!

## What's coming next?

We've got a lot more great features coming, keep an eye on our [public roadmap](https://github.com/contentacms/contenta_angular/issues/24).

## Credits

Contenta Angular exists thanks to the efforts of:

* [Matt Davis](https://twitter.com/johnmattdavis)
* [Joao Garin](https://twitter.com/joaogarin)
* [Sam Mortenson](https://twitter.com/DrupalSAM)
* [Stephen Fluin](https://twitter.com/stephenfluin)
