import React from "react";
import {SafeAreaView, ScrollView} from "react-native";
import Header from "../common/Header";
import Profile from "./Profile";
import {Button, ButtonText, Divider} from "@gluestack-ui/themed";
import Career from "./Career";

export default function JobSeekerProfile() {
    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView stickyHeaderIndices={[0]} style={{flex: 1}}>
                <Header title="홍길동" />
                <Profile />
                <Divider h={10} />
                <Career />
                <Button size="xl" w={"90%"} alignSelf="center" mt={20}>
                    <ButtonText>제안 보내기</ButtonText>
                </Button>
            </ScrollView>
        </SafeAreaView>
    );
}
