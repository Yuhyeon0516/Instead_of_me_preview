import {
    Box,
    Button,
    ButtonIcon,
    ButtonText,
    FavouriteIcon,
    HStack,
    Heading,
    Icon,
    ShareIcon,
    Text,
    VStack,
} from "@gluestack-ui/themed";
import {ThumbsUp} from "lucide-react-native";
import React, {useState} from "react";

export default function Post() {
    const [heartCount, setHeartCount] = useState(5);
    const [heartIsFill, setHeartIsFill] = useState(false);
    const [thumbsUpCount, setThumbsUpCount] = useState(14);
    const [thumbsUpIsFill, setThumbsUpIsFill] = useState(false);

    function onPressHeart() {
        if (heartIsFill) {
            setHeartCount(prev => prev - 1);
            setHeartIsFill(false);
        } else {
            setHeartCount(prev => prev + 1);
            setHeartIsFill(true);
        }
    }

    function onPressThumbsUp() {
        if (thumbsUpIsFill) {
            setThumbsUpCount(prev => prev - 1);
        } else {
            setThumbsUpCount(prev => prev + 1);
        }

        setThumbsUpIsFill(prev => !prev);
    }

    return (
        <VStack w={"$full"}>
            <VStack p={20} space="md">
                <Heading>회사 밥이 너무 맛있어요.</Heading>
                <Text size="sm" color="black">
                    돈가스를 먹고 계산하려는데 9,000원이 나왔네요...너무 싸요..!
                </Text>
            </VStack>
            <Box
                w={"$full"}
                h={300}
                bgColor="$trueGray300"
                alignItems="center"
                justifyContent="center">
                <Heading color="white" size="2xl">
                    Image
                </Heading>
            </Box>
            <HStack
                w={"$full"}
                h={50}
                px={40}
                alignItems="center"
                justifyContent="space-between">
                <Button
                    variant="outline"
                    borderWidth={0}
                    onPress={onPressHeart}
                    gap={7}>
                    <Icon
                        as={FavouriteIcon}
                        color="$red700"
                        fill={heartIsFill ? "$red700" : "transparent"}
                    />
                    <ButtonText color="$red700">{heartCount}</ButtonText>
                </Button>
                <Button
                    variant="outline"
                    borderWidth={0}
                    onPress={onPressThumbsUp}
                    gap={7}>
                    <Icon
                        as={ThumbsUp}
                        fill={thumbsUpIsFill ? "$blue700" : "transparent"}
                        color="$blue700"
                    />
                    <ButtonText color="$blue700">{thumbsUpCount}</ButtonText>
                </Button>
                <Button variant="outline" borderWidth={0} gap={7}>
                    <ButtonIcon as={ShareIcon} color="black" />
                    <ButtonText color="black">공유하기</ButtonText>
                </Button>
            </HStack>
        </VStack>
    );
}
