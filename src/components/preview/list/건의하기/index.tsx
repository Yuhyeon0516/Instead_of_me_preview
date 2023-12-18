import React from "react";
import {SafeAreaView} from "react-native";
import Header from "../common/Header";
import {Box, Center, Heading, VStack} from "@gluestack-ui/themed";
import VerticalSpacer from "../common/VerticalSpacer";
import {ISuggetionItem} from "./type";
import SuggetionItem from "./SuggetionItem";

const suggetionList: ISuggetionItem[] = [
    {
        text: "지금도 좋아요",
    },
    {
        text: "이건 좀 고쳐주세요",
    },
    {
        text: "새로운 기능이 필요해요",
    },
];

export default function MakeSuggetion() {
    return (
        <SafeAreaView>
            <Header title="건의하기" />
            <VStack px={20}>
                <VerticalSpacer height={100} />
                <Center mb={50}>
                    <Box
                        w={100}
                        h={100}
                        alignItems="center"
                        justifyContent="center"
                        bgColor="$trueGray300"
                        borderRadius={"$full"}>
                        <Heading>Logo</Heading>
                    </Box>
                    <VerticalSpacer height={50} />
                    <Heading fontSize={24} color="$blue500" mb={10}>
                        Instead of me, 같이 그려가요
                    </Heading>
                    <Heading fontSize={18}>
                        늘 가까이에서 고객님의 의견을 경청하겠습니다.
                    </Heading>
                </Center>
                <VStack
                    borderWidth={1}
                    borderColor="$blue500"
                    p={10}
                    borderRadius={10}>
                    {suggetionList.map((suggetion, index) => (
                        <SuggetionItem text={suggetion.text} key={index} />
                    ))}
                </VStack>
            </VStack>
        </SafeAreaView>
    );
}
