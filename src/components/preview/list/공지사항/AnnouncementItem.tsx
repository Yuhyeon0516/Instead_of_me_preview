import React, {useState} from "react";
import {
    Box,
    HStack,
    Heading,
    Pressable,
    Text,
    VStack,
} from "@gluestack-ui/themed";
import {IAnnouncementItem} from "./type";

export default function AnnouncementItem({
    title,
    type,
    description,
    date,
}: IAnnouncementItem) {
    const [isOpen, setIsOpen] = useState(false);

    function onPressItem() {
        setIsOpen(prev => !prev);
    }

    return (
        <>
            <Pressable onPress={onPressItem}>
                <VStack
                    space="md"
                    px={20}
                    py={30}
                    borderBottomWidth={1}
                    borderBottomColor="$trueGray200">
                    <HStack justifyContent="space-between" alignItems="center">
                        <Box
                            px={10}
                            py={5}
                            bgColor="$blue100"
                            borderRadius={10}>
                            <Text fontSize={14} color="$blue600">
                                {type}
                            </Text>
                        </Box>

                        <Heading size="xs" color="$trueGray500">
                            {date}
                        </Heading>
                    </HStack>

                    <Heading ml={5}>{title}</Heading>
                </VStack>
            </Pressable>
            {isOpen && (
                <Box
                    px={20}
                    py={20}
                    borderBottomWidth={1}
                    borderBottomColor="$trueGray200">
                    <Text>{description}</Text>
                </Box>
            )}
        </>
    );
}
