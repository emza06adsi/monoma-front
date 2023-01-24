import { useEffect, useState } from "react";
import { CardList } from "../../template/cardList/cardList";

import { HeaderComponent } from "../../template/header/header.style";
import Header from "../../template/header/header";
export const Pokemon = () => {
  const [pokemones, setPokemones]: any = useState([]);
  const [pokemonesSet, setPokemonesSet] = useState(false);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => {
        return response.json();
      })
      .then((articulos) => {
        // debugger;
        setPokemones(articulos.results);
        setPokemonesSet(true);
      });
  }, []);

  if (pokemonesSet)
    return (
      <div>
        <Header></Header>
        <CardList results={pokemones}></CardList>
      </div>
    );
  else return <div>recuperando datos...</div>;
};
