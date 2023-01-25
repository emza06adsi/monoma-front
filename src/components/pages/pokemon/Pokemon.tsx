import { useEffect, useMemo, useState } from "react";
import { CardList } from "../../template/cardList/cardList";

import { HeaderComponent } from "../../template/header/header.style";
import Header from "../../template/header/header";
import { IResult, Iuser } from "./Pokemon.interface";

export const Pokemon = ({ user }: Iuser) => {
  const [pokemones, setPokemones] = useState<IResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [offset, setOffset] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=9`)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setPokemones(res.results);
        setCount(res.count);
        console.log(pokemones);

        setLoading(true);
      });
  }, [offset]);

  if (loading)
    return (
      <div>
        <Header user={user}></Header>
        <CardList
          count={count}
          results={pokemones}
          setOffset={setOffset}
          offset={offset}
        ></CardList>
      </div>
    );
  else return <div>recuperando datos...</div>;
};
