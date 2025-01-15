// Validation Module - February
class Validator {
  validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  validatePhone(phone) {
    const regex = /^[0-9]{10}$/;
    return regex.test(phone);
  }

  validatePassword(password) {
    return password.length >= 8;
  }

  validateUsername(username) {
    return username.length >= 3 && username.length <= 20;
  }
}

module.exports = Validator;
