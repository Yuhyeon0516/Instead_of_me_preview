import {SafeAreaView, ScrollView} from "react-native";
import React from "react";
import Header from "../common/Header";
import {
    Button,
    ButtonText,
    Center,
    Divider,
    Heading,
} from "@gluestack-ui/themed";
import ExperienceDetail from "./ExperienceDetail";

export default function AddExperience() {
    return (
        <SafeAreaView>
            <ScrollView stickyHeaderIndices={[0]}>
                <Header title="이력 추가" />
                <Center p={30} pb={0} w={"$full"}>
                    <Heading size="sm" textAlign="center">
                        본인이 적고싶은 이력을 아래 양식에 맞춰 적어주세요.
                    </Heading>
                </Center>
                <Divider mt={20} />
                <ExperienceDetail />
                <Button mx={15} size="xl">
                    <ButtonText>추가하기</ButtonText>
                </Button>
            </ScrollView>
        </SafeAreaView>
    );
}
