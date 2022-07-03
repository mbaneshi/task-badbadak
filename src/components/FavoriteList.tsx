import { Grid } from "@mui/material";
import { Restore, Restores } from "../types/Restore";
import FavoriteItem from "./FavoriteItem";

const FavoriteList: React.FC<Restores> = ({ data, selected }: Restores) => {
  return (
    <>
      <Grid container justifyContent="space-evenly">
        {selected.map((selected: Restore, index: number) => {
          return (
            <FavoriteItem
              id={selected.id}
              title={selected.title}
              description={selected.description}
              price={selected.price}
              imageUrl={selected.imageUrl}
              key={selected.id}
            />
          );
        })}
      </Grid>
    </>
  );
};
export default FavoriteList;
