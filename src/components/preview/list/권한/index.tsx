import {SafeAreaView} from "react-native";
import React from "react";
import {
    Button,
    ButtonText,
    Divider,
    Heading,
    VStack,
} from "@gluestack-ui/themed";
import {Bell, Download, MapPin, Phone, ShieldCheck} from "lucide-react-native";
import IconText from "./IconText";
import {useSafeAreaInsets} from "react-native-safe-area-context";

export default function Permission() {
    const safeAreaInsets = useSafeAreaInsets();

    return (
        <SafeAreaView style={{flex: 1, position: "relative"}}>
            <VStack
                w={"$full"}
                h={150}
                alignItems="center"
                justifyContent="center"
                space="xl">
                <ShieldCheck size={40} color="black" />
                <Heading size="xl">앱 이용 권한 안내</Heading>
            </VStack>
            <Divider mt={20} />
            <VStack px={30} py={20} space="4xl">
                <IconText
                    icon={MapPin}
                    title="위치 정보"
                    description="주변 지역 정보 제공"
                />
                <IconText
                    icon={Bell}
                    title="알림"
                    description="이벤트 및 공지사항 푸시 알림 전송"
                />
                <IconText
                    icon={Download}
                    title="사진 / 파일 저장"
                    description="이미지 첨부 및 파일 다운로드 기능"
                />
                <IconText
                    icon={Phone}
                    title="전화"
                    description="통화 기능 제공"
                />
            </VStack>

            <Button
                size="xl"
                w={"$full"}
                h={80}
                position="absolute"
                bottom={0 - 230}
                pb={safeAreaInsets.bottom}>
                <ButtonText>시작하기</ButtonText>
            </Button>
        </SafeAreaView>
    );
}
