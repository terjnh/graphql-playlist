const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Author {
        id: ID
        title: String
        age: String
    }

    type Book {
        id: ID
        name: String
        genre: String
        authorId: String
    }

    type Query {
        hello: String
    }

    input AuthorInput {
        title: String
        age: String
    }

    input BookInput {
        name: String
        genre: String
        authorId: String
    }

    type Mutation {
        addAuthor(author: AuthorInput): Author
        addBook(book: BookInput): Book
    }
`;

module.exports = typeDefs;

