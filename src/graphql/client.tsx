import ApolloClient from 'apollo-boost';
import {gql, InMemoryCache, HttpLink} from 'apollo-boost';
import typeDefs from "./schema";

interface Cache {
    readFragment: Function,
    writeData: Function,
}

interface MutationProps {
    cache: Cache,
    getCacheKey: Function
}

interface TodoVariables {
    id: number
}


const resolvers = {
    Query: {
        todos() {
            return [
                {
                    __typename: 'Todo',
                    id: 1,
                    text: 'Majd',
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
        toggleTodo: (_root: Object, variables: TodoVariables, {cache, getCacheKey}: MutationProps) => {
            const id = getCacheKey({__typename: 'TodoItem', id: variables.id});
            console.log('id', id);
            // const fragment = gql`
            //     fragment completeTodo on TodoItem {
            //         completed
            //     }
            // `;
            // console.log('todo', todo);
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
