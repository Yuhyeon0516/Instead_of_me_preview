import React from "react";
import {HStack, Icon, Text} from "@gluestack-ui/themed";
import {ChevronDown} from "lucide-react-native";

interface ILeftIconHeader {
    icon: any;
    title: string;
}

export default function LeftIconHeader({icon, title}: ILeftIconHeader) {
    return (
        <HStack
            backgroundColor="white"
            alignItems="center"
            h={50}
            w={"100%"}
            px={15}
            position="relative"
            borderBottomColor="$warmGray300"
            borderBottomWidth={0.5}>
            <Icon as={icon} color="black" size="xl" />
            <Text
                fontSize={18}
                alignSelf={"center"}
                color="black"
                fontWeight={"$extrabold"}
                flex={1}
                textAlign="center">
                {title}
            </Text>

            <Icon as={ChevronDown} color="black" size="xl" />
        </HStack>
    );
}
