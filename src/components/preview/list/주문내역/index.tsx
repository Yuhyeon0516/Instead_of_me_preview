import {SafeAreaView} from "react-native";
import React from "react";
import Header from "../common/Header";
import ProductItem from "./ProductItem";

export default function ProductOrderList() {
    return (
        <SafeAreaView>
            <Header title="주문내역" />
            <ProductItem
                title="정말 잘 짤리는 가위"
                score="4.9"
                reviewCount="1,234"
            />
            <ProductItem
                title="1++ 한우 등심"
                score="4.7"
                reviewCount="1,112"
            />
            <ProductItem title="맛있는 토마토" score="4.3" reviewCount="567" />
        </SafeAreaView>
    );
}
