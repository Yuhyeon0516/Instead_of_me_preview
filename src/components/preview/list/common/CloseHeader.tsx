import React from "react";
import {HStack, Heading, Icon, Pressable} from "@gluestack-ui/themed";
import {X} from "lucide-react-native";

interface ICloseHeader {
    title: string;
    onPressClose: () => void;
}

export default function CloseHeader({title, onPressClose}: ICloseHeader) {
    return (
        <HStack
            px={10}
            py={5}
            w={"$full"}
            h={50}
            borderBottomColor="$warmGray300"
            borderBottomWidth={0.5}>
            <Heading flex={1} color="black" size="md">
                {title}
            </Heading>
            <Pressable p={3} onPress={onPressClose}>
                <Icon as={X} color="black" size="xl" />
            </Pressable>
        </HStack>
    );
}
