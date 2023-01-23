import { useEffect, useState } from "react";

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
      <div>
        {pokemones.results.map((a: any) => {
          //   console.log(a);

          return (
            <div style={{border:'1px solid black'}}>
              <h1>{a.name}</h1>
              <PokemoneImage url={a.url} />;
            </div>
          );
        })}
      </div>
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

  //   if (pokemonesSet) {
  return <img src={image} width={50} height={50} alt="" />;
  //   } else return <div>recuperando datos...</div>;
};
