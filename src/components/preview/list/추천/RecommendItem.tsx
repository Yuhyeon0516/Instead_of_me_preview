import React, {useState} from "react";
import {IRecommendItem} from "./type";
import {
    Divider,
    HStack,
    Heading,
    Icon,
    Image,
    Pressable,
    VStack,
} from "@gluestack-ui/themed";
import {Heart} from "lucide-react-native";

export default function RecommendItem({title, efficacy}: IRecommendItem) {
    const [isLike, setIsLike] = useState(false);

    function onPressLike() {
        setIsLike(prev => !prev);
    }

    return (
        <VStack
            w={"$full"}
            h={200}
            borderWidth={2}
            borderColor="$trueGray200"
            borderRadius={20}
            px={20}
            py={10}
            justifyContent="center">
            <HStack space="sm" alignItems="center">
                <Image
                    source={require("./assets/capsule.png")}
                    alt="capsule"
                    w={50}
                    h={50}
                />
                <Heading flex={1}>{title}</Heading>
                <Pressable p={3} onPress={onPressLike}>
                    <Icon
                        as={Heart}
                        color="red"
                        fill={isLike ? "red" : "transparent"}
                        size="lg"
                    />
                </Pressable>
            </HStack>

            <Divider my={15} />

            <Heading size="sm">효능: {efficacy}</Heading>
        </VStack>
    );
}
