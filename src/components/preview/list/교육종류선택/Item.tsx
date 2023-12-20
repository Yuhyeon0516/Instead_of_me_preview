import {Box, Icon, Pressable, Text, VStack} from "@gluestack-ui/themed";
import {Heart} from "lucide-react-native";
import React, {useState} from "react";

export default function Item() {
    const [isSelected, setIsSelected] = useState(false);

    function onPressItem() {
        setIsSelected(prev => !prev);
    }

    return (
        <Pressable
            borderWidth={isSelected ? 1 : 0}
            borderRadius={10}
            borderColor="$blue500"
            onPress={onPressItem}>
            <VStack space="sm" alignItems="center" m={5}>
                <Box
                    w={60}
                    h={60}
                    borderRadius={"$full"}
                    alignItems="center"
                    justifyContent="center"
                    bgColor="$blue500">
                    <Icon as={Heart} color="white" fill={"white"} />
                </Box>
                <Text fontWeight="$medium" color="black">
                    수학
                </Text>
            </VStack>
        </Pressable>
    );
}
