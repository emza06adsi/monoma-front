import { useEffect, useState } from "react";
import styled from "styled-components";
import { Card, Grid } from "./Pokemon.style";
import Modal from "react-modal";
import { CardList } from "../../components/card/card";
import Header from "../../components/header/header";
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
export const Pokemon = () => {
  return (
    <div>
      <Header></Header>
      <CardList></CardList>;
    </div>
  );
};
