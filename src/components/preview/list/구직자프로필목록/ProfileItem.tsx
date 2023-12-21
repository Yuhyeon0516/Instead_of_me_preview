import React from "react";
import {
    Box,
    Divider,
    HStack,
    Heading,
    Icon,
    Text,
    VStack,
} from "@gluestack-ui/themed";
import {Star, UserRound} from "lucide-react-native";

export default function ProfileItem() {
    return (
        <HStack
            p={15}
            borderRadius={10}
            w={"$full"}
            bgColor="white"
            alignItems="center"
            space="sm">
            <Box
                w={100}
                h={100}
                bgColor="$trueGray100"
                borderRadius={"$full"}
                alignItems="center"
                justifyContent="center">
                <UserRound size={70} color="black" />
            </Box>

            <VStack>
                <HStack space="sm" alignItems="center">
                    <Heading size="lg">홍길동</Heading>
                    <Heading size="sm" color="$trueGray400">
                        3시간 전 작성
                    </Heading>
                </HStack>

                <Heading size="sm" color="$trueGray400">
                    경기도 화성시 반월동
                </Heading>

                <HStack space="sm" alignItems="center">
                    <Heading size="xs" color="$trueGray400">
                        희망 시급 13,000원
                    </Heading>

                    <Divider h={"60%"} w={1} />

                    <Heading size="xs" color="$trueGray400">
                        25세
                    </Heading>
                </HStack>

                <HStack space="xs" alignItems="center">
                    {[...Array(5)].map((_, index) => (
                        <Icon as={Star} color="$yellow500" key={index} />
                    ))}
                    <Text fontSize={14} ml={5}>
                        후기 0개
                    </Text>
                </HStack>
            </VStack>
        </HStack>
    );
}
