var admin = require("firebase-admin");

const app = admin.initializeApp();

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mainPage() {
  rl.question('\n1. News\n2. Sponsors\n ? ', function (choice) {
    if (choice == 1) {
      newsPage();
    } else if (choice == 2) {
      console.log("Sponsor managment support to be added later");
      mainPage();
    } else {
      rl.close();
    }
  });
}

async function newsPage() {
  console.log("\nNews\n\nCurrent news:\n");
  const articlesRef = admin.firestore().collection("news-articles");
  const snapshot = await articlesRef.get();
  snapshot.forEach(doc => {
    console.log(doc.id);
  });
  rl.question('Which one do you want to inspect ? ', async function (id) {
    const articleRef = articlesRef.doc(id);
    const snapshot = await articleRef.get();
    const data = snapshot.data();
    if (articleRef.exists) {
      articlePage(id, data);
    } else {
      rl.question("article doesn't exist, would you like to create a new one? [y/n] ", async function (choice) {
        if (choice == "y") {
          console.log("News article creation support will be added later");
          mainPage();
        } else {
          newsPage();
        }
      });
    }  
  });
}

async function articlePage(id, data) {
  console.log();
  console.log(`${id}:`);
  console.log(`Title: ${data["title"]}`);
  console.log(`Type: ${data["type"]}`);
  console.log(`Short description: ${data["short-description"]}`)
  console.log(`Description: ${data["description"]}`);
  rl.question("1. Edit\n2. Delete\n ? ", async function (choice) {

  });
}

rl.on('close', function () {
  process.exit(0);
});

mainPage();