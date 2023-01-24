import { useEffect, useState } from "react";
import styled from "styled-components";

export const ContainerIMage = styled.section`
  width: 700px;
  height: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Header = styled.section`
  display: flex;
  width: 100%;
  font-size: 40px;
  align-items: center;
  justify-content: space-between;
`;

export const Ability = styled.p`
  font-weight: 800;
  font-size: 40px;
  color: #56adbc;
`;

export const Weight = styled.button`
  height: 50px;
  width: 200px;
  border-radius: 25px;
  border: none;
  margin: none;
  background-color: #d2ffb8;
  font-size: 35px;
  color: #56adbc;
  cursor: pointer;
`;

export const Main = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const Name = styled.section`
  color: #00a63c;
  font-size: 35px;
  font-weight: 800;
`;

export const Tags = styled.section`
  display: flex;
  color: #58b6c4;
  width: 100%;
  justify-content: stretch;
`;

export const Move = styled.p`
  color: #e85382;
  width: 30%;
  font-weight: 300;
  font-size: 25px;
`;
