import {SafeAreaView} from "react-native";
import React, {useState} from "react";
import Header from "../common/Header";
import {
    Button,
    ButtonText,
    Heading,
    Icon,
    Image,
    Pressable,
    Textarea,
    TextareaInput,
    VStack,
} from "@gluestack-ui/themed";
import {Camera} from "lucide-react-native";
// import {launchImageLibrary} from "react-native-image-picker";

export default function WriteInquiry() {
    const [photo, setPhoto] = useState<string | null>(null);

    async function onPressImage() {
        // const result = await launchImageLibrary({
        //     mediaType: "photo",
        // });

        // if (!result.didCancel) {
        //     setPhoto(result.assets?.[0].uri as string);
        // }
        setPhoto("");
    }

    return (
        <SafeAreaView>
            <Header title="1:1 문의 작성" />

            <VStack px={20} py={25} space="lg">
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
                        borderWidth={1}
                        borderColor="$trueGray500"
                        bgColor="white"
                        alignItems="center"
                        justifyContent="center"
                        onPress={onPressImage}>
                        <Icon as={Camera} size="xl" color="$trueGray600" />
                    </Pressable>
                )}

                <VStack space="xs">
                    <Heading size="md">제목</Heading>
                    <Textarea h={150} size="md">
                        <TextareaInput placeholder="상세 내용을 작성해주세요." />
                    </Textarea>
                </VStack>

                <Button size="xl" mt={10}>
                    <ButtonText>작성 완료</ButtonText>
                </Button>
            </VStack>
        </SafeAreaView>
    );
}
