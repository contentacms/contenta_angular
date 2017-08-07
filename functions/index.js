const functions = require('firebase-functions');
require('zone.js/dist/zone-node');
require('reflect-metadata');
const fs = require('fs');
const { AppServerModuleNgFactory } = require('../dist-server/main.bundle');
const { renderModuleFactory } = require('@angular/platform-server');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
 exports.app = functions.https.onRequest((req, res) => {
    renderModuleFactory(AppServerModuleNgFactory, {
        url: '/',
        document: fs.readFileSync('dist-client/index.html',  'utf8')
    }).then(html => {
        res.send(html);
    });
 });

 exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
 });
