function consoleLog() {
    let args = Array.prototype.slice.call(arguments);
    console.log(args.join(''));
}


module.exports = {
    info: consoleLog.bind(null, 'Info:  '),
    warn: consoleLog.bind(null, 'Warn:  '),
    error: consoleLog.bind(null, 'Error: '),
}
