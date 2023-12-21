import {SafeAreaView} from "react-native";
import React, {useState} from "react";
import Header from "../common/Header";
import {
    Box,
    Button,
    ButtonText,
    HStack,
    Heading,
    Icon,
    Input,
    InputField,
    VStack,
} from "@gluestack-ui/themed";
import {ChevronRight} from "lucide-react-native";

export default function SimpleLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <SafeAreaView>
            <Header title="로그인" />

            <VStack space="md" p={20}>
                <Box gap={5}>
                    <Heading>이메일</Heading>
                    <Input
                        size="lg"
                        alignItems={email.length ? "flex-start" : "center"}>
                        <InputField
                            keyboardType="email-address"
                            placeholder="이메일을 입력하세요."
                            value={email}
                            onChangeText={setEmail}
                        />
                    </Input>
                </Box>
                <Box gap={5}>
                    <Heading>비밀번호</Heading>
                    <Input
                        size="lg"
                        alignItems={password.length ? "flex-start" : "center"}>
                        <InputField
                            secureTextEntry
                            placeholder="비밀번호를 입력하세요."
                            value={password}
                            onChangeText={setPassword}
                        />
                    </Input>
                </Box>

                <Button size="xl">
                    <ButtonText>로그인</ButtonText>
                </Button>

                <HStack alignItems="center">
                    <Heading size="xs" color="$trueGray400" mr={5}>
                        비밀번호를 잃어버리셨나요?
                    </Heading>

                    <Icon as={ChevronRight} size="sm" color="$trueGray500" />
                </HStack>

                <Button variant="outline" size="xl">
                    <ButtonText>회원가입</ButtonText>
                </Button>
            </VStack>
        </SafeAreaView>
    );
}
