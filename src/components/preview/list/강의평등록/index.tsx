import {SafeAreaView} from "react-native";
import React, {useState} from "react";
import Header from "../common/Header";
import {
    Box,
    Button,
    ButtonText,
    Divider,
    Heading,
    Text,
    Textarea,
    TextareaInput,
    VStack,
} from "@gluestack-ui/themed";
import SelectStar from "./SelectStar";
import SelectTime from "./SelectTime";
import ButtonGroup from "./ButtonGroup";

export default function CreateReview() {
    const [reviewText, setReviewText] = useState("");

    return (
        <SafeAreaView>
            <Header title="강의평 등록" />
            <Box px={20} py={30} gap={20}>
                <SelectStar />
                <Textarea h={200} px={5} py={10}>
                    <TextareaInput
                        textContentType="none"
                        role="none"
                        placeholder="이 강의에 대한 총평을 작성해주세요."
                        value={reviewText}
                        onChangeText={setReviewText}
                    />
                </Textarea>
                <Divider my={15} />
                <Heading size="sm">언제 수강했나요?</Heading>
                <SelectTime />
                <Heading size="sm">과제가 많은가요?</Heading>
                <ButtonGroup />
                <Heading size="sm">조모임이 많은가요?</Heading>
                <ButtonGroup />
                <VStack>
                    <Text color="$trueGray400">
                        ※ 강의평을 등록하시면{" "}
                        <Text color="$red600">10포인트</Text>가 적립됩니다.
                    </Text>
                    <Text color="$trueGray400">
                        ※ <Text color="$red600">수정 및 삭제가 불가능</Text>
                        하므로 신중히 작성해주세요.
                    </Text>
                </VStack>
                <Button size="xl">
                    <ButtonText>평가하기</ButtonText>
                </Button>
            </Box>
        </SafeAreaView>
    );
}
