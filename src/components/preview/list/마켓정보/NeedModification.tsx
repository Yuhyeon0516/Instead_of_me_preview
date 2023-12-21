import {HStack, Heading, Icon, Text, VStack} from "@gluestack-ui/themed";
import {ChevronRight, PenSquare} from "lucide-react-native";
import React from "react";

export default function NeedModification() {
    return (
        <HStack p={20} space="lg" alignItems="center">
            <Icon as={PenSquare} color="black" size="xl" />
            <VStack flex={1}>
                <Heading size="md">수정이 필요한 가게 정보가 있나요?</Heading>
                <Text fontSize={14} color="$trueGray500">
                    새로운 정보를 입력해주세요.
                </Text>
            </VStack>
            <Icon as={ChevronRight} color="black" size="xl" />
        </HStack>
    );
}
