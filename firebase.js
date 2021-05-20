const firebase = require('firebase')

const firebaseConfig = {
	apiKey: 'AIzaSyC0qO5S2ooFY-i9a29Kw8tN07zUoOZndwc',
	authDomain: 'abovethebreakbball.firebaseapp.com',
	projectId: 'abovethebreakbball',
	storageBucket: 'abovethebreakbball.appspot.com',
	messagingSenderId: '432746437016',
	appId: '1:432746437016:web:e939deee5e73d2b8cbb3ed',
	measurementId: 'G-GNJCBFP82F',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
module.exports = firebaseApp
