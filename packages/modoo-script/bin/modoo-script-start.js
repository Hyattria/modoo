#!/usr/bin/env node
"use strict";

const { program } = require("commander");

program.parse(process.argv);

require("../scripts/start");
