import React, {useState} from "react";
import {IWishlist} from "./type";
import {
    Center,
    HStack,
    Heading,
    Icon,
    VStack,
    Text,
    Pressable,
} from "@gluestack-ui/themed";
import {Heart, MessageCircle, UserRound} from "lucide-react-native";

export default function SpaceWishlistItem({item}: {item: IWishlist}) {
    const [likeCount, setLikeCount] = useState(item.likeCount);
    const [likeFill, setLikeFill] = useState(false);

    function onPressHeart() {
        if (likeFill) {
            setLikeCount(prev => prev - 1);
            setLikeFill(false);
        } else {
            setLikeCount(prev => prev + 1);
            setLikeFill(true);
        }
    }

    return (
        <VStack px={20} py={10} space="lg">
            <Center
                w={"$full"}
                h={300}
                bgColor="$trueGray300"
                borderRadius={10}>
                <Heading>Image</Heading>
                <Pressable
                    position="absolute"
                    right={20}
                    bottom={20}
                    onPress={onPressHeart}>
                    <Icon
                        as={Heart}
                        fill={likeFill ? "$red" : "transparent"}
                        color="$red"
                        size="xl"
                    />
                </Pressable>
            </Center>
            <VStack space="xs">
                <Heading>{item.title}</Heading>
                <Heading size="xs" color="$trueGray500">
                    {item.location}
                </Heading>
                <HStack space="lg">
                    <Heading size="sm" flex={1}>
                        {item.price}
                    </Heading>

                    <HStack alignItems="center" space="xs">
                        <Icon as={UserRound} color="$trueGray500" />
                        <Text>{item.maxPerson}</Text>
                    </HStack>

                    <HStack alignItems="center" space="xs">
                        <Icon as={Heart} color="$trueGray500" />
                        <Text>{likeCount}</Text>
                    </HStack>

                    <HStack alignItems="center" space="xs">
                        <Icon as={MessageCircle} color="$trueGray500" />
                        <Text>{item.messageCount}</Text>
                    </HStack>
                </HStack>
            </VStack>
        </VStack>
    );
}
