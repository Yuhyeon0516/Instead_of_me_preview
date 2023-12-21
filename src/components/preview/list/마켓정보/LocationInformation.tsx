import React from "react";
import {
    Button,
    ButtonText,
    Divider,
    HStack,
    Heading,
    Icon,
    Image,
    Text,
    VStack,
} from "@gluestack-ui/themed";
import {ChevronRight, Copy} from "lucide-react-native";

export default function LocationInformation() {
    return (
        <VStack>
            <Heading size="md" mx={20} my={30}>
                위치정보
            </Heading>

            <Image
                source={require("./assets/map.png")}
                alt="map"
                w={"100%"}
                h={200}
            />

            <HStack px={20} py={30} alignItems="center">
                <Heading size="sm" flex={1}>
                    서울특별시 용산구 한강대로 405 서울역
                </Heading>

                <Icon as={Copy} color="$trueGray500" mr={5} size="sm" />
                <Text color="$trueGray500">복사</Text>
            </HStack>

            <Divider />

            <Button
                variant="outline"
                borderColor="$trueGray400"
                mx={20}
                my={15}
                size="lg">
                <ButtonText color="$trueGray600">길찾기</ButtonText>

                <Icon
                    as={ChevronRight}
                    color="$trueGray600"
                    position="absolute"
                    right={10}
                />
            </Button>

            <Divider />

            <VStack p={20} space="md">
                <Heading size="md">주차 안내</Heading>
                <Text fontSize={14} color="$trueGray500">
                    주차는 최대 4대까지 가능하며, 주차장 만차 시 외부
                    유료주차장을 이용해주시길 부탁드립니다.
                </Text>
            </VStack>
        </VStack>
    );
}
