import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";

import Rating from "../Components/Rating";
import Header from "../Components/Header";
import axios from "axios";

function ProductScreen({ match }){
    const [product, setProduct ] = useState([]);

    useEffect(() => {
      async function fetchProduct(){
  
        const { data } = await axios.get(`/api/products/${match.params.id}`);
        setProduct(data);
      };
  
      fetchProduct();
  
    }, [])

    return(
        <div>
            <Header />
            <Link to="/" className="btn btn-light my-3">Go Back</Link>
            <Row>
                <Col md={6} lg={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>

                <Col md={3}>
                    <ListGroup variant="flush">

                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#fac002'} />
                        </ListGroup.Item>

                        <ListGroup.Item>
                            {product.description}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Status: {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h3>Price: ${product.price}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Button className="mr-3 my-3"><i className="fas fa-shopping-cart"></i> Add to Cart</Button>
                            <Button>Add to Wishlist</Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </div>
    );
}

export default ProductScreen;