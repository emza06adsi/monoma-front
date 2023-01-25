import { useEffect, useState } from "react";
import { CardList } from "../../template/cardList/cardList";

import { HeaderComponent } from "../../template/header/header.style";
import Header from "../../template/header/header";
import { IResult, Iuser } from "./Pokemon.interface";

export const Pokemon = ({ user }: Iuser) => {
  const [pokemones, setPokemones] = useState<IResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setPokemones(res.results);
        setLoading(true);
      });
  }, []);

  if (loading)
    return (
      <div>
        <Header user={user}></Header>
        <CardList results={pokemones}></CardList>
      </div>
    );
  else return <div>recuperando datos...</div>;
};
