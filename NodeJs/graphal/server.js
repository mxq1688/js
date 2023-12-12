var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
    type Account {
        title: String
        content: String
    }
    type Info{
        name: String
        work: Int
        salary(city: String): Int
    }
  type Query {
    name: String
    money: Int
    account: Account
    getClassMates(classNo: Int!):[String]
    getInfo(username: String): Info 
  }
`);

var root = {
    name: () => 'Hello world!',
    money: () => 100,
    account: ()=> (
        {
            title: 'hah',
            content: 'hahahah',
        }
    ),
    getClassMates({classNo}){
        const obj = {
            11: ['张三', '25', 'boy'],
            22: ['李四', '24', 'girl'],
        }
        return obj[classNo];
    },
    getInfo({username}){
        const salary = ({city})=>{
            if(city == '北京')
                return 10000;
            else
                return 5000;
        }
        return {
            '张三': {
                name: '张三',
                work: 7,
                salary: salary
            },
            '李四': {
                name: '李四',
                work: 8,
                salary: salary
            }
        }[username];
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
