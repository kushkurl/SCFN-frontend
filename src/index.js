import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Client from 'aws-appsync';
import {ApolloProvider} from 'react-apollo';
import Rehydrated from './Rehydrated';
import AppSync from './AppSync';
import {BrowserRouter as Router} from 'react-router-dom';


const client = new Client({
    url: AppSync.aws_appsync_graphqlEndpoint,
    region: AppSync.aws_appsync_region,
    auth: {
        type: 'API_KEY',
        apiKey: AppSync.aws_appsync_apiKey
    }
})

const WithProvider = () => (
    <ApolloProvider client={client}>
        <Rehydrated>
            <App />
        </Rehydrated>
    </ApolloProvider>
)

ReactDOM.render(<Router><WithProvider /></Router>, document.getElementById('root'));