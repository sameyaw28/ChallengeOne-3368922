class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let ch of word) {
      if (!node.children[ch]) {
        node.children[ch] = new TrieNode();
      }
      node = node.children[ch];
    }
    node.isEndOfWord = true;
  }

  search(word) {
    const node = this._searchNode(word);
    return node !== null && node.isEndOfWord;
  }

  startsWith(prefix) {
    return this._searchNode(prefix) !== null;
  }

  _searchNode(word) {
    let node = this.root;
    for (let ch of word) {
      if (!node.children[ch]) {
        return null;
      }
      node = node.children[ch];
    }
    return node;
  }
}

// 🧪 Example usage (like the one in the question):
const trie = new Trie();
console.log(trie.insert("apple"));      // null (or undefined)
console.log(trie.search("apple"));      // true
console.log(trie.search("app"));        // false
console.log(trie.startsWith("app"));    // true
console.log(trie.insert("app"));        // null
console.log(trie.search("app"));        // true
