// Add one
db.books.insert({
    "title": "OOP Programming",
    "startDate": new Date(),
    "authors": [
        { "name": "Jon Snow Jr" },        
    ]
})

// Add many
db.books.insertMany([
    {
        "name": "Confident Ruby",
        "publishedDate": new Date(),
        "authors": [
            {"name": "Avdi Grimm"}
        ]
    },
    {
        "name": "The War of Art",
        "publishedDate": new Date(),
        "authors": [
            {"name": "Steven Pressfield"}
        ]
    },
    {
        "name": "Blink",
        "publishedDate": new Date(),
        "authors": [
            {"name": "Malcolm Gladwell"}
        ]
    }
])