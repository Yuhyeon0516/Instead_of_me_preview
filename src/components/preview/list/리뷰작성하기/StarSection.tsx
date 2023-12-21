import {Center, HStack, Heading, Pressable} from "@gluestack-ui/themed";
import {Star} from "lucide-react-native";
import React, {useState} from "react";

export default function StarSection() {
    const [score, setScore] = useState(0);

    function onPressStar(index: number) {
        setScore(index);
    }

    return (
        <Center w={"$full"} h={140} justifyContent="space-between" py={20}>
            <HStack>
                <Pressable p={5} onPress={() => onPressStar(1)}>
                    <Star
                        size={40}
                        fill={score >= 1 ? "#fde047" : "lightgray"}
                        color={score >= 1 ? "#fde047" : "lightgray"}
                    />
                </Pressable>
                <Pressable p={5} onPress={() => onPressStar(2)}>
                    <Star
                        size={40}
                        fill={score >= 2 ? "#fde047" : "lightgray"}
                        color={score >= 2 ? "#fde047" : "lightgray"}
                    />
                </Pressable>
                <Pressable p={5} onPress={() => onPressStar(3)}>
                    <Star
                        size={40}
                        fill={score >= 3 ? "#fde047" : "lightgray"}
                        color={score >= 3 ? "#fde047" : "lightgray"}
                    />
                </Pressable>
                <Pressable p={5} onPress={() => onPressStar(4)}>
                    <Star
                        size={40}
                        fill={score >= 4 ? "#fde047" : "lightgray"}
                        color={score >= 4 ? "#fde047" : "lightgray"}
                    />
                </Pressable>
                <Pressable p={5} onPress={() => onPressStar(5)}>
                    <Star
                        size={40}
                        fill={score >= 5 ? "#fde047" : "lightgray"}
                        color={score >= 5 ? "#fde047" : "lightgray"}
                    />
                </Pressable>
            </HStack>
            <Heading color="$trueGray400">별점을 선택해주세요.</Heading>
        </Center>
    );
}
