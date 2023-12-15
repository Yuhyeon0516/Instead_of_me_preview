import React from "react";
import {IReviewList} from "./type";
import {
    Button,
    ButtonText,
    HStack,
    StarIcon,
    Text,
    VStack,
} from "@gluestack-ui/themed";
// import Feather from "react-native-vector-icons/Feather";
import {FiThumbsUp} from "react-icons/fi";
import VerticalSpacer from "../common/VerticalSpacer";

export default function Item(item: IReviewList) {
    const {score, suggestion, userName, description} = item;

    return (
        <VStack my={20}>
            <HStack alignItems="center" mb={10}>
                <HStack gap={1} flex={1} alignSelf="flex-end">
                    {[...Array(score)].map((_, index) => (
                        <StarIcon
                            fill={"$yellow300"}
                            color="$yellow300"
                            key={index}
                        />
                    ))}
                    {5 - score > 0 &&
                        [...Array(5 - score)].map((_, index) => (
                            <StarIcon color="$yellow300" key={index} />
                        ))}
                </HStack>

                <HStack gap={10}>
                    <Button
                        variant="outline"
                        size="xs"
                        borderColor="$trueGray400">
                        {/* <Feather
                            name="thumbs-up"
                            size={15}
                            style={{marginRight: 8}}
                            color={"#404040"}
                        /> */}
                        <FiThumbsUp
                            style={{
                                marginRight: 8,
                                fontSize: 15,
                                color: "#404040",
                            }}
                        />
                        <ButtonText color="$trueGray700">추천</ButtonText>
                    </Button>
                    <Button
                        variant="outline"
                        size="xs"
                        borderColor="$trueGray400">
                        <ButtonText color="$trueGray700">신고</ButtonText>
                    </Button>
                </HStack>
            </HStack>

            <HStack gap={10} alignItems="center">
                <Text color="$trueGray400">{userName}</Text>
                <HStack gap={5} alignItems="center">
                    {/* <Feather name="thumbs-up" size={15} color={"#dc2626"} /> */}
                    <FiThumbsUp
                        style={{
                            fontSize: 15,
                            color: "#dc2626",
                        }}
                    />
                    <Text color="$red600">{suggestion}</Text>
                </HStack>
            </HStack>
            <VerticalSpacer height={10} />
            <Text fontSize={16} fontWeight="$bold">
                {description}
            </Text>
        </VStack>
    );
}
