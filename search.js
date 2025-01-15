// Search Module - October
class SearchEngine {
  constructor() {
    this.index = new Map();
  }

  indexDocument(id, content) {
    const keywords = content.toLowerCase().split(' ');
    keywords.forEach(keyword => {
      if (!this.index.has(keyword)) {
        this.index.set(keyword, []);
      }
      this.index.get(keyword).push(id);
    });
  }

  search(query) {
    const keywords = query.toLowerCase().split(' ');
    let results = new Set();
    keywords.forEach((keyword, idx) => {
      const docs = this.index.get(keyword) || [];
      if (idx === 0) {
        results = new Set(docs);
      } else {
        results = new Set([...results].filter(id => docs.includes(id)));
      }
    });
    return Array.from(results);
  }
}

module.exports = SearchEngine;
