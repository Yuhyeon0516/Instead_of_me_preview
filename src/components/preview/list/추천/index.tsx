import {SafeAreaView, ScrollView} from "react-native";
import React, {useRef, useState} from "react";
import Header from "../common/Header";
import {
    Box,
    Button,
    ButtonText,
    HStack,
    Heading,
    Text,
} from "@gluestack-ui/themed";
import NotRecommendScreen from "./NotRecommendScreen";
import RecommendScreen from "./RecommendScreen";

export default function NutritionalSupplementRecommendation() {
    const scrollViewRef = useRef<ScrollView | null>(null);
    const [section, setSection] = useState<"Recommended" | "Not recommended">(
        "Recommended",
    );

    function onPressButton(selectedSection: "Recommended" | "Not recommended") {
        setSection(selectedSection);
        scrollViewRef.current?.scrollTo({y: 0, animated: false});
    }

    return (
        <SafeAreaView>
            <Header title="추천" />
            <Box px={20} mt={20}>
                <Heading size="lg">홍길동님의 대표적인</Heading>
                <Heading size="lg">추천 / 비추천 영양제입니다.</Heading>
            </Box>

            <HStack
                w={"90%"}
                h={70}
                bgColor="$trueGray100"
                px={10}
                alignSelf="center"
                mt={40}
                borderRadius={20}
                justifyContent="space-between"
                alignItems="center">
                <Button
                    bgColor={
                        section === "Not recommended" ? "white" : "transparent"
                    }
                    borderRadius={30}
                    w={"50%"}
                    h={50}
                    onPress={() => onPressButton("Not recommended")}>
                    <ButtonText
                        color={
                            section === "Not recommended"
                                ? "$red500"
                                : "$trueGray500"
                        }
                        fontWeight="$extrabold">
                        주의하세요
                    </ButtonText>
                </Button>

                <Button
                    bgColor={
                        section === "Recommended" ? "white" : "transparent"
                    }
                    borderRadius={30}
                    w={"50%"}
                    h={50}
                    onPress={() => onPressButton("Recommended")}>
                    <ButtonText
                        color={
                            section === "Recommended"
                                ? "$blue500"
                                : "$trueGray500"
                        }
                        fontWeight="$extrabold">
                        추천해요
                    </ButtonText>
                </Button>
            </HStack>

            <Box
                w={"90%"}
                p={15}
                bgColor="$trueGray100"
                alignSelf="center"
                my={20}
                borderRadius={20}>
                <Text color="black" fontWeight="$bold">
                    상단에{" "}
                    <Text color="blue" fontWeight="$bold">
                        추천해요
                    </Text>{" "}
                    /{" "}
                    <Text color="red" fontWeight="$bold">
                        주의하세요
                    </Text>{" "}
                    버튼을 클릭하여 홍길동님께 필요하고, 불필요한 영양제를
                    확인해보세요.
                </Text>
            </Box>

            <ScrollView
                showsVerticalScrollIndicator={false}
                ref={scrollViewRef}>
                {section === "Not recommended" ? (
                    <NotRecommendScreen />
                ) : (
                    <RecommendScreen />
                )}
                <Box h={400} />
            </ScrollView>
        </SafeAreaView>
    );
}
