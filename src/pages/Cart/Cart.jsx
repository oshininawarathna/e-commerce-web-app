import React from "react";
import Button from "@mui/material/Button";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";

const Cart = ({ cartItems, HandleProduct, HandleRemove, clearCart }) => {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  return (
    <>
      <Card sx={{ margin: "50px", padding: "30px" }}>
        <div>
          <Typography>
            {" "}
            <h3>
              <b>Cart Items</b>{" "}
              {cartItems.length >= 1 && (
                <Button
                  variant="contained"
                  color="success"
                  sx={{ marginLeft: "1000px" }}
                  onClick={clearCart}
                >
                  Clear Cart
                </Button>
              )}
            </h3>{" "}
          </Typography>
        </div>

        <div>
          <Typography>
            {" "}
            {cartItems.length === 0 && <div>no items are added</div>}
          </Typography>

          <div>
            <Card sx={{ margin: "5px", padding: "2px" }}>
              <Typography sx={{ margin: "5px" }}>
                Total Price - <b>Rs {totalPrice}</b>
              </Typography>
            </Card>{" "}
            <Grid container>
              {" "}
              {cartItems.map((item) => (
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
                          +
                        </Button>{" "}
                        {"    "}
                        <Button
                          variant="contained"
                          color="error"
                          onClick={() => HandleRemove(item)}
                        >
                          -
                        </Button>{" "}
                      </Typography>
                      <Typography sx={{ padding: "20px", margin: "5px" }}>
                        <b>
                          {item.quantity} * Rs{item.price}
                        </b>
                      </Typography>
                    </CardContent>
                  </div>{" "}
                </Card>
              ))}{" "}
            </Grid>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Cart;
