import React from "react";
import {
    Box,
    Divider,
    HStack,
    Heading,
    Icon,
    VStack,
} from "@gluestack-ui/themed";
import ProfileItem from "./ProfileItem";
import {Award} from "lucide-react-native";

export default function FavoriteProfileSection() {
    return (
        <VStack w={"$full"} bgColor="$trueGray100" px={20} py={30} space="sm">
            <Heading size="md">이번주 인기 프로필</Heading>
            <VStack bgColor="white">
                <HStack px={10} py={15} alignItems="center" space="sm">
                    <Icon as={Award} color="black" size="xl" />
                    <Heading size="sm">컴퓨터 활용능력 1급</Heading>
                </HStack>

                <Divider />

                <ProfileItem />

                <Divider />

                <Box px={10} py={15}>
                    <Heading color="$trueGray400" size="xs">
                        안녕하세요. 모든걸 해낼 수 있다는 마음 가짐을 가지고
                        업무를 하고있습니다. 연락주세요.
                    </Heading>
                </Box>
            </VStack>
        </VStack>
    );
}
