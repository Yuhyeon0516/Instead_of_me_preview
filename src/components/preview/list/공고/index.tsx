import React from "react";
import {SafeAreaView} from "react-native";
import Header from "../common/Header";
import {Button, ButtonIcon, ButtonText, HStack} from "@gluestack-ui/themed";
import {MapPin, Newspaper} from "lucide-react-native";
import Profile from "./Profile";
import NoticeItem from "./NoticeItem";

export default function RecruitmentNotice() {
    return (
        <SafeAreaView>
            <Header title="공고" />
            <HStack px={20} py={30} space="md">
                <Button flex={1} variant="outline" gap={10} size="lg">
                    <ButtonIcon as={Newspaper} color="$blue400" />
                    <ButtonText>공고 등록</ButtonText>
                </Button>
                <Button flex={1} variant="outline" gap={10} size="lg">
                    <ButtonIcon as={MapPin} color="$blue400" />
                    <ButtonText>근무지 추가</ButtonText>
                </Button>
            </HStack>
            <Profile />
            <NoticeItem />
        </SafeAreaView>
    );
}
