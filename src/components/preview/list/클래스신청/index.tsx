import {SafeAreaView} from "react-native";
import React from "react";
import Header from "../common/Header";
import SelectPersonnel from "./SelectPersonnel";
import {Button, ButtonText, Divider} from "@gluestack-ui/themed";
import SelectSchedule from "./SelectSchedule";
import {useSafeAreaInsets} from "react-native-safe-area-context";

export default function ApplyForClass() {
    const safeAreaInsets = useSafeAreaInsets();

    return (
        <SafeAreaView style={{flex: 1, position: "relative"}}>
            <Header title="클래스 신청" />
            <SelectPersonnel />

            <Divider my={5} />

            <SelectSchedule />

            <Button
                h={80}
                pb={safeAreaInsets.bottom}
                bottom={0 - 125}
                position="absolute"
                w={"$full"}
                size="xl">
                <ButtonText>신청하기</ButtonText>
            </Button>
        </SafeAreaView>
    );
}
