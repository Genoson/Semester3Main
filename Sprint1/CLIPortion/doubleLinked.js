// the doubly linked list and associated functions go here
// insertion sorted based on user name
// possible index based on user name and containing phone number
// ^^ index will provide the position in the linked list allowing for direct access (fast)
// doubly linked search algorithms that start at the tail and head simultaneously to search faster could be implemented below

// import and require statements will go here
const fs = require('fs');
const UserToken = require('./userToken');
const Search = require('./search');


// constants will go here, ie default values for files, error messages, etc.


// any sub functions and classes unique to this file will go here
class doubleNode{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}


// the doubly class will go here
// constructor, params, and methods not finalized yet
class doubleLinked {
    constructor(object) {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    insertionSorted(object) {
        //code to insert object into the linked list in a sorted fashion
        // could modify the comparison sort to better handle capitol letters or sub sort beyond the first letter
        let toInsert = new doubleNode(object);
        let current;
        if(this.head === null){
            this.head = toInsert;
            this.tail = this.head;
            this.length++;
        } else if (this.head.data.userName[0] >= toInsert.data.userName[0]) {
            toInsert.next = this.head;
            toInsert.next.prev = toInsert;
            this.head = toInsert;
            this.length++;
        } else {
            current = this.head;
            while (current.next !== null && current.next.data.userName[0] < toInsert.data.userName[0]) {
                current = current.next;
            }         
            toInsert.next = current.next;
            if (current.next !== null) {
                current.next.prev = toInsert;
            } else {
                this.tail = toInsert;
            }
            current.next = toInsert;
            toInsert.prev = current;
            this.length++;
        }    
}
    getToken(index) {
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current.data.token;
    }
    getTokenName(userName) {
        let index = this.findIndexName(userName);
        if (index === -1) {
            throw new Error('User not found');
        }
        return this.getToken(index);
    }
    getTokenPhone(phoneNumber) {
        let index = this.findIndexPhone(phoneNumber);
        if (index === -1) {
            throw new Error('User not found');
        }
        return this.getToken(index);
    }
    getTokenEmail(email) {
        let index = this.findIndexEmail(email);
        if (index === -1) {
            throw new Error('User not found');
        }
        return this.getToken(index);
    }
    findIndexName(userName) {
        let current = this.head;
        let index = 0;
        while (current !== null) {
            if (current.data.userName === userName) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    }
    findIndexPhone(phoneNumber) {
        let current = this.head;
        let index = 0;
        while (current !== null) {
            if (current.data.phoneNumber === phoneNumber) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    }
    findIndexEmail(email) {
        let current = this.head;
        let index = 0;
        while (current !== null) {
            if (current.data.email === email) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    }
    confirmToken(userName, token) {
        let current = this.head;
        while (current !== null) {
            if (current.data.userName === userName && current.data.token == token) {
                current.data.confirmed = true;
                return true;
            }
            current = current.next;
        }
        return false;
    }
    purgeExpired() {
        let current = this.head;
        while (current !== null) {
            let expires = new Date(current.data.expires);
            if (expires < Date.now()) {
                this.remove(current.data.userName);
            }
            current = current.next;
        }
    }
    printList() {
        let current = this.head;
        let userArray = [];
        while (current !== null) {
            //console.log(current.data.userName);
            userArray = [...userArray, current.data.userName];
            current = current.next;
        }
        return userArray;
    }
    printListPhone() {
        let current = this.head;
        let userArray = [];
        while (current !== null) {
            //console.log(current.data.phoneNumber);
            userArray = [...userArray, current.data.phoneNumber];
            current = current.next;
        }
        return userArray;
    }
    printListEmail() {
        let current = this.head;
        let userArray = [];
        while (current !== null) {
            //console.log(current.data.email);
            userArray = [...userArray, current.data.email];
            current = current.next;
        }
        return userArray;
    }
    JSONify() {
        let current = this.head;
        let JSONified = [];
        while (current !== null) {
            JSONified.push(current.data);
            current = current.next;
        }
        return JSONified;
    }
    remove(userName) {
        let toRemove = this.findIndexName(userName);
        if (toRemove === -1) {
            throw new Error('User not found');
        } else {
            let current = this.head;
            for (let i = 0; i < toRemove; i++) {
                current = current.next;
            }
            if (current.prev === null) {
                this.head = current.next;
            } else {
                current.prev.next = current.next;
            }
            if (current.next === null) {
                this.tail = current.prev;
            } else {
                current.next.prev = current.prev;
            }
            this.length--;
        }
    }
}

// a function to read the existing users from the data.json file
const fillLinkedList = () => {
    if(fs.existsSync('./app/data.json')) {
    let users = JSON.parse(fs.readFileSync('./app/data.json', 'utf8'));
    let userList = new doubleLinked();
    for (let i = 0; i < users.length; i++) {
        userList.insertionSorted(users[i]);
    }
    return userList;
    } else {
        return new doubleLinked();
    }
};

//test code for insertion sort
// let testUser1 = new UserToken.User('mark', '1234567890');
// let testUser2 = new UserToken.User('alex', '1234566690');
// let testUser3 = new UserToken.User('zach', '1234567890');
// let testUser4 = new UserToken.User('steve', '1234567890');
// let testUser5 = new UserToken.User('zach', '1234567890');
// let testUser6 = new UserToken.User('ashley', '1234567890');
// let testUser7 = new UserToken.User('kyle', '1234567890');

// const testList = new doubleLinked();
// testList.insertionSorted(testUser1);
// testList.insertionSorted(testUser2);
// testList.insertionSorted(testUser3);
// testList.insertionSorted(testUser4);
// testList.insertionSorted(testUser5);
// testList.insertionSorted(testUser6);
// testList.insertionSorted(testUser7);


// console.log(testList.length);
// console.log(testUser6.token)
// console.log(testList.getToken(0));
// console.log(testList.getTokenEmail('ashley@company.com'));
// //console.log(testList.confirmToken('ashley', 1108630673));
// testList.printList();
// testUser5.expires = Date.now() - 1;
// testList.purgeExpired();
// testList.printList();
// console.log(testList.tail.data);
// console.log(testList.JSONify());
// console.log(testList.tail.data);
//Search.searchPartialPhone('666', testList);

// export the doublyLinked class and any other functions that need to be used outside this file
module.exports = {
    doubleLinked,
    fillLinkedList,
}