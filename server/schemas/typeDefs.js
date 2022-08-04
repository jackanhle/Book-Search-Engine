const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }
   
    type Book {
        bookId: ID!
        description: String
        authors: [String]
        title: String
        image: String
        link: String

    }
    input BookData {
        authors: [String]
        description: String
        title: String
        bookId: ID
        image: String
        link: String
    }
    type Auth {
        token: ID
        user: User
    }
    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        removeBook(bookId: ID!): User
        saveBook(input: BookData!): User
    }
`;

module.exports = typeDefs;