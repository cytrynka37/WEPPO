module.exports = { work_b };

let a = require('./mA');

function work_b(n) {
    if (n > 0) {
        console.log( `b: ${n}`);
        a.work_a(n - 1);
    }
}