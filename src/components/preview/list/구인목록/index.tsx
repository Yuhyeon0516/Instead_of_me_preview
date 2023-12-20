import React from "react";
import {SafeAreaView, ScrollView} from "react-native";
import Header from "../common/Header";
import {Heading, VStack} from "@gluestack-ui/themed";
import LocationSelector from "./LocationSelector";
import JobItem from "./JobItem";

export default function JobListings() {
    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView stickyHeaderIndices={[0]}>
                <Header title="구인 목록" />
                <VStack px={20} py={30} bgColor="$trueGray200" space="xl">
                    <LocationSelector />
                    <Heading size="sm" color="$trueGray500">
                        총 1,234명
                    </Heading>
                    <JobItem
                        title="앱 개발 교육자를 찾습니다."
                        selectedDay={["월", "화", "수", "목", "금"]}
                        location="경기도 화성시 진안동"
                        price="25,000"
                        isDiscussion
                    />
                    <JobItem
                        title="등하원 도우미를 구합니다."
                        selectedDay={["월", "수", "금"]}
                        location="서울특별시 송파구"
                        price="10,000"
                        isDiscussion={false}
                    />
                </VStack>
            </ScrollView>
        </SafeAreaView>
    );
}
