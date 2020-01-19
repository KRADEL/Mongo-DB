db.createUser({
    user: 'jordan',
    pwd: 'password',
    customData: { startDate: new Date() },
    roles: [
        { role: 'clusterAdmin', db: 'admin'},
        { role: 'readAnyDatabase', db: 'admin'},
        'readWrite'
    ]
})

// Start Mongo
mongod
mongo
// Show dbs
show dbs
// Use db
use mongoCourse
// Current db
db
// Get users, delete user
db.getUsers()
db.dropUser('name')
// Create, show collections
db.createCollection('name')
show collections
// Number of items in entry
db.books.find({name: "Blink"}).length()
