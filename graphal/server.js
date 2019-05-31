import express from 'express'
import Schema from './src/schema'
import graphqlHTTP from 'express-graphql'

const app = express()
const port = 3001

app.use('/', graphqlHTTP({
    schema: Schema,
    graphiql: true
}));

let server = app.listen(port, function () {
    var addr = server.address();
    var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    console.log('Listening on ' + bind);
});