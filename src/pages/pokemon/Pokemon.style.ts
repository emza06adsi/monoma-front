import { useEffect, useState } from "react";
import styled from "styled-components";

export const Grid = styled.section`
  display: grid;
  grid-template-columns: auto auto auto;
  padding: " 10px";
`;

export const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  font-size: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

