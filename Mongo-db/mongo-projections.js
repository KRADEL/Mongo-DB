db.books.find(
    {
        name: "Confident Ruby"
    },
    {
        _id: 0,
        name: 1,
        publishedDate: 1,
        authors: 1
    }
).pretty()