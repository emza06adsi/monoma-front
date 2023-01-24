import { useEffect, useState } from "react";
import {
  ContainerIMage,
  Header,
  Ability,
  Weight,
  Main,
  Name,
  Tags,
  Move,
} from "./Modal.style";

import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "650px",
    borderRadius: 50,
    border: "none",
    boxShadow: " 0 4px 10px black",
  },
};

export const PokeModal = (props: any) => {
  const [image, setImage] = useState(true);
  let subtitle: any;

  const openModal = () => {
    props.setIsOpen(true);
  };

  const afterOpenModal = () => {
    subtitle.style.color = "#f00";
  };

  const closeModal = () => {
    props.setIsOpen(false);
  };

  return (
    <Modal
      isOpen={props.modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ContainerIMage>
        <img
          src={
            image
              ? props.modal[0].sprites.other.home.front_default
              : props.modal[0].sprites.other.home.front_shiny
          }
          width={400}
          height={300}
          alt=""
        />
        <Header>
          <Ability>
            Ability - {props.modal[0].abilities[0].ability.name}
          </Ability>
          <Weight
            onClick={() => {
              setImage(!image);
            }}
          >
            {props.modal[0].weight}
          </Weight>
        </Header>

        <Main>
          <Name>{props.modal[0].name}</Name>
        </Main>
        <Tags>
          <Move>#{props.modal[0].moves[1].move.name}</Move>
          <Move>#{props.modal[0].moves[0].move.name}</Move>
        </Tags>
      </ContainerIMage>
    </Modal>
  );
};
