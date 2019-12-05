import ApolloClient from 'apollo-boost';
import {gql, InMemoryCache, HttpLink} from 'apollo-boost';

const typeDefs = gql`
    type Author {
        id: Int!
        firstName: String!
        lastName: String!
        #        """
        #        the list of Posts by this author
        #        """
        #        posts: [Post]
    }


    type Todo {
        id: Int!
        text: String!
        completed: Boolean!
    }

    type Query {
        author(id: ID) : Author,
        todos : [Todo!]!
    }


    #    type Post {
    #        id: Int!
    #        title: String
    #        author: Author
    #        votes: Int
    #    }
    #
    #    # the schema allows the following query:
    #    type Query {
    #        posts: [Post]
    #        author(id: Int!): Author
    #    }
    #
    #    # this schema allows the following mutation:
    #    type Mutation {
    #        upvotePost (
    #            postId: Int!
    #        ): Post
    #    }
`;



const resolvers = {
    Query: {
        todos() {
            return [
                {
                    __typename: 'Todo',
                    id: 1,
                    text:  'Majd',
                    completed: false
                },
                {
                    __typename: 'Todo',
                    id: 2,
                    text: 'Second Todo',
                    completed: false
                },

            ];
        },
    },
    Mutation: {
        toggleTodo: () => {
            console.log('majd');
            // const id = getCacheKey({__typename: 'TodoItem', id: variables.id});
            /* const fragment = gql`#
                 fragment completeTodo on TodoItem {
                     completed
                 }
             `;*/
            // const todo = cache.readFragment({fragment, id});
            // const data = {...todo, completed: !todo.completed};
            // cache.writeData({id, data});
            return null;
        },
    },
};

const cache = new InMemoryCache();
// const link = new HttpLink({
//     uri: 'https://48p1r2roz4.sse.codesandbox.io'
// });

export const client = new ApolloClient({
    cache,
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
    typeDefs,
    resolvers
});


// export const client = new ApolloClient({
//     uri: 'https://48p1r2roz4.sse.codesandbox.io',
// });
