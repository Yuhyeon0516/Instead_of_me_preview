import React from "react";
import {VStack} from "@gluestack-ui/themed";
import SellerItem from "./SellerItem";

export default function SellerScreen() {
    return (
        <VStack>
            <SellerItem
                name="철수"
                location="경기도 안산시"
                daysAgo="3일전"
                imageCount={1}
                description="좋은 가격에 친절한 거래 감사합니다."
            />
            <SellerItem
                name="영희"
                location="경기도 수원시"
                daysAgo="4일전"
                imageCount={2}
                description="제가 있는곳까지 와주셔서 감사합니다."
            />
            <SellerItem
                name="길동"
                location="경기도 화성시"
                daysAgo="5일전"
                imageCount={6}
                description="시간 약속을 잘 지켜주십니다."
            />
        </VStack>
    );
}
