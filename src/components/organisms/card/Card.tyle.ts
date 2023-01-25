import styled from "styled-components";

export const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  font-size: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    font-size: 16px;
    width: 50%;
    display: flex;
    align-items: flex-start;
    justify-content: right;
    color: gray;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
`;
