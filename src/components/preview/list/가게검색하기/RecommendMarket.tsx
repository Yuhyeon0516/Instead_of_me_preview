import React from "react";
import {Heading, VStack} from "@gluestack-ui/themed";
import {ScrollView} from "react-native";
import RecommendMarketItem from "./RecommendMarketItem";

export default function RecommendMarket() {
    return (
        <VStack px={20} py={30} space="sm">
            <Heading size="md">이런 장소를 찾으시나요?</Heading>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{gap: 10}}>
                <RecommendMarketItem />
                <RecommendMarketItem />
                <RecommendMarketItem />
                <RecommendMarketItem />
            </ScrollView>
        </VStack>
    );
}
