import React from "react";
import ReactStars from "react-rating-stars-component";
import restaurantes from '../../assets/restaurante-fake.png';


import { Restaurant, RestaurantInfo, RestaurantPhoto, Title, Address } from "./styles";

const RestaurantCard = () => <Restaurant>
    <RestaurantInfo>
        <Title>Nome do Restaurante</Title>
        <ReactStars count={5} isHalf value={4} edit={false} activeColor="#e7711c" />
        <Address>Rua São Paulo, 420</Address>
    </RestaurantInfo>
    <RestaurantPhoto src={restaurantes} alt="foto do restaurante" />
</Restaurant>;

export default RestaurantCard;