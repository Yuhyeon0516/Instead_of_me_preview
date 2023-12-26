import {SafeAreaView} from "react-native";
import React from "react";
import {
    Box,
    Button,
    ButtonText,
    Center,
    Heading,
    Text,
} from "@gluestack-ui/themed";
import {CheckIcon} from "lucide-react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";

export default function InquirySubmissionReflected() {
    const safeAreaInsets = useSafeAreaInsets();

    return (
        <SafeAreaView style={{height: 738}}>
            <Center flex={1}>
                <Box
                    p={10}
                    borderRadius={"$full"}
                    bgColor="$trueGray100"
                    alignItems="center"
                    justifyContent="center">
                    <CheckIcon size={50} />
                </Box>

                <Heading my={20}>1:1 문의가 제출되었습니다.</Heading>

                <Text>제출하신 문의를 최대한 빠르게 답변드리겠습니다.</Text>
            </Center>

            <Button
                size="xl"
                h={80}
                pb={safeAreaInsets.bottom}
                bottom={0 - safeAreaInsets.bottom}>
                <ButtonText>확인</ButtonText>
            </Button>
        </SafeAreaView>
    );
}
