const cp = require("child_process");
const { SIGKILL } = require("constants");

// Starts the components-sketch server
console.log("Starting dev server");
const server = cp.spawn("cd ../components-sketch && node app.js", {shell: true});
setTimeout(() => {
    console.log("Scraping component page links");
    const urls = cp.execSync("sh scrape.sh").toString().trim().split("\n");
    console.log("Got URLs", urls);
    console.log("Generating Sketch document");
    cp.execFileSync("yarn", ["sketch", "scale-components-telekom", ...urls], {stdio: [0, 1, 2]});
    server.kill(SIGKILL);
}, 1000);
