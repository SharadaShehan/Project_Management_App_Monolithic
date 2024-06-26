import { gql } from 'apollo-server-express'

export default gql`
    extend type Query {
        projects: [ProjectShortened!]
        project(id: ID!): Project
    }

    extend type Mutation {
        createProject(title: String!, description: String!, members: [ID!], logo: String): Project
        updateProject(id: ID!, title: String, description: String, status: String, defaultProcess: ID): Project
        deleteProject(id: ID!): Boolean
        removeMember(projectId: ID!, memberId: ID!): Boolean
    }

    type Project {
        id: ID!
        title: String!
        description: String!
        owner: UserShortened!
        members: [UserShortened!]
        status: String!
        processes: [ProcessShortened!]
        defaultProcess: ProcessShortened
        logo: String
    }

    type ProjectShortened {
        id: ID!
        title: String!
        description: String!
        status: String!
        defaultProcess: ProcessShortened
        logo: String
    }
`
