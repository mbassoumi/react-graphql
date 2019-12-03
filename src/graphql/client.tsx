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
    
    type Query {
        author(id: ID) : Author
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
    Author: {
        id: () => 1,
        firstName: () => {
            console.log('fuckkkk');
            return 'Majd'
        },
        lastName: () => 'Basem'
    }
};

const cache = new InMemoryCache();
const link = new HttpLink({
    uri: 'https://48p1r2roz4.sse.codesandbox.io'
});

export const client = new ApolloClient({
    cache,
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
    typeDefs,
    resolvers
});


// export const client = new ApolloClient({
//     uri: 'https://48p1r2roz4.sse.codesandbox.io',
// });