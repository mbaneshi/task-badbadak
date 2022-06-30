import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import data from "../models/mydata";
import { Restores, Restore } from "../types/Restore";
import ResortList from "./ResortList";

const FavoriteItem = () => {
  const { value } = useAppSelector((state: RootState) => state.restore);
  console.log(value);

  var fav: Restore[] = data.filter((item) => value.includes(item.id));

  if (value) {
    return <ResortList data={fav} />;
  }
  return null;
};

export default FavoriteItem;
