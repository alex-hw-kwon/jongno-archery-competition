const admin = require('firebase-admin');

const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://hhj-jongno-archery-competition.firebaseio.com'
});

const db = admin.firestore();

module.exports = {
  db
};
