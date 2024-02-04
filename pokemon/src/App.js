import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const QUERY = gql`
  query {
    pokemons(first: 100) {
      id
      image
      name
      number
    }
  }
`;

function App() {
  const { data, loading } = useQuery(QUERY);
  if (loading) return <div>...</div>;
  console.log(data.pokemons);
  console.log(data.pokemons[0].image);

  function pokemonCards(num) {
    let finalArray = [];

    for (let i = 0; i < num.length; i++) {
      let n = (
        <div>
          <img src={num[i].image} alt={num[i].name} />
          <p>{num[i].name}</p>
          <p>{num[i].number}</p>
        </div>
      );
      finalArray.push(n);
    }
    return finalArray;
  }

  return <div>{pokemonCards(data.pokemons)}</div>;
}

export default App;
