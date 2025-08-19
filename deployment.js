// deployment.js - August
class Deployment { deploy(version) { return { version, deployed: new Date(), status: 'live' }; } }