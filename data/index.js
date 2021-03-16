const firebaseApp = require('../firebase')

const db = firebaseApp.firestore()

// const data20 = require('./dataset_2020-21')

const db2020 = db.collection('2020-21')

// data20.forEach(async (player) => {
// 	let doc = db2020.doc(player.PLAYER_NAME)
// 	// console.log(player)
// 	await doc.set(player)
// })

const fatch = async () => {
	const snapshot = await db2020.get()
	let arr = []
	snapshot.forEach((el) => arr.push(el.data()))
	console.log(arr)
}

fatch()
