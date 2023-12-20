import React from "react";
import {
    Button,
    ButtonText,
    HStack,
    Heading,
    Icon,
    Text,
    VStack,
} from "@gluestack-ui/themed";
import {
    Calendar,
    CheckCircle,
    Clipboard,
    Clock3,
    DollarSign,
    Settings,
} from "lucide-react-native";
import IconText from "./IconText";

export default function NoticeItem() {
    return (
        <VStack
            mx={20}
            mt={10}
            borderWidth={1}
            borderColor="$trueGray400"
            borderRadius={5}
            overflow="hidden">
            <HStack
                w={"$full"}
                bgColor="$blue50"
                px={10}
                py={10}
                alignItems="center">
                <Heading color="$trueGray400" size="md" flex={1}>
                    2023.12.20 등록
                </Heading>

                <Icon as={Settings} color="$trueGray400" size="xl" mr={3} />
                <Heading color="$trueGray400" size="md">
                    공고 관리
                </Heading>
            </HStack>

            <VStack p={20} space="2xl">
                <HStack
                    p={10}
                    bgColor="$blue100"
                    gap={10}
                    w={160}
                    alignItems="center"
                    justifyContent="center"
                    borderRadius={10}>
                    <Icon as={CheckCircle} color="$blue600" />
                    <Text color="$blue600" fontWeight="$bold">
                        추천인재 보는 중
                    </Text>
                </HStack>

                <VStack space="sm">
                    <IconText icon={Clipboard} label="기타" />
                    <IconText icon={Calendar} label="주 1일 · 1개월 이상" />
                    <IconText icon={Clock3} label="14:00 ~ 18:00" />
                    <IconText icon={DollarSign} label="시급 15,000원" />
                </VStack>

                <HStack space="xl">
                    <Heading size="md" color="$trueGray400">
                        노출수 0
                    </Heading>
                    <Heading size="md" color="$trueGray400">
                        조회수 0
                    </Heading>
                </HStack>

                <Button size="xl">
                    <ButtonText>추천인재 보기</ButtonText>
                </Button>
            </VStack>
        </VStack>
    );
}
