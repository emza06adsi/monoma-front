import { useEffect, useState } from "react";
import styled from "styled-components";
import { Card, Grid } from "./cardList.style";
import { PokeModal } from "../../organisms/Modal/Modal";
import axios from "axios";
export const CardList = (props: any) => {
  const [pokemones, setPokemones]: any = useState([]);
  const [pokemonesSet, setPokemonesSet] = useState(false);
  const [data, setData]: any = useState();
  const [modal, setModal]: any = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    var xxx: any = [];
    props.results.map(async (result: any) => {
      const { data } = await axios.get(result.url);
      xxx.push(data);
      debugger;
      setData(xxx);
      setPokemonesSet(true);
    });
  }, []);

  if (pokemonesSet)
    return (
      <div>
        <Grid>
          {data.map((a: any) => {
            return (
              <Card
                onClick={() => {
                  setIsOpen(true);
                  setModal(data.filter((object: any) => object.id === a.id));
                }}
              >
                <img
                  src={a.sprites.other.dream_world.front_default}
                  width={100}
                  height={100}
                  alt=""
                />
                <p>{a.name}</p>
              </Card>
            );
          })}
        </Grid>
        {modal.length > 0 && (
          <PokeModal
            modal={modal}
            modalIsOpen={modalIsOpen}
            setIsOpen={setIsOpen}
          ></PokeModal>
        )}
      </div>
    );
  else return <div>recuperando datos...</div>;
};
