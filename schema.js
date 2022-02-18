const { gql } = require('apollo-server-express');

exports.typeDefs = /* GraphQL Schema */ gql `

    type Employee {
        id: ID
        firstname: String
        lastname: String
        email: String
        gender: String
        city: String
        designation: String
        salary: Float
    }

    type Query {
        getEmployees: [Employee]
        getEmployeeByID(id: ID!): Employee
        getEmployeeByCity(city: String!): [Employee]
    }

    type Mutation {
        addEmployee(
            firstname: String!
            lastname: String!
            email: String!
            gender: String!
            city: String!
            designation: String!
            salary: Float!): Employee



            updateEmployee(id: ID!
                firstname: String!
                lastname: String!
                email: String!
                gender: String!
                city: String!
                designation: String!
                salary: Float!): Employee
    
            deleteEmployee(id:ID!): Employee
        }

`