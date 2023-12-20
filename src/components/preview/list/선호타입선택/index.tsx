import React, {useState} from "react";
import {SafeAreaView, ScrollView} from "react-native";
import Header from "../common/Header";
import {
    Button,
    ButtonText,
    Center,
    HStack,
    Heading,
    Icon,
    RadioGroup,
    Text,
    VStack,
} from "@gluestack-ui/themed";
import FavoriteTypeItem from "./FavoriteTypeItem";
import {AlertCircle} from "lucide-react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";

export default function SelectFavoriteType() {
    const [selectedIndex, setSelectedIndex] = useState<string | null>(null);
    const safeAreaInsets = useSafeAreaInsets();

    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView stickyHeaderIndices={[0]}>
                <Header title="선호 타입 선택" />
                <Center py={50}>
                    <Heading size="lg">선호하는 타입을 선택해주세요.</Heading>
                </Center>
                <RadioGroup onChange={setSelectedIndex}>
                    <VStack space="lg" alignItems="center">
                        <FavoriteTypeItem
                            title="신생아/유아 풀타임 교육"
                            descriptions={[
                                "- 보통 주 5일(평일) 하루 8~10시간 교육",
                                "- 맞벌이 부부에게 추천",
                            ]}
                            selectedIndex={selectedIndex}
                            index="0"
                        />
                        <FavoriteTypeItem
                            title="초등학교 과정 선행 학습"
                            descriptions={[
                                "- 하루 2시간으로 초등학교 과정 선행학습",
                                "- 자녀의 교육에 열정이 있으신 부모님께 추천",
                            ]}
                            selectedIndex={selectedIndex}
                            index="1"
                        />
                        <FavoriteTypeItem
                            title="등하원 교육"
                            descriptions={[
                                "- 등하원까지 모두 책임지는 교육",
                                "- 맞벌이 부부에게 추천",
                                "- 06~22시 원하는 시간에 등하원이 가능",
                            ]}
                            selectedIndex={selectedIndex}
                            index="2"
                        />
                    </VStack>
                </RadioGroup>
                <HStack my={30} pl={15} pr={40}>
                    <Icon as={AlertCircle} size="xl" color="$trueGray400" />
                    <Text ml={10}>
                        선호 타입을 변경하시면, 선택하신 정보에 맞게 개인 정보가
                        수정됩니다.
                    </Text>
                </HStack>
            </ScrollView>
            <Button
                variant="solid"
                size="xl"
                position="absolute"
                bottom={0}
                pb={safeAreaInsets.bottom}
                h={80}
                w={"$full"}>
                <ButtonText>다음</ButtonText>
            </Button>
        </SafeAreaView>
    );
}
