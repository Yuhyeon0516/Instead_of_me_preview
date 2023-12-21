import React from "react";
import {
    Box,
    Divider,
    HStack,
    Heading,
    Text,
    VStack,
} from "@gluestack-ui/themed";

export default function Profile() {
    return (
        <>
            <Box
                w={"$full"}
                h={250}
                bgColor="$trueGray200"
                alignItems="center"
                justifyContent="center">
                <Heading color="$trueGray400" size="xl">
                    Image
                </Heading>
            </Box>

            <VStack px={15} py={20} w={"$full"}>
                <HStack w={"$full"} alignItems="center">
                    <Heading size="xl" flex={1}>
                        홍길동
                    </Heading>
                    <Heading size="xs" color="$trueGray400">
                        5분 전 접속
                    </Heading>
                </HStack>

                <HStack space="md" alignItems="center">
                    <Heading size="sm">26세 남</Heading>

                    <Divider h={"60%"} w={2} orientation="vertical" />

                    <Heading size="sm" color="$trueGray400">
                        IOM대학 컴퓨터공학과 학사
                    </Heading>
                </HStack>

                <HStack mt={30} space="lg" alignItems="center">
                    <Heading size="sm" color="$trueGray400">
                        거주 지역
                    </Heading>

                    <Text color="black" fontWeight="$medium">
                        서울특별시 송파구 문정동
                    </Text>
                </HStack>

                <HStack mt={10} space="lg" alignItems="center">
                    <Heading size="sm" color="$trueGray400">
                        희망 지역
                    </Heading>

                    <Text color="black" fontWeight="$medium">
                        서울특별시
                    </Text>
                </HStack>

                <HStack mt={10} space="lg" alignItems="center">
                    <Heading size="sm" color="$trueGray400">
                        희망 업무
                    </Heading>

                    <Text color="black" fontWeight="$medium">
                        Front-end Web 개발, React Native App 개발
                    </Text>
                </HStack>

                <HStack mt={10} space="lg" alignItems="center">
                    <Heading size="sm" color="$trueGray400">
                        희망 시간
                    </Heading>

                    <Text color="black" fontWeight="$medium">
                        월 ~ 금 / 08 ~ 17시
                    </Text>
                </HStack>

                <VStack
                    mt={30}
                    bgColor="$trueGray100"
                    p={15}
                    borderRadius={10}
                    space="md">
                    <Heading size="md">홍길동님 활동정보</Heading>
                    <Text color="black" fontWeight="$medium">
                        제안 응답률 32%
                    </Text>
                    <Text color="black" fontWeight="$medium">
                        보통 30분 이내에 응답
                    </Text>
                    <Text color="black" fontWeight="$medium">
                        최근 일주일 간 2건의 제안을 받았어요.
                    </Text>
                </VStack>
            </VStack>
        </>
    );
}
