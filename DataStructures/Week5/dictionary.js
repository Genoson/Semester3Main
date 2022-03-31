// dictionary code and notes from the textbook
// importing required modules

const LinkedLists = require('../Week3/LinkedList.js');

const LinkedList = LinkedLists.LinkedList;

// a dictionary is a key value pair collection of elements.
// also called a map, symbol table...

function defaultToString(item) {
  if (item === null) {
    return "NULL";
  } else if (item === undefined) {
    return "UNDEFINED";
  } else if (typeof item === "string" || item instanceof String) {
    return `${item}`;
  }
  return item.toString();
}

class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
  toString() {
    return `[${this.key}: ${this.value}]`;
  }
}

class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }
  set(key, value) {
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key);
      this.table[tableKey] = new ValuePair(key, value);
      return true;
    }
    return false;
  }
  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)];
      return true;
    }
    return false;
  }
  hasKey(key) {
    return this.table[this.toStrFn(key)] !== undefined;
  }
  get(key) {
    const valuePair = this.table[this.toStrFn(key)];
    return valuePair == null ? undefined : valuePair.value;
  }
  clear() {
    this.table = {};
  }
  size() {
    return Object.keys(this.table).length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  keys() {
    return this.keyValues().map((valuePair) => valuePair.key);
    /** another legacy solution to the above problem
         * const keys = [];
            const valuePairs = this.keyValues();
            for (let i = 0; i < valuePairs.length; i++) {
                keys.push(valuePairs[i].key);
            }
            return keys;
         */
  }
  values() {
    return this.keyValues().map((valuePair) => valuePair.value);
  }
  keyValues() {
    return Object.values(this.table); // ecmascrpit 2017 implementation
    /** a legacy method
         * const valuePairs = []; 
             for (const k in this.table) { // {1} 
                if (this.hasKey(k)) { 
                    valuePairs.push(this.table[k]); // {2} 
                } 
            } 
            return valuePairs; 
         */
  }
  forEach(callBackFn) {
    const valuePairs = this.keyValues();
    for (let i = 0; i < valuePairs.length; i++) {
      const result = callBackFn(valuePairs[i].key, valuePairs[i].value);
      if (result === false) {
        break;
      }
    }
  }
  toString() {
    if (this.isEmpty()) {
      return "";
    }
    const valuePairs = this.keyValues();
    let objString = `${valuePairs[0].toString()}`;
    for (let i = 1; i < valuePairs.length; i++) {
      objString = `${objString},${valuePairs[i].toString()}`;
    }
    return objString;
  }
}

// hashing is finding the value in a data structure as quickly as possible
// HashTable class, aka HashMap is an implementation of a Dictionary

// hash function

// hash table definition
// updated to use linear probing. should have extended instead. you live and you learn
class HashTable {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }
  // replacing simple put with a linear probing put method
  // put(key, value) {
  //   if (key != null && value != null) {
  //     const position = this.hashCode(key);
  //     this.table[position] = new ValuePair(key, value);
  //     return true;
  //   }
  //   return false;
  // }
  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key);
      if (this.table[position] == null) {
        this.table[position] = new ValuePair(key, value);
      } else {
        let index = position + 1;
        while(this.table[index] != null) {
          index++;
        }
        this.table[index] = new ValuePair(key, value);
      }
      return true;
    }
    return false;
  }
  // updating to a linear probing remove method
  // remove(key) {
  //   const hash = this.hashCode(key);
  //   const valuePair = this.table[hash];
  //   if (valuePair != null) {
  //       delete this.table[hash];
  //       return true;
  //   }
  //   return false;
  // }
  remove(key) {
    const position = this.hashCode(key);
    if (this.table[position] != null) {
      if (this.table[position].key === key) {
        delete this.table[position];
        this.verifyRemoveSideEffect(key, position);
        return true;
      }
      let index = position +1;
      while (this.table[index] != null && this.table[index].key !== key) {
        index++;
      }
      if (this.table[index] != null && this.table[index].key === key) {
        delete this.table[index];
        this.verifyRemoveSideEffect(key, index);
        return true;
      }
    }
    return false;
  }
  // replacing with a linear probing get method
  // get(key) {
  //   const valuePair = this.table[this.hashCode(key)];
  //   return valuePair == null ? undefined : valuePair.value;
  // }
  get(key) {
    const position = this.hashCode(key);
    if (this.table[position] != null) {
      if (this.table[position].key === key) {
        return this.table[position].value;
      }
      let index = position +1;
      while(this.table[index] != null && this.table[index].key !== key) {
        index++;
      }
      if (this.table[index] != null && this.table[index].key ===key) {
        return this.table[position].value;
      }
    }
    return undefined;
  }

  verifyRemoveSideEffect(key, removedPosition) {
    const hash = this.hashCode(key);
    let index = removedPosition = 1;
    while (this.table[index] != null) {
      const posHash = this.hashCode(this.table[index].key);
      if (posHash <= hash || posHash <= removedPosition) {
        this.table[removedPosition] = this.table[index];
        delete this.table[index];
        removedPosition = index;
      }
      index++
    }
  }

  loseloseHashCode = (key) => {
    if (typeof key === "number") {
      return key;
    }
    const tableKey = this.toStrFn(key);
    let hash = 0;
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i);
    }
    return hash % 37;
  };

  // a better hash code
  // not the best but highly recommended, maybe too well known to consider secure, but thats not always a concern
  djb2HashCode(key){
    const tableKey = this.toStrFn(key);
    let hash = 5381;
    for (let i = 0; i < tableKey.length; i++) {
      hash = hash * 33 + tableKey.charCodeAt(i);
    }
    return hash % 1013;
  }

  hashCode(key) {
    return this.loseloseHashCode(key);
  }
}


// hash set is similar to hash table, but it does not allow for duplicate keys and only stores values

// basic hashing can lead to collisions that can be problematic, cause lost data
// we can use seperate chaining. linear probing or double hashing to avoid this

// hash table with seperate chaining
// seperate chaining uses a linked list to avoid collisions.

class HashTableSeparateChaining  {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }
    put(key, value) {
        if (key != null && value != null) {
            const position = this.hashCode(key);
            if (this.table[position] == null) {
                this.table[position] = new LinkedList();
            }
            this.table[position].push(new ValuePair(key, value));
            return true;
        }
        return false;
    }
    get(key) {
        const position = this.hashCode(key);
        const linkedList = this.table[position];
        const results = [];
        if (linkedList != null && !linkedList.isEmpty()) {
            let current = linkedList.getHead();
            while (current != null) {
                if (current.element.key === key) {
                    results.push(current.element.value);
                }
                current = current.next;
            }
            return results;
        }
        return undefined;
    }
    remove(key) {
        const position = this.hashCode(key);
        const linkedList = this.table[position];
        if (linkedList != null && !linkedList.isEmpty()) {
            while (current != null) {
                if (current.element.key === key) {
                    linkedList.remove(current.element);
                    if (linkedList.isEmpty()) {
                        delete this.table[position];
                    }
                    return true;
                }
                current = current.next;
            }
        }
        return false;
    }
    verifyRemoveSideEffect(key, removedPosition) {
      const hash = this.hashCode(key);
      let index = removedPosition = 1;
      while (this.table[index] != null) {
        const posHash = this.hashCode(this.table[index].key);
        if (posHash <= hash || posHash <= removedPosition) {
          this.table[removedPosition] = this.table[index];
          delete this.table[index];
          removedPosition = index;
        }
        index++
      }
    }
  
    loseloseHashCode = (key) => {
      if (typeof key === "number") {
        return key;
      }
      const tableKey = this.toStrFn(key);
      let hash = 0;
      for (let i = 0; i < tableKey.length; i++) {
        hash += tableKey.charCodeAt(i);
      }
      return hash % 37;
    };
  
    // a better hash code
    // not the best but highly recommended, maybe too well known to consider secure, but thats not always a concern
    djb2HashCode(key){
      const tableKey = this.toStrFn(key);
      let hash = 5381;
      for (let i = 0; i < tableKey.length; i++) {
        hash = hash * 33 + tableKey.charCodeAt(i);
      }
      return hash % 1013;
    }
  
    hashCode(key) {
      return this.loseloseHashCode(key);
    }
    toString() {
      if (this.isEmpty()) {
        return "";
      }
      const valuePairs = this.keyValues();
      let objString = `${valuePairs[0].toString()}`;
      for (let i = 1; i < valuePairs.length; i++) {
        objString = `${objString},${valuePairs[i].toString()}`;
      }
      return objString;
    }
    isEmpty() {
      return this.size() === 0;
    }
    keys() {
      return this.keyValues().map((valuePair) => valuePair.key);
      /** another legacy solution to the above problem
           * const keys = [];
              const valuePairs = this.keyValues();
              for (let i = 0; i < valuePairs.length; i++) {
                  keys.push(valuePairs[i].key);
              }
              return keys;
           */
    }
    values() {
      return this.keyValues().map((valuePair) => valuePair.value);
    }
    keyValues() {
      return Object.values(this.table); // ecmascrpit 2017 implementation
      /** a legacy method
           * const valuePairs = []; 
               for (const k in this.table) { // {1} 
                  if (this.hasKey(k)) { 
                      valuePairs.push(this.table[k]); // {2} 
                  } 
              } 
              return valuePairs; 
           */
    }
    size() {
      return Object.keys(this.table).length;
    }
}

// next will be the linear probing method of handling has table collisions
// linear probing is a method of handling collisions in a hash table
// you implement it most simply by adding a counter to the hash function
// ie if a hash collision occurs, you increment the hash by 1, then 2 until no collision occurs





// let hash = new HashTableSeparateChaining();
// hash.put("Gandalf", "ok");
// hash.put("Gandalf", "okie");
// hash.put("John", "ok");
// hash.put("Tyrion", "ok");
// hash.put("Aaron", "ok");

// console.log(hash.toString());
// console.log(hash.get("Gandalf"))

module.exports = {
  HashTableSeparateChaining,
  Dictionary,
};
