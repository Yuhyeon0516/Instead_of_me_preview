import {SafeAreaView} from "react-native";
import React from "react";
import Header from "../common/Header";
import {
    Box,
    Button,
    ButtonText,
    Divider,
    HStack,
    Heading,
    Icon,
    VStack,
} from "@gluestack-ui/themed";
import ConfirmationRate from "./ConfirmationRate";
import {
    AlertCircle,
    Ban,
    Bell,
    BookOpenText,
    HelpCircle,
    Store,
    UserRound,
} from "lucide-react-native";
import LineItem from "./LineItem";

export default function MyPage() {
    return (
        <SafeAreaView>
            <Header title="마이페이지" />
            <VStack p={20}>
                <HStack space="md">
                    <Box
                        w={80}
                        h={80}
                        borderRadius={"$full"}
                        bgColor="$trueGray300"
                        alignItems="center"
                        justifyContent="center">
                        <Heading color="$trueGray600">Image</Heading>
                    </Box>
                    <VStack justifyContent="center">
                        <Heading>홍길동님</Heading>
                        <Heading size="sm" color="$trueGray400">
                            010-1234-5678
                        </Heading>
                    </VStack>
                </HStack>

                <HStack justifyContent="center" mt={30} space="4xl">
                    <ConfirmationRate title="지원서 확인율" percentage={32} />

                    <Divider orientation="vertical" />

                    <ConfirmationRate title="채팅 확인율" percentage={53} />
                </HStack>

                <Box
                    alignItems="center"
                    justifyContent="center"
                    bgColor="$blue100"
                    borderRadius={10}
                    py={10}
                    my={20}>
                    <Heading color="$blue400" size="sm">
                        고객님과의 첫 만남을 기다리고 있어요.
                    </Heading>
                </Box>

                <Button variant="link">
                    <ButtonText color="$trueGray400" mr={5}>
                        나의 활동 정보
                    </ButtonText>
                    <Icon as={AlertCircle} color="$trueGray400" size="lg" />
                </Button>
            </VStack>

            <Divider h={10} />

            <VStack px={30} py={10}>
                <LineItem icon={Store} title="스토어" />
                <LineItem icon={UserRound} title="계정" />
                <LineItem icon={Bell} title="푸시 알림 설정" />
                <LineItem icon={Ban} title="차단 이용자 관리" />
                <LineItem icon={BookOpenText} title="쿠폰 등록" />
                <LineItem icon={HelpCircle} title="고객센터" />
            </VStack>
        </SafeAreaView>
    );
}
