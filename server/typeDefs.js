const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Author {
        id: ID
        title: String
        description: String
    }

    type Query {
        hello: String
    }

    input AuthorInput {
        title: String
        description: String
    }

    type Mutation {
        addAuthor(author: AuthorInput): Author
    }
`;

module.exports = typeDefs;

