import {
    AddIcon,
    Box,
    Button,
    ButtonText,
    HStack,
    Heading,
    Icon,
    Image,
    Text,
    VStack,
} from "@gluestack-ui/themed";
import React from "react";
import VerticalSpacer from "../common/VerticalSpacer";

export default function FeaturedChallenge() {
    return (
        <VStack
            w={"$full"}
            h={400}
            backgroundColor="$trueGray200"
            p={20}
            justifyContent="space-between">
            <VStack
                w={"$full"}
                backgroundColor="white"
                borderRadius={20}
                p={20}>
                <Heading>추천 챌린지</Heading>
                <VerticalSpacer height={20} />
                <HStack
                    px={10}
                    alignItems="center"
                    justifyContent="space-between"
                    space="md">
                    <Image
                        source={require("./asset/quiz.png")}
                        alt="quiz"
                        w={60}
                        h={60}
                        borderRadius={30}
                    />
                    <VStack flex={1} justifyContent="center" gap={0}>
                        <Heading size="sm">건강퀴즈 맞추기</Heading>
                        <Text fontSize={"$xs"} color="$trueGray600">
                            정답 시 100P
                        </Text>
                        <Text fontSize={"$xs"} color="$blue600">
                            4일 연속 정답 시 500P
                        </Text>
                    </VStack>
                    <Button variant="solid" size="sm">
                        <ButtonText>도전</ButtonText>
                    </Button>
                </HStack>
                <VerticalSpacer height={20} />

                <HStack
                    px={10}
                    alignItems="center"
                    justifyContent="space-between"
                    space="md">
                    <Image
                        source={require("./asset/sense.png")}
                        alt="sense"
                        w={60}
                        h={60}
                        borderRadius={30}
                    />
                    <VStack flex={1} justifyContent="center" gap={0}>
                        <Heading size="sm">건강 상식 보기</Heading>
                        <Text fontSize={"$xs"} color="$trueGray600">
                            건강 상식
                        </Text>
                    </VStack>
                    <Button variant="solid" size="sm">
                        <ButtonText>보기</ButtonText>
                    </Button>
                </HStack>
            </VStack>

            <HStack
                w={"$full"}
                backgroundColor="white"
                borderRadius={20}
                p={20}
                space="md"
                alignItems="center">
                <Box
                    w={60}
                    h={60}
                    alignItems="center"
                    justifyContent="center"
                    borderRadius={30}
                    backgroundColor="$trueGray200">
                    <Icon as={AddIcon} color="$trueGray400" size="xl" />
                </Box>
                <Heading size="md">새로운 챌린지 만들기</Heading>
            </HStack>
        </VStack>
    );
}
