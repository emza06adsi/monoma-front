import { useEffect, useState } from "react";
import styled from "styled-components";

export const HeaderComponent = styled.section`
  width: 100%;
  height: 80px;
  background-color: #00a63c;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const About = styled.section`
  right: 150px;
  width: 300px;
  height: 300px;
  background-color: white;
  box-shadow: 0 4px 10px black;
  position: absolute;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  align-items: center;
  p {
    color: gray;
    margin-top: 10px;
    text-overflow: ellipsis;
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
  }

  button {
    background-color: none;
    border: none;
    height: 40px;
    width: 100px;
    cursor: pointer;
  }
`;
