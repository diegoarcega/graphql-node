module.exports =  `
    type User {
        name: String!
        age: String!
    }

    type Query {
        helloWorld(name: String, age: String): User!
    }

    type Mutation {
        hellowWorld(name: String): String!
    }
`