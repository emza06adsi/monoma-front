import { Idata } from "../../template/cardList/cardList.interface";
import { Card } from "./Card.tyle";

interface ICard {
  obj?: Idata;
  setIsOpen: Function;
  setModal: Function;
  data: Idata[];
}

export const CardComponent = ({ obj, setIsOpen, setModal, data }: ICard) => {
  return (
    <Card
      key={obj?.id}
      onClick={() => {
        setIsOpen(true);
        setModal(data?.filter((object: Idata) => object.id === obj?.id));
      }}
    >
      <img
        src={obj?.sprites.other.dream_world.front_default}
        width={100}
        height={100}
        alt=""
      />
      <p>{obj?.name}</p>
    </Card>
  );
};
