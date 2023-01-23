import { useEffect, useState } from "react";
import styled from "styled-components";
import { Card, Grid } from "./Pokemon.style";

export const Pokemon = () => {
  const [pokemones, setPokemones]: any = useState([]);
  const [pokemonesSet, setPokemonesSet] = useState(false);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => {
        return response.json();
      })
      .then((articulos) => {
        setPokemones(articulos);
        setPokemonesSet(true);
      });
  }, []);

  if (pokemonesSet)
    return (
      <Grid>
        {pokemones.results.map((a: any) => {
          return (
            <Card>
              <PokemoneImage url={a.url} />
              <h1>{a.name}</h1>
            </Card>
          );
        })}
      </Grid>
    );
  else return <div>recuperando datos...</div>;
};

const PokemoneImage = (props: any) => {
  const [image, setImage]: any = useState("");
  const [pokemonesSet, setPokemonesSet] = useState(false);

  useEffect(() => {
    fetch(props.url)
      .then((response) => {
        return response.json();
      })
      .then((articulos) => {
        console.log(articulos.sprites.other.dream_world.front_default);
        setImage(articulos.sprites.other.dream_world.front_default);
        setPokemonesSet(true);
      });
  }, []);

  return <img src={image} width={50} height={50} alt="" />;
};
