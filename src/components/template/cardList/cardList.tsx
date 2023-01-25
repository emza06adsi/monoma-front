import { useEffect, useState } from "react";
import { Grid } from "./cardList.style";
import { PokeModal } from "../../organisms/Modal/Modal";
import axios from "axios";
import { CardComponent } from "../../organisms/card/Card";
import { IcardLIst, Idata } from "./cardList.interface";

export const CardList = ({ results }: IcardLIst) => {
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
  }, []);

  if (loading)
    return (
      <div>
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
    );
  else return <div>recuperando datos...</div>;
};
