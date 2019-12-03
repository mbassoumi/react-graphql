import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

const EXCHANGE_RATES = gql`

    query Rates($currency: String!){
        rates(currency: $currency) {
            currency
            rate
        }
    }
`;

const AUTHOR_QUERY = gql`
    query Authers($id: ID!) {
        author(id: $id) {
            firstName @client
        }
    }
`;


interface MyProps {
    currency: string,
    rate: number,
}

const ExchangeRates = () => {
    // const {loading, error, data} = useQuery(EXCHANGE_RATES);
    // const {loading, error, data, refetch, networkStatus} = useQuery(EXCHANGE_RATES, {
    //     variables: {
    //         currency: 'USD'
    //     },
    //     skip: !'USD',
    //     // pollInterval: 500,
    //     notifyOnNetworkStatusChange: true
    // });
    //
    const {loading, error, data, refetch, networkStatus} = useQuery(AUTHOR_QUERY, {
        variables: {
            id: 1
        },
        // pollInterval: 500,
        notifyOnNetworkStatusChange: true
    });



    if (networkStatus === 4) return <p>Refetching ...</p>;
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :( {error.message}</p>;

    console.log(data);
    return (
        <div>
            <button onClick={() => refetch()}>Refetch</button>
            {/*{*/}
            {/*    data.rates.map(({currency, rate}: MyProps) => (*/}
            {/*        <div key={currency}>*/}
            {/*            <p>*/}
            {/*                {currency}: {rate}*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*    ))*/}
            {/*}*/}
        </div>
    );
};

export default ExchangeRates;