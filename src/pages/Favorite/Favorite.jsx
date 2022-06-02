import React from "react";
import Button from "@mui/material/Button";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";

const Favorite = ({ favItems, HandleProduct, clearFav }) => {
  return (
    <div>
      {" "}
      <Card sx={{ margin: "50px", padding: "30px" }}>
        <div>
          <Typography>
            {" "}
            <h3>
              <b>Favorite Items</b>{" "}
              {favItems.length >= 1 && (
                <Button
                  variant="contained"
                  color="success"
                  sx={{ marginLeft: "1000px" }}
                  onClick={clearFav}
                >
                  Clear Favorite
                </Button>
              )}
            </h3>{" "}
          </Typography>
        </div>

        <div>
          <Typography>
            {" "}
            {favItems.length === 0 && <div>no items are added</div>}
          </Typography>

          <div>
            <Grid container>
              {" "}
              {favItems.map((item) => (
                <Card
                  sx={{ maxWidth: "200px", margin: "50px", padding: "30px" }}
                >
                  <div key={item.id}>
                    <CardMedia
                      component="img"
                      height="200"
                      width="100"
                      image={item.image}
                    />{" "}
                    <CardContent>
                      <hr />
                      <Typography>
                        <b>{item.name}</b>{" "}
                      </Typography>
                      <Typography sx={{ padding: "10px" }}>
                        <Button
                          variant="contained"
                          color="success"
                          onClick={() => HandleProduct(item)}
                        >
                          Add to Cart
                        </Button>{" "}
                        {"    "}
                      </Typography>
                      <Typography
                        sx={{ padding: "20px", margin: "5px" }}
                      ></Typography>
                    </CardContent>
                  </div>{" "}
                </Card>
              ))}{" "}
            </Grid>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Favorite;
