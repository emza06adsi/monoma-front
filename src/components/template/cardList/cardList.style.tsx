import { useEffect, useState } from "react";
import styled from "styled-components";

export const Grid = styled.section`
  display: grid;
  grid-template-columns: auto auto auto;
  padding: " 10px";
  width: 80%;
  height: 400px;
  overflow-y: scroll;
  /* border: red 1px solid; */
  scrollbar-color: rebeccapurple green;
  scrollbar-width: thin;
  align-items: center;
`;

export const ControlView = styled.section`
  width: 85%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: end;
  /* padding-left: 100px; */
`;

export const Button = styled.section`
  width: 120px;
  height: 50px;
  background-color: #0083b2;
  border-radius: 5px;
  font-size:30px ;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 800;
  margin-left: 20px;
  cursor: pointer;  
`;
