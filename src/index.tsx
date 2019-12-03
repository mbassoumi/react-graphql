import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ApolloProvider} from '@apollo/react-hooks';
import {client} from './graphql/client';


const Index: React.FC = () => (
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>
);

ReactDOM.render(<Index/>, document.getElementById('root'));
