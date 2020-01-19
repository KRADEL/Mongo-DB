// Find
db.books.find()

// Find formatted
db.books.find().pretty()

// Find by name/argument
db.books.find().pretty({name:"The War od Art"})

// Find a single element
db.books.findOne({name: "Blink"})

// Find a part of a query(i = capital insensitive)
db.books.findOne({ name: /.*deep work.*/i })

// Check for field
db.books.find({ reviews: { $exists:true }})
db.books.find({ reviews: { $exists:false }})