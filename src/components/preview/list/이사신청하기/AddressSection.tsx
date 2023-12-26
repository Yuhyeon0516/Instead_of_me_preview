import {
    Button,
    ButtonText,
    HStack,
    Heading,
    Input,
    InputField,
    VStack,
} from "@gluestack-ui/themed";
import React from "react";

export default function AddressSection() {
    return (
        <VStack>
            <Heading color="black" size="xl">
                출발지에 대해
            </Heading>
            <Heading color="black" size="xl">
                알려주세요
            </Heading>

            <VStack mt={10} space="md">
                <HStack w={"$full"} space="sm">
                    <Input flex={2} h={60} size="lg">
                        <InputField placeholder="우편번호" />
                    </Input>

                    <Button h={60} size="lg" flex={1}>
                        <ButtonText>주소검색</ButtonText>
                    </Button>
                </HStack>

                <Input h={60} size="lg">
                    <InputField placeholder="기본주소" />
                </Input>

                <Input h={60} size="lg">
                    <InputField placeholder="상세주소" />
                </Input>
            </VStack>
        </VStack>
    );
}
