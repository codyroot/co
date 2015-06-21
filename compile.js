var readline = require("readline");
var exec = require("child_process").exec;

console.log("prepublish")

var fn = function (type) {
    exec("tsc throttle --module " + type, function (error, stdout, stderr) {

    });
};

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("In Welches Modulformat soll exportiert werden(amd,cjs)? ", function(answer) {

    fn(answer);

    rl.close();
});