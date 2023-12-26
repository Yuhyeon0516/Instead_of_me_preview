import {HStack, Heading, Text, VStack} from "@gluestack-ui/themed";
import React from "react";
import {ScrollView} from "react-native";
import {IMarketItem} from "./type";
import MarketItem from "./MarketItem";

const marketList: IMarketItem[] = [
    {
        title: "Instead",
        score: "5.0",
        reviewCount: "5,678",
        distance: "0.2km",
        deliveryPrice: "무료배달",
    },
    {
        title: "Of",
        score: "4.9",
        reviewCount: "4,567",
        distance: "0.5km",
        deliveryPrice: "1,000원",
    },
    {
        title: "Me",
        score: "4.8",
        reviewCount: "3,456",
        distance: "1.2km",
        deliveryPrice: "2,000원",
    },
];

export default function MarketSection() {
    return (
        <VStack space="sm" px={20} py={20}>
            <HStack w={"$full"} alignItems="center">
                <Heading color="black" size="md" flex={1}>
                    추천 맛집
                </Heading>

                <Text fontSize={14}>더보기</Text>
            </HStack>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{gap: 20}}>
                {marketList.map((item, index) => (
                    <MarketItem
                        key={index}
                        title={item.title}
                        score={item.score}
                        reviewCount={item.reviewCount}
                        distance={item.distance}
                        deliveryPrice={item.deliveryPrice}
                    />
                ))}
            </ScrollView>
        </VStack>
    );
}
