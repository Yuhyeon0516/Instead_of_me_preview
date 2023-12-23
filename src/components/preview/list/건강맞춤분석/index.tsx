import {SafeAreaView} from "react-native";
import React from "react";
import Header from "../common/Header";
import {
    Box,
    Button,
    ButtonText,
    Divider,
    Heading,
    VStack,
} from "@gluestack-ui/themed";
import AnalyticsItem from "./AnalyticsItem";

export default function CustomAnalytics() {
    return (
        <SafeAreaView style={{height: 737}}>
            <Header title="건강 맞춤 분석" />
            <VStack px={20} py={30} flex={1}>
                <Heading size="xl">맞춤 분석을 위해 홍길동님의</Heading>
                <Heading size="xl">건강데이터를 확인해주세요</Heading>

                <Box
                    p={10}
                    borderWidth={1}
                    borderColor="$trueGray300"
                    borderRadius={10}
                    mt={30}>
                    <AnalyticsItem
                        title="나의 건강고민"
                        description="건강 고민 없음"
                    />

                    <Divider />

                    <AnalyticsItem title="기저질환" description="아토피" />

                    <Divider />

                    <AnalyticsItem
                        title="정기검진"
                        description="검진 예약하기"
                    />

                    <Divider />

                    <AnalyticsItem
                        title="건강 연동"
                        description="건강앱 연동하기"
                    />
                </Box>
            </VStack>
            <Button size="xl">
                <ButtonText>분석 요청</ButtonText>
            </Button>
        </SafeAreaView>
    );
}
