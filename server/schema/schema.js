const graphql = require('graphql');

// destructure
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

// define 1st object type
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: {type: GraphQLString} },
            resolve(parent, args){
                // code to get data from db / other source
            }
        }
    }
});

// Root query example:
// book(id: '123'){
//     name
//     genre
// }


module.exports = new GraphQLSchema({
    query: RootQuery
});