// User Database Module
class UserDatabase {
  constructor() {
    this.users = [];
    this.nextId = 1;
  }

  addUser(name, email) {
    const user = {
      id: this.nextId++,
      name: name,
      email: email,
      createdAt: new Date()
    };
    this.users.push(user);
    return user;
  }

  getUser(id) {
    return this.users.find(u => u.id === id);
  }

  getAllUsers() {
    return this.users;
  }

  deleteUser(id) {
    this.users = this.users.filter(u => u.id !== id);
  }
}

module.exports = UserDatabase;
