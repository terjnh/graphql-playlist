const Book = require('./models/book')
const Author = require('./models/author');

const resolvers = {
    Query: {
        hello: () => {
            return "Hello World!~";
        }
    },

    Mutation: {
        addAuthor: async (parent, args, context, info) => {
            //de-structure
            const { title, age } = args.author;
            console.log("addAuthor -- Title: ", title, " | age: ", age);
            const author = new Author({ title, age })
            await author.save();
            return author;
        },
        addBook: async(parent, args, context, info) => {
            const { name, genre, authorId } = args.book;
            console.log("addBook -- name: ", name, " | genre: ", genre, " | authorId: ", authorId);
            const book = new Book({ name, genre, authorId })
            await book.save();
            return book;
        }
    }
};

module.exports = resolvers;

