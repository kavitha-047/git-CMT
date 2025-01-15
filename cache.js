// Cache Module - July
class Cache {
  constructor(ttl = 3600) {
    this.store = new Map();
    this.ttl = ttl;
  }

  set(key, value) {
    this.store.set(key, { value, expiry: Date.now() + this.ttl * 1000 });
  }

  get(key) {
    const item = this.store.get(key);
    if (!item) return null;
    if (Date.now() > item.expiry) {
      this.store.delete(key);
      return null;
    }
    return item.value;
  }

  clear() { this.store.clear(); }
}

module.exports = Cache;
