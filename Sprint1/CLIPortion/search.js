// a function to search the user list from a partial search input (name, email, phone number)

// import and require statements will go here
const fileSys = require("./fileSys");
const logger = require("./logger");
// constants will go here, ie default values for files, error messages, etc.

// any sub functions and classes unique to this file will go here

const searchPartialName = (partial, linkedList) => {
  // first check if the user list is empty
  let current = linkedList.head;
  let found = false;
  if (current === null) {
    console.log("There are no users in the list");
    return found;
  }
  // if the user list is not empty, search for the user
  let userNameArray = [];
  userNameArray = linkedList.printList();
  for (let i = 0; i < linkedList.length; i++) {
    if (userNameArray[i].toLowerCase().includes(partial.toLowerCase())) {
      console.log(`${userNameArray[i]} has been found`);
      found = true;
    }
  }
};

const searchPartialEmail = (partial, linkedList) => {
  // first check if the user list is empty
  let current = linkedList.head;
  let found = false;
  if (current === null) {
    console.log("There are no users in the list");
    return found;
  }
  // if the user list is not empty, search for the user
  let userEmailArray = [];
  userEmailArray = linkedList.printListEmail();
  for (let i = 0; i < linkedList.length; i++) {
    if (userEmailArray[i].toLowerCase().includes(partial.toLowerCase())) {
      console.log(`${userEmailArray[i]} has been found`);
      found = true;
    }
  }
};

const searchPartialPhone = (partial, linkedList) => {
  // first check if the user list is empty
  let current = linkedList.head;
  let found = false;
  if (current === null) {
    console.log("There are no users in the list");
    return found;
  }
  // if the user list is not empty, search for the user
  let userPhoneArray = [];
  userPhoneArray = linkedList.printListPhone();
  for (let i = 0; i < linkedList.length; i++) {
    if (userPhoneArray[i].toLowerCase().includes(partial.toLowerCase())) {
      console.log(`${userPhoneArray[i]} has been found`);
      found = true;
    }
  }
};

// the main function will go here, a switch statement for command line searches

const cliSearch = (argv, linkedList) => {
  switch (argv[3]) {
    case "--name":
      // search for a user by name, partial name
      searchPartialName(argv[4], linkedList);
      //fileSys.makeLogFile(`search run on usernames for "${argv[4]}"`, argv);
      logger.myEmitter.emit(
        "log",
        `search run on usernames for "${argv[4]}"`,
        argv
      );
      break;
    case "--email":
      // search for a user by email, partial email
      searchPartialEmail(argv[4], linkedList);
      //fileSys.makeLogFile(`search run on emails for "${argv[4]}"`, argv);
      logger.myEmitter.emit(
        "log",
        `search run on emails for "${argv[4]}"`,
        argv
        );
      break;
    case "--phone":
      // search for a user by phone number, partial phone number
      searchPartialPhone(argv[4], linkedList);
      fileSys.makeLogFile(`search run on phone numbers for "${argv[4]}"`, argv);
      logger.myEmitter.emit(
        "log",
        `search run on phone numbers for "${argv[4]}"`,
        argv
        );
      break;
    case "--help":
      // code to run the help command and display the help text
      console.log(helpMessage);
      break;
    case "-h":
      // code to run the help command and display the help text
      console.log(helpMessage);
      break;
    case "help":
      // code to run the help command and display the help text
      console.log(helpMessage);
      break;
    default:
      console.log("Please enter a valid search type");
      break;
  }
};

module.exports = {
  searchPartialName,
  searchPartialEmail,
  searchPartialPhone,
  cliSearch,
};
