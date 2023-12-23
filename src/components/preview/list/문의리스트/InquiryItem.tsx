import React from "react";
import {IInquiryItem} from "./type";
import {HStack, Heading, Icon, Text, VStack} from "@gluestack-ui/themed";
import {MoreVertical} from "lucide-react-native";

export default function InquiryItem({
    title,
    description,
    isAnswer,
    date,
}: IInquiryItem) {
    return (
        <VStack
            px={20}
            py={15}
            space="xs"
            borderRadius={10}
            borderWidth={1}
            borderColor="$trueGray400">
            <HStack w={"$full"} alignItems="center">
                <Heading flex={1} size="md">
                    {title}
                </Heading>
                <Icon as={MoreVertical} size="xl" color="$trueGray400" />
            </HStack>
            <Text color="$trueGray400">
                {description.length > 20
                    ? description.slice(0, 20) + "..."
                    : description}
            </Text>

            <HStack space="lg" mt={10} alignItems="center">
                <Text
                    color={isAnswer ? "$blue600" : "$trueGray500"}
                    fontWeight="$bold">
                    {isAnswer ? "답변완료" : "답변대기"}
                </Text>

                <Text color="$trueGray500">{date}</Text>
            </HStack>
        </VStack>
    );
}
