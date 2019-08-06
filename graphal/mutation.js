var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
    input Accountinput{
        name: String
        age: Int
        sex: String
        department: String
    }
    type Account{
        name: String
        age: Int
        sex: String
        department: String
    }
    type Mutation{
        createAccount(input: Accountinput): Account
        updateAccount(id: ID!, input: Accountinput): Account
    }
    type Query{
        account: [Account]
    }
`);
const feckDb = {}
var root = {
    account: ()=>{
        const arr = [];
        for(key in feckDb){
            arr.push(feckDb[key])
        }
        return arr;
    },
    createAccount({input}){
        feckDb[input.name] = input;
        return feckDb[input.name];
    },
    updateAccount({id, input}){

        const update = Object.assign({}, feckDb[id], input)
        feckDb[id] = update
        return feckDb[id];
    }
};

var app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.use(express.static('public'));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
