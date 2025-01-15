// Utility Functions - March
function formatDate(date) {
  return date.toISOString().split('T')[0];
}

function calculateAge(birthDate) {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

module.exports = { formatDate, calculateAge, generateId };
