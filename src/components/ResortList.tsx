import { Grid } from "@mui/material";
import { Restore, Restores } from "../types/Restore";
import ResortItem from "./ResortItem";

const ResortList: React.FC<Restores> = (restores: Restores) => {
  return (
    <>
      <Grid container justifyContent="space-evenly">
        {restores.data.map((restore: Restore, index: number) => {
          return (
            <ResortItem
              id={restore.id}
              title={restore.title}
              description={restore.description}
              price={restore.price}
              imageUrl={restore.imageUrl}
              key={restore.id}
            />
          );
        })}
      </Grid>
    </>
  );
};
export default ResortList;
