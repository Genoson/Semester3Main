// Following on with the sets chapter of the textbook:
//  learning javascript data structures and algorithms - third edition

// creating the set class and performing math on sets
// looking at the ecmascript 2015 built in set class
// all the set operations can be performed using the built in set class
// they require some specific tweaking of methods
// they can also mostly be performed more easily using the spread operator
// the spread operator methods are compact and elegant
/*
const union = (setA, setB) => new Set([...setA, ...setB]);
const intersection = (setA, setB) => new Set([...setA].filter(x => setB.has(x)));
const difference = (setA, setB) => new Set([...setA].filter(x => !setB.has(x)));
*/

// sets consist of unordered unique values
// similar to the math of finite sets in mathematics
// I can still read mathematical set notation

// multisets are sets that can have multiple instances of the same value
// sometime referred to as bags
// widely used in databases

// our custom set class

class Set {
    constructor() {
        this.items = {};
        //^^ this is the object that will hold the set, as opposed to an array
        // while an array could work, the object forces the set to be unique
    }
    add(element) {
        // if the element is not in the set, add it
        if (!this.has(element)) {
            this.items[element] = element;
            //console.log(this.items)
            return true;
            
        }
        return false;
    }
    delete(element) {
        // if the element is in the set, remove it
        if (this.has(element)) {
            delete this.items[element];
            //console.log(this.items)
            return true;
        }
        return false;
    }
    has(element) {
        // returns true if the element is in the set, false otherwise
        // return element in this.items; // works but the below is a better way
        return Object.prototype.hasOwnProperty.call(this.items, element);
    }
    clear() {
        // removes all elements from the set
        this.items = {};
        //console.log(this.items)
    }
    size() {
        // returns the number of elements in the set
        return Object.keys(this.items).length;
        //^^ the above code may not work in older browsers
        /**
         * sizeLegacy() {
         *    let count = 0;
         *   for (let key in this.items) {
         *      if (this.items.hasOwnProperty(key)) {
         *         count++;
         * }
         * return count;
         * };
         **/ // will work in the legacy browsers if needed
    }
    values() {
        // returns an array of the values in the set
        return Object.values(this.items);
        //^^ the above code may not work in older browsers
        /**
         * valuesLegacy() {
         *   let values = [];
         *  for (let key in this.items) {
         *    if (this.items.hasOwnProperty(key)) {
         *      values.push(key);
         *      }
         * }
         * return values;
         * };
         **/ // will work in the legacy browsers if needed
    }
    // set operations to be added below
    union(otherSet) {
        // returns a new set containing all elements from this set and otherSet
        const unionSet = new Set();
        this.values().forEach(value => unionSet.add(value));
        otherSet.values().forEach(value => unionSet.add(value));
        return unionSet;
    }
    intersection(otherSet) {
        // returns a new set containing elements common to this set and otherSet
        /*const intersectionSet = new Set();
        const values = this.values();
        for (let i=0; i<values.length; i++) {
            if (otherSet.has(values(i))) {
                intersectionSet.add(values(i));
            }
        }
        return intersectionSet;
        */ // the above is not optimized, below code is optimized
        const intersectionSet = new Set();
        const values = this.values();
        const otherValues = otherSet.values();
        let biggerSet = values;
        let smallerSet = otherValues;
        if (otherValues.length - values.length > 0) {
            biggerSet = otherValues;
            smallerSet = values;
        }
        smallerSet.forEach(value => {
            if (biggerSet.includes(value)) {
                intersectionSet.add(value);
            }
        });
        return intersectionSet;
    }
    difference(otherSet) {
        // returns a new set containing elements from this set that are not in otherSet
        const differenceSet = new Set();
        this.values().forEach(value => {
            if (!otherSet.has(value)) {
                differenceSet.add(value);
            }
        });
        return differenceSet;
    }
    isSubsetOf(otherSet) {
        // returns true if this set is a subset of otherSet
        if (this.size() > otherSet.size()) {
            return false;
        }
        let isSubset = true;
        this.values().every(value => {
            if (!otherSet.has(value)){
                isSubset = false;
                return false;
            }
            return true
        });
        return isSubset;
    }
}



// simple example
const set = new Set();
set.add(1);
set.add(2);
