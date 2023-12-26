import React from "react";
import {SafeAreaView} from "react-native";
import Header from "../common/Header";
import {Button, ButtonText, VStack} from "@gluestack-ui/themed";
import AddressSection from "./AddressSection";
import ElevatorSection from "./ElevatorSection";
import SquareFootageSection from "./SquareFootageSection";
import {useSafeAreaInsets} from "react-native-safe-area-context";

export default function ApplyToMove() {
    const safeAreaInsets = useSafeAreaInsets();

    return (
        <SafeAreaView style={{flex: 1}}>
            <Header title="이사 신청하기" />

            <VStack px={20} py={30} space="2xl" flex={1}>
                <AddressSection />
                <ElevatorSection />
                <SquareFootageSection />
            </VStack>

            <Button
                size="xl"
                bottom={0 - safeAreaInsets.bottom - 20}
                h={80}
                pb={safeAreaInsets.bottom}
                borderRadius={0}>
                <ButtonText>다음</ButtonText>
            </Button>
        </SafeAreaView>
    );
}
