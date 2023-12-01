import qpl from "graphql-tag";



export const typeDefs = qpl`
    # Schema definitions go here

    "A track is a group of Modules that teaches about a specific topic"
    type Track {
        id: ID!
        title: String!
        author: Author!
        thumbnail: String
        length: Int
        modulesCount: Int
    }
`;