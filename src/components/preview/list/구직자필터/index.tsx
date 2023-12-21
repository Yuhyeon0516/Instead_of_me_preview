import React from "react";
import {SafeAreaView} from "react-native";
import Header from "../common/Header";
import Gender from "./Gender";
import Age from "./Age";
import EducationLevel from "./EducationLevel";
import {
    Button,
    ButtonText,
    CheckIcon,
    Checkbox,
    CheckboxIcon,
    CheckboxIndicator,
    CheckboxLabel,
    HStack,
    Heading,
    VStack,
} from "@gluestack-ui/themed";
import {useSafeAreaInsets} from "react-native-safe-area-context";

export default function JobSeekerFilter() {
    const safeAreaInsets = useSafeAreaInsets();

    return (
        <SafeAreaView style={{flex: 1, position: "relative"}}>
            <Header title="구직자 필터" />
            <VStack px={15} py={20} space="2xl">
                <Gender />
                <Age />
                <EducationLevel />

                <VStack space="md">
                    <Heading>기타</Heading>
                    <Checkbox size="md" value="check" aria-label="1">
                        <CheckboxIndicator mr="$2">
                            <CheckboxIcon as={CheckIcon} />
                        </CheckboxIndicator>
                        <CheckboxLabel color="black" fontWeight="$bold">
                            최근에 제안했던 구직자도 볼래요.
                        </CheckboxLabel>
                    </Checkbox>
                </VStack>
            </VStack>

            <HStack
                px={15}
                position="absolute"
                bottom={safeAreaInsets.bottom - 250}
                w={"$full"}
                space="sm">
                <Button variant="outline" size="xl" flex={1}>
                    <ButtonText>초기화</ButtonText>
                </Button>

                <Button size="xl" flex={1}>
                    <ButtonText>적용하기</ButtonText>
                </Button>
            </HStack>
        </SafeAreaView>
    );
}
