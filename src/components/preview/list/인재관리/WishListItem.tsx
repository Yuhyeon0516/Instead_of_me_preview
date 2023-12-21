import React from "react";
import {Box, HStack, Heading, Icon, VStack} from "@gluestack-ui/themed";
import {MapPin} from "lucide-react-native";
import {IWishListItem} from "./type";

export default function WishListItem({
    name,
    age,
    gender,
    location,
    education,
    career,
}: IWishListItem) {
    return (
        <HStack
            w={"$full"}
            h={150}
            borderWidth={1}
            borderColor="$trueGray500"
            borderRadius={20}
            p={20}
            my={10}
            alignItems="center"
            space="md">
            <Box
                w={100}
                h={100}
                bgColor="$trueGray200"
                borderRadius={10}
                alignItems="center"
                justifyContent="center">
                <Heading color="$trueGray600">Image</Heading>
            </Box>

            <VStack space="xs">
                <Heading size="sm">
                    {name} {age}세 {gender}
                </Heading>
                <HStack space="xs" alignItems="center">
                    <Icon as={MapPin} color="$trueGray500" size="lg" />
                    <Heading color="$trueGray500" size="xs">
                        {location}
                    </Heading>
                </HStack>
                <Heading size="xs" color="$trueGray400">
                    {education}
                </Heading>
                <Heading size="sm">{career}</Heading>
            </VStack>
        </HStack>
    );
}
