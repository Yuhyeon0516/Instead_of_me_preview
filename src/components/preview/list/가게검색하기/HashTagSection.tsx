import React from "react";
import {Heading, VStack} from "@gluestack-ui/themed";
import HashTagItem from "./HashTagItem";
import {ScrollView} from "react-native";

export default function HashTagSection() {
    return (
        <VStack px={20} py={30} space="sm">
            <Heading size="md">추천 해시태그</Heading>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{gap: 10}}>
                <HashTagItem label="와인/다이닝바" />
                <HashTagItem label="주차가 가능한" />
                <HashTagItem label="테라스가 있는" />
                <HashTagItem label="뷰가 좋은" />
            </ScrollView>
        </VStack>
    );
}
