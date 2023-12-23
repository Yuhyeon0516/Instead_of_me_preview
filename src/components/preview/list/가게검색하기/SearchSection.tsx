import React from "react";
import {
    HStack,
    Heading,
    Icon,
    Input,
    InputField,
    VStack,
} from "@gluestack-ui/themed";
import {CalendarDays} from "lucide-react-native";

export default function SearchSection() {
    return (
        <VStack px={20} py={30} space="lg">
            <Input>
                <InputField placeholder="지역 / 음식종류 / 레스토랑 검색" />
            </Input>

            <HStack space="sm" alignItems="center">
                <Icon as={CalendarDays} size="md" color="black" />

                <Heading size="sm">12.21(목) / 2명 / 오후 18:00</Heading>
            </HStack>
        </VStack>
    );
}
