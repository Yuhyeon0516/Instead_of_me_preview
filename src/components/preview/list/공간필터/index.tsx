import {SafeAreaView, ScrollView} from "react-native";
import React from "react";
import Header from "../common/Header";
import ReservationType from "./ReservationType";
import {Button, ButtonText, VStack} from "@gluestack-ui/themed";
import FilterList from "./FilterList";

export default function SpaceFilter() {
    return (
        <SafeAreaView>
            <ScrollView stickyHeaderIndices={[0]}>
                <Header title="공간 필터" />
                <VStack space="md" bgColor="$trueGray200">
                    <ReservationType />
                    <FilterList />
                </VStack>
                <Button mx={15} size="lg">
                    <ButtonText>필터 적용하기</ButtonText>
                </Button>
            </ScrollView>
        </SafeAreaView>
    );
}
