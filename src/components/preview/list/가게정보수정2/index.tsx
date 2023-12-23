import {SafeAreaView} from "react-native";
import React from "react";
import Header from "../common/Header";
import {Heading, VStack} from "@gluestack-ui/themed";
import SelectItem from "./SelectItem";
import {Newspaper, PenSquare} from "lucide-react-native";

export default function SelectModifyMarketInformation() {
    return (
        <SafeAreaView>
            <Header title="가게 정보 수정" />
            <VStack
                borderBottomColor="$trueGray300"
                borderBottomWidth={1}
                px={20}
                py={30}>
                <Heading>가게 정보에서</Heading>
                <Heading>수정이 필요한 내용을 알려주세요.</Heading>
                <Heading mt={20} size="sm" color="$trueGray500">
                    등록하신 정보는 검수 과정을 거친 후 적용됩니다.
                </Heading>
            </VStack>

            <SelectItem
                icon={PenSquare}
                title="수정이 필요한 정보 제보"
                description="가게 정보 중 잘못된 정보를 알려주세요."
            />
            <SelectItem
                icon={Newspaper}
                title="새로 나온 메뉴판 등록"
                description="가게의 새로운 메뉴판 사진을 찍어 등록해주세요."
            />
        </SafeAreaView>
    );
}
