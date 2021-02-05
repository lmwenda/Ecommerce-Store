import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import axios from "axios";

import Product from "../Components/Product";
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function HomeScreen() {

  const [products, setProducts ] = useState([]);

  useEffect(() => {
    async function fetchProducts(){

      const { data } = await axios.get('http://127.0.0.1:8000/api/products');
      setProducts(data);
    };

    fetchProducts();

  }, [])

  return (
    <div className="App">
      <Header />
      <h1 className="my-3">Latest Products</h1>
      <Row>
        {products.map(product => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
            </Col>
        ))}
       </Row>
      <Footer />
    </div>
  );
}

export default HomeScreen;