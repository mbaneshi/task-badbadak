import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";
import { Restore } from "../types/Restore";
import { addtolist, removefromlist } from "../feature/Restore/restoreSlice";
import { useState } from "react";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { green } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { RemoveCircle } from "@mui/icons-material";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const FavoriteItem: React.FC<Restore> = (restore: Restore) => {
  const dispatch = useAppDispatch();

  const [expanded, setExpanded] = useState(false);

  const handleDelete = (e: any) => {
    console.log(restore.id);
    dispatch(removefromlist(restore.id));
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const { title, description, price, imageUrl } = restore;
  return (
    <Grid item xs={11} sm={6} md={4} xl={3} justifySelf="center">
      <Box m={1}>
        <Card sx={{ maxWidth: 400, marginX: "auto" }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
                {title.charAt(0)}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={title}
          />
          <CardMedia
            component="img"
            height="205"
            image={imageUrl}
            alt={title}
          />
          <Box
            sx={{
              marginLeft: 5,
              marginTop: 2,
              borderColor: "red",
              fontWeight: "bold",
            }}
          >
            <Typography variant="h6">{price}</Typography>
          </Box>

          <CardActions disableSpacing>
            <IconButton
              aria-label=" Remove from Favorite"
              onClick={handleDelete}
            >
              <RemoveCircle />
            </IconButton>

            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>

          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>{description}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Box>
    </Grid>
  );
};
export default FavoriteItem;
