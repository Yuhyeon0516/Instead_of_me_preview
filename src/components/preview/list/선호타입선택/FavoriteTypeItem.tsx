import React from "react";
import {
    Box,
    CircleIcon,
    HStack,
    Radio,
    RadioIcon,
    RadioIndicator,
    RadioLabel,
    Text,
    VStack,
} from "@gluestack-ui/themed";
import {IFavoriteTypeItem} from "./type";

export default function FavoriteTypeItem({
    title,
    descriptions,
    selectedIndex,
    index,
}: IFavoriteTypeItem) {
    return (
        <Box
            w={"90%"}
            bgColor={selectedIndex === index ? "$blue200" : "$trueGray100"}
            borderRadius={10}
            py={20}
            px={20}>
            <Radio value={index}>
                <VStack space="xs">
                    <HStack space="xs">
                        <RadioIndicator mr="$2">
                            <RadioIcon as={CircleIcon} />
                        </RadioIndicator>
                        <RadioLabel color="black" fontWeight="$bold">
                            {title}
                        </RadioLabel>
                    </HStack>
                    {selectedIndex === index && (
                        <Box pl={35}>
                            {descriptions.map((item, descriptionIndex) => (
                                <Text key={descriptionIndex}>{item}</Text>
                            ))}
                        </Box>
                    )}
                </VStack>
            </Radio>
        </Box>
    );
}
