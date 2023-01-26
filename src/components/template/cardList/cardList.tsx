import { useEffect, useState } from "react";
import { Button, ControlView, Grid } from "./cardList.style";
import { PokeModal } from "../../organisms/Modal/Modal";
import axios from "axios";
import { CardComponent } from "../../organisms/card/Card";
import { IcardLIst, Idata } from "./cardList.interface";

export const CardList = ({ results, setOffset, offset, count }: IcardLIst) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Idata[]>();
  const [modal, setModal] = useState<Idata[]>([]);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const response: Idata[] = [];
    results?.map(async (result: any) => {
      const { data } = await axios.get(result.url);
      response.push(data);
      setData(response);
      setLoading(true);
    });
  }, [offset]);

  if (loading)
    return (
      <div>
        <div
          style={{
            marginTop: "50px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid>
            {data?.map((obj: Idata) => {
              return (
                <CardComponent
                  obj={obj}
                  setIsOpen={setIsOpen}
                  setModal={setModal}
                  data={data}
                />
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
        <ControlView>
          <p>count: {parseInt("" + count / 9)}</p>
          <Button
            onClick={() => {
              setOffset(offset - 9);
            }}
          >
            {"<"}
            {offset}...
          </Button>
          <Button
            onClick={() => {
              setOffset(offset + 9);
            }}
          >
            ...{offset + 9}
            {">"}
          </Button>
        </ControlView>
      </div>
    );
  else return <div>recuperando datos...</div>;
};
