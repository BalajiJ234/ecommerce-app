import React, { useState } from "react";
import Counter from "../components/counter";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  // Container,
} from "@material-ui/core";

const Cart = () => {
  // const [x, setX] = useState(5);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Samsung",
      quantity: 1,
      price: 15000.0,
    },
    {
      id: 2,
      name: "Nokia",
      quantity: 1,
      price: 18000.0,
    },
    {
      id: 3,
      name: "Mi",
      quantity: 1,
      price: 12000.0,
    },
  ]);

  const handleDecrement = (id) => {
    const update_products = [...products];
    update_products.map((product) => {
      return product.id === id && product.quantity > 1
        ? (product.quantity -= 1)
        : product;
    });
    setProducts(update_products);
  };

  const handleIncrement = (id) => {
    const update_products = [...products];
    update_products.map((product) =>
      product.id === id ? (product.quantity += 1) : product
    );
    setProducts(update_products);
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Total Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product, key) => (
              <TableRow key={key}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>
                  <Counter
                    handleDecrement={() => handleDecrement(product.id)}
                    handleIncrement={() => handleIncrement(product.id)}
                    product={product}
                  />
                </TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.price * product.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Cart;
