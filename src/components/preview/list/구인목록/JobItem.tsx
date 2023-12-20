import React, {useState} from "react";
import {IJobItem} from "./type";
import {
    HStack,
    Heading,
    VStack,
    Text,
    Divider,
    Icon,
    Pressable,
} from "@gluestack-ui/themed";
import {Heart} from "lucide-react-native";

export default function JobItem({
    title,
    selectedDay,
    location,
    price,
    isDiscussion,
}: IJobItem) {
    const [isLike, setIsLike] = useState(false);

    function onPressHeart() {
        setIsLike(prev => !prev);
    }
    return (
        <VStack bgColor="white" px={15} py={20} borderRadius={5} space="md">
            <Heading size="xs" color="$trueGray400">
                {title}
            </Heading>

            <HStack space="sm">
                <Text
                    color={
                        selectedDay.includes("월") ? "black" : "$trueGray300"
                    }
                    fontWeight="$medium">
                    월
                </Text>
                <Text
                    color={
                        selectedDay.includes("화") ? "black" : "$trueGray300"
                    }
                    fontWeight="$medium">
                    화
                </Text>
                <Text
                    color={
                        selectedDay.includes("수") ? "black" : "$trueGray300"
                    }
                    fontWeight="$medium">
                    수
                </Text>
                <Text
                    color={
                        selectedDay.includes("목") ? "black" : "$trueGray300"
                    }
                    fontWeight="$medium">
                    목
                </Text>
                <Text
                    color={
                        selectedDay.includes("금") ? "black" : "$trueGray300"
                    }
                    fontWeight="$medium">
                    금
                </Text>
                <Text
                    color={
                        selectedDay.includes("토") ? "black" : "$trueGray300"
                    }
                    fontWeight="$medium">
                    토
                </Text>
                <Text
                    color={
                        selectedDay.includes("일") ? "black" : "$trueGray300"
                    }
                    fontWeight="$medium">
                    일
                </Text>
                <Divider orientation="vertical" />
                <Text color="$blue500" fontWeight="$medium">
                    단기
                </Text>
            </HStack>

            <Heading size="xs" color="$trueGray400">
                {location}
            </Heading>

            <Divider my={5} />

            <HStack alignItems="center">
                <VStack flex={1}>
                    <Text color="black" fontWeight="$bold">
                        예상 시급 :{" "}
                        <Text color="$blue500" fontWeight="$bold">
                            {price}원
                        </Text>
                    </Text>
                    <Heading
                        size="xs"
                        color={isDiscussion ? "$blue600" : "$red600"}>
                        {isDiscussion ? "협의 가능" : "협의 불가"}
                    </Heading>
                </VStack>

                <Pressable
                    bgColor="$trueGray100"
                    alignItems="center"
                    justifyContent="center"
                    p={10}
                    borderRadius={"$full"}
                    onPress={onPressHeart}>
                    <Icon
                        as={Heart}
                        size="lg"
                        color={isLike ? "red" : "$trueGray400"}
                        fill={isLike ? "red" : "transparent"}
                    />
                </Pressable>
            </HStack>
        </VStack>
    );
}
