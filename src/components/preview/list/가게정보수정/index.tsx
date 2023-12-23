import {SafeAreaView, ScrollView} from "react-native";
import React, {useState} from "react";
import Header from "../common/Header";
import {
    Box,
    Button,
    ButtonText,
    Divider,
    Heading,
    Icon,
    Image,
    Pressable,
    VStack,
} from "@gluestack-ui/themed";
import CheckBoxItem from "./CheckBoxItem";
// import {launchImageLibrary} from "react-native-image-picker";
import {ImageIcon} from "lucide-react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import TextArea from "./TextArea";

export default function ModifyMarketInformation() {
    const safeAreaInsets = useSafeAreaInsets();
    const [photo, setPhoto] = useState<string | null>(null);

    async function onPressImage() {
        setPhoto("");
        // const result = await launchImageLibrary({
        //     mediaType: "photo",
        // });

        // if (!result.didCancel) {
        //     setPhoto(result.assets?.[0].uri as string);
        // }
    }

    return (
        <SafeAreaView style={{flex: 1, position: "relative"}}>
            <ScrollView
                stickyHeaderIndices={[0]}
                showsVerticalScrollIndicator={false}>
                <Header title="가게 정보 수정" />
                <VStack p={20} space="md">
                    <Heading size="md">수정 항목</Heading>
                    <Heading size="sm" color="$trueGray500">
                        잘못되었거나 수정이 필요한 정보를 모두 선택해주세요.
                    </Heading>
                </VStack>

                <VStack space="2xl" my={20} px={20}>
                    <CheckBoxItem label="가게가 폐점했어요." />
                    <CheckBoxItem label="가게 이름이 잘못되었어요." />
                    <CheckBoxItem label="가게 주소가 잘못되었어요." />
                    <CheckBoxItem label="가게 전화번호가 잘못되었어요." />
                    <CheckBoxItem label="가게 위치가 잘못되었어요." />
                    <CheckBoxItem label="가게 영업일 정보가 잘못되었어요." />
                </VStack>

                <Divider my={20} />

                <TextArea />

                <Box px={20}>
                    {photo ? (
                        <Pressable
                            w={100}
                            h={100}
                            borderRadius={10}
                            bgColor="$trueGray200"
                            alignItems="center"
                            justifyContent="center"
                            onPress={onPressImage}
                            overflow="hidden">
                            <Image
                                source={{uri: photo}}
                                w={"$full"}
                                h={"$full"}
                                objectFit="fill"
                                alt="image"
                            />
                        </Pressable>
                    ) : (
                        <Pressable
                            w={100}
                            h={100}
                            borderRadius={10}
                            bgColor="$trueGray200"
                            alignItems="center"
                            justifyContent="center"
                            onPress={onPressImage}>
                            <Icon
                                as={ImageIcon}
                                size="lg"
                                color="$trueGray600"
                            />
                        </Pressable>
                    )}
                </Box>

                <Box h={100} />
            </ScrollView>
            <Button
                w={"$full"}
                h={80}
                pb={safeAreaInsets.bottom}
                size="xl"
                bottom={0}
                position="absolute">
                <ButtonText>등록하기</ButtonText>
            </Button>
        </SafeAreaView>
    );
}
