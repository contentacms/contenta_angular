// ./index.js
require('zone.js/dist/zone-node');
require('reflect-metadata');
const fs = require('fs');
const { AppServerModuleNgFactory } = require('./dist-server/main.bundle');
const { renderModuleFactory } = require('@angular/platform-server');
renderModuleFactory(AppServerModuleNgFactory, {
    url: '/',
    document: fs.readFileSync('dist-client/index.html',  'utf8')
}).then(html => {
    fs.writeFileSync('dist-client/index.html', html);
    console.log(html);
});