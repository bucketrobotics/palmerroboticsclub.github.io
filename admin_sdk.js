var admin = require("firebase-admin");

admin.initializeApp({
  credential: applicationDefault()
});