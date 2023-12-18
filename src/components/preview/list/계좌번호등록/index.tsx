import {SafeAreaView} from "react-native";
// import {KeyboardAvoidingView, Platform} from "react-native"
import React from "react";
import Header from "../common/Header";
import VerticalSpacer from "../common/VerticalSpacer";
import {
    Button,
    ButtonText,
    HStack,
    Heading,
    Input,
    InputField,
    VStack,
} from "@gluestack-ui/themed";
import BankSelect from "./BankSelect";
import Expanded from "../common/Expanded";

export default function RegisterAccountNumber() {
    return (
        <SafeAreaView style={{flex: 1}}>
            <Header title="계좌번호 등록" />
            <VerticalSpacer height={30} />
            <VStack px={20} gap={3}>
                <Heading>예금주</Heading>
                <Input size="xl">
                    <InputField placeholder="예금주명을 입력해주세요" />
                </Input>
            </VStack>
            <VerticalSpacer height={20} />
            <HStack px={20} gap={5}>
                <VStack flex={1} gap={3}>
                    <Heading>은행 선택</Heading>
                    <BankSelect />
                </VStack>
                <VStack flex={2} gap={3}>
                    <Heading>계좌 번호</Heading>
                    <Input size="xl">
                        <InputField
                            placeholder="-없이 입력"
                            keyboardType="number-pad"
                        />
                    </Input>
                </VStack>
            </HStack>

            <Expanded />

            {/* <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <Button size="xl"> */}
            <Button size="xl" mt={30}>
                <ButtonText>확인</ButtonText>
            </Button>
            {/* </KeyboardAvoidingView> */}
        </SafeAreaView>
    );
}
