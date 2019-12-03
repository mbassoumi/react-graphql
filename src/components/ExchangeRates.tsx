import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

const EXCHANGE_RATES = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

interface MyProps {
    currency: string,
    rate: number,
}

const ExchangeRates = () => {
    // const {loading, error, data} = useQuery(EXCHANGE_RATES);
    const {loading, error, data} = useQuery(EXCHANGE_RATES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.rates.map(({currency, rate}: MyProps) => (
        <div key={currency}>
            <p>
                {currency}: {rate}
            </p>
        </div>
    ));
};

export default ExchangeRates;