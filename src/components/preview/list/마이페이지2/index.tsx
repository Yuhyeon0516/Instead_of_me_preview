import React from "react";
import {SafeAreaView} from "react-native";
import Header from "../common/Header";
import {
    Box,
    Button,
    ButtonText,
    HStack,
    Heading,
    VStack,
} from "@gluestack-ui/themed";
import MyPageItem from "./MyPageItem";

export default function MyPage2() {
    return (
        <SafeAreaView>
            <Header title="마이페이지" />
            <VStack space="md">
                <HStack px={20} py={30} alignItems="center" space="lg">
                    <Box
                        w={80}
                        h={80}
                        borderRadius={"$full"}
                        bgColor="$trueGray200"
                        alignItems="center"
                        justifyContent="center">
                        <Heading color="$trueGray500">Image</Heading>
                    </Box>

                    <Heading>Instead of me</Heading>
                </HStack>

                <VStack space="xs" px={20}>
                    <MyPageItem label="1:1 문의" />
                    <MyPageItem label="자주 묻는 질문" />
                    <MyPageItem label="공지사항" />
                    <MyPageItem label="알림 설정" />
                </VStack>

                <Button size="xl" mx={20} mt={10}>
                    <ButtonText>회원 정보 수정</ButtonText>
                </Button>

                <Button size="xl" mx={20} mt={10} variant="outline">
                    <ButtonText>회원 탈퇴</ButtonText>
                </Button>
            </VStack>
        </SafeAreaView>
    );
}
