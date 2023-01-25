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
import { Idata } from "../../template/cardList/cardList.interface";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "600px",
    borderRadius: 50,
    border: "none",
    boxShadow: " 0 4px 10px black",
  },
};

interface IPokeModal {
  modal: Idata[];
  modalIsOpen: boolean;
  setIsOpen: Function;
}

export const PokeModal = ({ modal, modalIsOpen, setIsOpen }: IPokeModal) => {
  const [image, setImage] = useState<boolean>(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <ContainerIMage>
        <img
          src={
            image
              ? modal[0].sprites.other.home.front_default
              : modal[0].sprites.other.home.front_shiny
          }
          width={400}
          height={300}
          alt=""
        />
        <Header>
          <Ability>Ability - {modal[0].abilities[0].ability.name}</Ability>
          <Weight
            onClick={() => {
              setImage(!image);
            }}
          >
            {modal[0].weight}
          </Weight>
        </Header>

        <Main>
          <Name>{modal[0].name}</Name>
        </Main>
        <Tags>
          <Move>#{modal[0].moves[1].move.name}</Move>
          <Move>#{modal[0].moves[0].move.name}</Move>
        </Tags>
      </ContainerIMage>
    </Modal>
  );
};
