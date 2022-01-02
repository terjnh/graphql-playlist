const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');


const app = express();

// connect to MongoDB
mongoose.connect('mongodb+srv://terry:qwer@cluster0.o7fvd.mongodb.net/GraphQL_Sample?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
    console.log('connected to "GraphQL_Sample" database');
});

// we can use 'schema.js' to map out the graph
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log("now listening for requests on port 4000");
})