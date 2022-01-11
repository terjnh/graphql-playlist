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
            const { title, description } = args.author;
            console.log("Title: ", title, " | description: ", description);
            const author = new Author({ title, description })
            await author.save();
            return author;
        }
    }
};

module.exports = resolvers;

