import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Add, Remove} from "@material-ui/icons";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import {userRequest} from "../requestMethods";


const Container = styled.div`
    
`

const Wrapper = styled.div`
    padding: 20px;
`

const Title = styled.h1`
    font-weight: 300;
  text-align: center;
`


const Bottom = styled.div`
    display: flex;
  justify-content: space-between;
`

const Info = styled.div`
    flex: 3;
`


const Product = styled.div`
    display: flex;
  justify-content: space-between;
`

const ProductDetail = styled.div`
    flex: 2;
  display: flex;
`

const Image = styled.img`
    width: 200px;
`

const Details = styled.div`
    padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const ProductName = styled.span`
    
`

const ProductID = styled.span`
    
`

const ProductColor = styled.div`
    width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
`

const ProductSize = styled.span`
    
`

const PriceDetail = styled.div`
    flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ProductAmountContainer = styled.div`
    display: flex;
  align-items: center;
  margin-bottom: 20px;
`

const ProductAmount = styled.div`
    font-size: 24px;
  margin: 5px;
`

const ProductPrice = styled.div`
    font-size: 30px;
  font-weight: 200;
`

const Hr = styled.hr`
    background-color: #eee;
  border: none;
  height: 1px;
`

const Summary = styled.div`
    flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`

const SummaryTitle = styled.div`
    font-weight: 200;
`

const SummaryItem = styled.div`
    margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.type === "total" && "500"};
  font-size: ${props => props.type === "total" && "20px"};
`

const SummaryItemText = styled.span`
    
`

const SummaryItemPrice = styled.span`
    
`

const SummaryButton = styled.button`
    width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`



const Cart = () => {
    const user = useSelector((state) => state.user.currentUser);
    const cart = useSelector(state => state.cart);


    return (
        <Container>
            <Navbar/>
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Bottom>
                    <Info>
                        {cart.products.map(product => (<Product>
                            <ProductDetail>
                                <Image src={product.img}/>
                                <Details>
                                    <ProductName><strong>Product: </strong>{product.title}</ProductName>
                                    <ProductID><strong>ID: </strong>{product._id}</ProductID>
                                    <ProductColor color={product.color}/>
                                    <ProductSize><strong>Size: </strong>{product.size}</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>{product.quantity}</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>$ {product.price * product.quantity}</ProductPrice>
                            </PriceDetail>
                        </Product>))}
                        <Hr/>

                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 4.99</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -4.99</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Cart