const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
// const {graphqlHTTP} = require('express-graphql');
// const schema = require('./schema/schema');
const mongoose = require('mongoose');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');



async function startServer() {
    const app = express();
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    });

    await apolloServer.start()

    apolloServer.applyMiddleware({ app: app });

    app.use((req, res) => {
        res.send("Hello from Express Apollo server...");
    });

    await mongoose.connect('', {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    console.log('MONGOOSE: Connected to "GraphQL_Sample" database');

    app.listen(4000, () => console.log("Server is running on port 4000!"));
}

startServer();








// const app = express();

// // connect to MongoDB
// mongoose.connect('mongodb+srv://terry:qwer@cluster0.o7fvd.mongodb.net/GraphQL_Sample?retryWrites=true&w=majority');
// mongoose.connection.once('open', () => {
//     console.log('connected to "GraphQL_Sample" database');
// });

// // we can use 'schema.js' to map out the graph
// app.use('/graphql', graphqlHTTP({
//     schema,
//     graphiql: true
// }));

// app.listen(4000, () => {
//     console.log("now listening for requests on port 4000");
// })



