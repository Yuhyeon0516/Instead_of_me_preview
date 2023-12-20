import {SafeAreaView, ScrollView, Text} from "react-native";
import React from "react";
import Header from "../common/Header";
import {Box, Heading, VStack} from "@gluestack-ui/themed";
import RankingItem from "./RankingItem";

export default function Ranking() {
    return (
        <SafeAreaView>
            <Header title="랭킹" />
            <VStack px={20} py={30}>
                <Box>
                    <Heading>홍길동님에게 딱 맞는</Heading>
                    <Heading>IOM 랭킹을 확인하세요.</Heading>
                    <Heading color="$trueGray400" size="xs" my={15}>
                        매주 월요일 0시 업데이트
                    </Heading>
                </Box>
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: "bold",
                        color: "#1A91FF",
                    }}>
                    20대 남성
                    <Text style={{color: "black"}}>
                        {" "}
                        유저들이 뽑은 베스트 랭킹
                    </Text>
                </Text>
            </VStack>
            <ScrollView
                style={{width: "100%"}}
                showsVerticalScrollIndicator={false}>
                <RankingItem
                    ranking={1}
                    company="Instead of me"
                    title="App 개발"
                    score="5.0(123)"
                />
                <RankingItem
                    ranking={2}
                    company="Instead of me"
                    title="Web 개발"
                    score="4.9(99)"
                />
                <RankingItem
                    ranking={3}
                    company="A 제약"
                    title="감기약"
                    score="4.8(67)"
                />
                <RankingItem
                    ranking={4}
                    company="농부 Company"
                    title="당근"
                    score="4.8(62)"
                />
                <RankingItem
                    ranking={5}
                    company="전자 Company"
                    title="49인치 모니터"
                    score="4.6(51)"
                />
                <RankingItem
                    ranking={6}
                    company="농부 Company"
                    title="사과"
                    score="4.5(37)"
                />
                <RankingItem
                    ranking={7}
                    company="B Clothes"
                    title="청바지"
                    score="4.3(21)"
                />
                <Box h={250} />
            </ScrollView>
        </SafeAreaView>
    );
}
