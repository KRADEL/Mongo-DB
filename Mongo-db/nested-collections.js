db.books.insert({
    "name": "Blink",
    "publishedDate": new Date(),
    "authors": [
        {"name": "Malcolm GLadwell"},
        {"name": "Ghost Writer"}
    ]
});

db.books.find(
    {
    name: "Blink"
    },
    {
        publishedDate: 1,
        name: 1,
        authors: { $slice: -1 }
    }
).pretty()

// Nested fields in a find query
db.books.insert({
    "name": "Blink",
    "publishedDate": new Date(),
    "authors": [
        {"name": "Malcolm GLadwell", "active": "true"},
        {"name": "Ghost Writer", "active": "true"}
    ]
});

db.books.find(
    {
        name: "Blink"
    },
    {
        name: 1,
        publishedDate: 1,
        "authors.name": 1
    }
).pretty()

db.books.insert({
    "name": "Deep Work: Rules for Focused Success in a Distracted World",
    "publishedDate": new Date(),
    "authors": [
        {"name": "Cal Newport"}
    ]
});

db.books.insert( 
    {
      "name": "Deep Work: Rules for Focused Success in a Distracted World",
      "publishedDate": new Date(),
      "reviews": 100,
      "authors": [
        {"name": "Cal Newport"}
      ]
    }
  )