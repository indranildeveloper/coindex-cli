#!/usr/bin/env node

const { program } = require("commander");
const pkg = require("../package.json");

program
  .version(pkg.version)
  .command("key", "Manage API Key --> htps://nomics.com")
  .command("check", "Check Cryptocurrency Price Info")
  .parse(process.argv);
