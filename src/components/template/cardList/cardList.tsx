import { useEffect, useState } from "react";
import styled from "styled-components";
import { Card, Grid } from "./cardList.style";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const CardList = () => {
  const [pokemones, setPokemones]: any = useState([]);
  const [pokemonesSet, setPokemonesSet] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(true);
  let subtitle: any;

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

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
        <Grid>
          {pokemones.results.map((a: any) => {
            return (
              <Card>
                <PokemoneImage url={a.url} />
                <p>{a.name}</p>
              </Card>
            );
          })}
        </Grid>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
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

  return <img src={image} width={100} height={100} alt="" />;
};
