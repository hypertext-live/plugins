const path = require('path');
const execSync = require('child_process').execSync;
const SOURCE = process.env.BUILD_SOURCE;
const TARGET = process.env.BUILD_TARGET;
const HOOK = process.env.BUILD_HOOK;

function fatal(message) {
  console.error(message);
  process.exit(1);
}

if (!process.env.NODE_ENV) { fatal("NODE_ENV must be set"); }
if (!SOURCE) { fatal("BUILD_SOURCE must be set"); }
if (!TARGET) { fatal("BUILD_TARGET must be set"); }
if (!HOOK) { fatal("BUILD_HOOK must be set"); }

const source = path.join(SOURCE, "assets", "css", "style.css");
const output = path.join(TARGET, "assets", "css", "style.css");
const config = path.join(HOOK, "postcss.config.js");
const postcss = "./node_modules/postcss-cli/bin/postcss";
const cmd = `${postcss} ${source} -o ${output} --config ${config}`;

execSync(cmd, {stdio: 'inherit'});
