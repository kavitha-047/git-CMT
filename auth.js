// Authentication Module - April
class Auth {
  constructor() {
    this.sessions = new Map();
  }

  login(username, password) {
    const token = this.generateToken();
    this.sessions.set(token, { username, loginTime: new Date() });
    return { success: true, token };
  }

  logout(token) {
    this.sessions.delete(token);
    return { success: true };
  }

  generateToken() {
    return Math.random().toString(36).substr(2) + Date.now().toString(36);
  }

  verifyToken(token) {
    return this.sessions.has(token);
  }
}

module.exports = Auth;
