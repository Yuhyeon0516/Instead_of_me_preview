import {Box, Divider, HStack, StarIcon, Text} from "@gluestack-ui/themed";
import React from "react";
import {FlatList, SafeAreaView} from "react-native";
import Header from "../common/Header";
import ScoreSelect from "./ScoreSelect";
import RatingRecommandSelect from "./RatingRecommandSelect";
import VerticalSpacer from "../common/VerticalSpacer";
import Item from "./Item";
import {IReviewList} from "./type";

const reviewList: IReviewList[] = [
    {
        score: 5,
        suggestion: 12,
        userName: "23년 1학기 수강자",
        description: "2023 포브스 선정 최고의 강사님",
    },
    {
        score: 4,
        suggestion: 2,
        userName: "22년 2학기 수강자",
        description:
            "강의 내용은 전반적으로 좋았으나 너무 어려운 내용도 많았어요ㅠㅠ",
    },
];

export default function ReviewList() {
    return (
        <SafeAreaView style={{height: 736, width: "100%"}}>
            <Header title="강의 평가" />
            <Box p={20}>
                <HStack gap={10} alignItems="center">
                    <Text fontSize={24} color="black" fontWeight="$extrabold">
                        5.00
                    </Text>
                    <HStack gap={3} flex={1}>
                        <StarIcon color="$yellow300" fill={"$yellow300"} />
                        <StarIcon color="$yellow300" fill={"$yellow300"} />
                        <StarIcon color="$yellow300" fill={"$yellow300"} />
                        <StarIcon color="$yellow300" fill={"$yellow300"} />
                        <StarIcon color="$yellow300" fill={"$yellow300"} />
                    </HStack>
                    <HStack flex={2} gap={6}>
                        <ScoreSelect />
                        <RatingRecommandSelect />
                    </HStack>
                </HStack>
                <VerticalSpacer height={20} />
                <FlatList
                    data={reviewList}
                    renderItem={({item}) => <Item {...item} />}
                    ItemSeparatorComponent={Divider}
                />
            </Box>
        </SafeAreaView>
    );
}
