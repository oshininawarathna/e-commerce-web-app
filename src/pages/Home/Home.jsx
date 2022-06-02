import React from "react";
import data from "../../components/backData/Data";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Grid } from "@mui/material";
const Home = ({ HandleProduct, HandleFav }) => {
  return (
    <div>
      <Grid container>
        {" "}
        {data.map((data) => (
          <Grid item xs={8} md={4} lg={3}>
            <ProductCard
              key={data.id}
              data={data}
              HandleProduct={HandleProduct}
              HandleFav={HandleFav}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
