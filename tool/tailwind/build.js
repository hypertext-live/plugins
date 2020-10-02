const path = require('path');
const execSync = require('child_process').execSync;
const env = process.env.NODE_ENV;
const source = process.env.BUILD_SOURCE;
const target = process.env.BUILD_TARGET;

function fatal(message) {
  console.error(message);
  process.exit(1);
}

if (!env) { fatal("NODE_ENV must be set"); }
if (!source) { fatal("BUILD_SOURCE must be set"); }
if (!target) { fatal("BUILD_TARGET must be set"); }

const source = path.join(source, "assets", "css", "style.css");
const target = path.join(target, "assets", "css", "style.css");
const cmd = `npx postcss ${source} -o ${output}`;

execSync(cmd, {stdio: 'inherit'});
