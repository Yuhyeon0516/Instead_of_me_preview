import React from "react";
import {SafeAreaView} from "react-native";
import Header from "../common/Header";
import {VStack} from "@gluestack-ui/themed";
import SelectSection from "./SelectSection";
import StarSection from "./star/StarSection";
import ServeySection from "./servey/ServeySection";

export default function ReivewStatistics() {
    return (
        <SafeAreaView>
            <Header title="강의 평가" />
            <VStack p={20} gap={30}>
                <SelectSection />
                <VStack
                    borderWidth={1}
                    borderColor="$trueGray300"
                    p={20}
                    borderRadius={10}
                    gap={25}>
                    <StarSection />
                    <ServeySection />
                </VStack>
            </VStack>
        </SafeAreaView>
    );
}
