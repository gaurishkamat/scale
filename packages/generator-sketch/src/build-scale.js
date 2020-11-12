const cp = require("child_process");
const { SIGKILL } = require("constants");

// Starts the components-sketch server
console.log("Starting dev server");
const cwd = process.cwd();
process.chdir("../components-sketch");
const server = cp.execFile("node", ["app.js"]);
process.chdir(cwd);
setTimeout(() => {
    console.log("Scraping component page links");
    const urls = cp.execSync("sh scrape.sh").toString().trim().split("\n");
    console.log("Got URLs", urls);
    console.log("Generating Sketch document");
    cp.execFileSync("yarn", ["sketch", "scale-components-telekom", ...process.argv.slice(2), ...urls], {stdio: [0, 1, 2]});
    server.kill(SIGKILL);
}, 1000);
