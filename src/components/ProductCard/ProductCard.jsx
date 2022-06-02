import React from "react";
import Button from "@mui/material/Button";
import Swal from "sweetalert2";
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  CardActions,
} from "@mui/material";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

const ProductCard = ({ data, HandleProduct, HandleFav }) => {
  return (
    <Card sx={{ maxWidth: "250px", margin: "30px", padding: "10px" }}>
      <CardMedia component="img" image={data.image} alt="" />
      <CardContent>
        <Typography>
          <b> {data.name}</b>
        </Typography>
        <Typography>Rs : {data.price}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="success"
          onClick={() => HandleProduct(data)}
        >
          Add To Cart
        </Button>
        <Button onClick={() => HandleFav(data, Swal.fire("Add to Favorite"))}>
          <IconButton color="error" sx={{ marginLeft: "30px" }}>
            {" "}
            <FavoriteRoundedIcon />
          </IconButton>
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
