// const graphql = require('graphql');
// const _ = require('lodash');
// const Book = require('../models/book');
// const Author = require('../models/author');

// // destructure
// const {
//     GraphQLObjectType,
//     GraphQLString,
//     GraphQLSchema,
//     GraphQLID,
//     GraphQLInt,
//     GraphQLList
// } = graphql;


// // define object type
// // `fields` need to be wrapped inside a function, so they are not executed until the entire file has been 'compiled'
// const BookType = new GraphQLObjectType({
//     name: 'Book',
//     fields: () => ({
//         id: { type: GraphQLID },
//         name: { type: GraphQLString },
//         genre: { type: GraphQLString },
//         author: {
//             type: AuthorType,
//             resolve(parent, args) {
//                 console.log("parent:", parent);
//                 // return _.find(authors, {id: parent.authorId});
//             }
//         }
//     })
// });

// const AuthorType = new GraphQLObjectType({
//     name: 'Author',
//     fields: () => ({
//         id: { type: GraphQLID },
//         name: { type: GraphQLString },
//         age: { type: graphql.GraphQLInt },
//         books: {
//             type: new GraphQLList(BookType),
//             resolve(parent, args) {
//                 // return _.filter(books, {authorId: parent.id})
//             }
//         }
//     })
// });



// const RootQuery = new GraphQLObjectType({
//     name: 'RootQueryType',
//     fields: {
//         book: {
//             type: BookType,
//             args: { id: { type: GraphQLID } },
//             resolve(parent, args) {
//                 // code to get data from db / other source
//                 //console.log(typeof(args.id));
//                 // return _.find(books, { id: args.id });
//             }
//         },
//         author: {
//             type: AuthorType,
//             args: { id: { type: GraphQLID } },
//             resolve(parent, args) {
//                 // lodash method
//                 // return _.find(authors, { id: args.id });
//             }
//         },
//         books: {
//             type: new GraphQLList(BookType),
//             resolve(parent, args) {
//                 // return books
//             }
//         },
//         authors: {
//             type: new GraphQLList(AuthorType),
//             resolve(parent, args) {
//                 // return authors
//             }
//         }
//     }
// });

// // Root query example:
// // book(id: '123'){
// //     name
// //     genre
// // }


// // const Mutation = new GraphQLObjectType({
// //     name: 'Mutation',
// //     fields: {
// //         addAuthor: {
// //             type: AuthorType,
// //             args: {
// //                 name: { type: GraphQLString },
// //                 age: { type: GraphQLInt }
// //             },
// //             resolve(parent, args){
// //                 let author = new Author({
// //                     name: args.name,
// //                     age: args.age
// //                 });
// //                 await author.save();
// //                 return author;
// //             }
// //         }
// //     }
// // })

// module.exports = new GraphQLSchema({
//     query: RootQuery,
//     mutation: Mutation
// });