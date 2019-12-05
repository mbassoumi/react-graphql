import {gql} from 'apollo-boost';


const typeDefs = gql`
    type TodoItem {
        id: Int!
        text: String!
        completed: Boolean!
    }

    type Query {
        todos : [TodoItem!]!
    }
`;

export default typeDefs;
