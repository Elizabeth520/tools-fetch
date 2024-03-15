
"use strict";

const Fetch = require('./lib/Fetch.js');

const f = new Fetch();

module.exports = (url, opt) => { return f.fetch(url, opt); };
