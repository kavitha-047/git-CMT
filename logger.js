// Logger Module - May
class Logger {
  constructor() {
    this.logs = [];
  }

  log(message, level = 'info') {
    const logEntry = {
      timestamp: new Date(),
      level: level,
      message: message
    };
    this.logs.push(logEntry);
    console.log(`[${level.toUpperCase()}] ${message}`);
  }

  error(message) { this.log(message, 'error'); }
  warn(message) { this.log(message, 'warn'); }
  info(message) { this.log(message, 'info'); }
  debug(message) { this.log(message, 'debug'); }

  getLogs() { return this.logs; }
}

module.exports = Logger;
