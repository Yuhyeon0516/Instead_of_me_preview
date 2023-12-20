import {SafeAreaView} from "react-native";
import React from "react";
import SearchHeader from "../common/SearchHeader";
import {
    Box,
    Button,
    ButtonText,
    HStack,
    Heading,
    Icon,
    Text,
    VStack,
} from "@gluestack-ui/themed";
import {AlertCircle} from "lucide-react-native";
import RecentSearchItem from "./RecentSearchItem";
// import {useSafeAreaInsets} from "react-native-safe-area-context";
import FavoriteProductItem from "./FavoriteProductItem";

export default function SearchProduct() {
    // const safeAreaInsets = useSafeAreaInsets();

    return (
        <Box flex={1} position="relative">
            <SafeAreaView style={{flex: 1}}>
                <SearchHeader placeHolder="검색어를 입력하세요." />
                <VStack space="md" p={30}>
                    <HStack space="md" alignItems="center">
                        <Icon as={AlertCircle} color="$blue600" size="xl" />
                        <Heading color="$blue600" size="md">
                            Tip
                        </Heading>
                    </HStack>
                    <Box p={20} bgColor="$blue200" borderRadius={20}>
                        <Text color="$blue600">
                            검색어 알림 등록 시, 관련 제품이 등록되면 알림을
                            보내드려요.
                        </Text>
                    </Box>
                </VStack>

                <VStack space="xl" px={30} py={10} mt={20}>
                    <Heading>최근에 검색하셨어요</Heading>

                    <HStack space="sm">
                        <RecentSearchItem label="플레이 스테이션" />
                        <RecentSearchItem label="당근" />
                        <RecentSearchItem label="비타민" />
                    </HStack>
                </VStack>

                <VStack space="xl" px={30} py={10} mt={30}>
                    <Heading>내 관심 제품</Heading>
                    <HStack space="lg">
                        <FavoriteProductItem title="일렉 기타" />
                        <FavoriteProductItem title="XBox" />
                    </HStack>
                </VStack>
                {/* web용 */}
                <Button size="xl" h={80} w={"$full"}>
                    <ButtonText>다음</ButtonText>
                </Button>
                {/* web용 */}
            </SafeAreaView>
            {/* <Button
                size="xl"
                position="absolute"
                bottom={0}
                pb={safeAreaInsets.bottom}
                h={80}
                w={"$full"}>
                <ButtonText>다음</ButtonText>
            </Button> */}
        </Box>
    );
}
