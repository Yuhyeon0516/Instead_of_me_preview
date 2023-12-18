import React, {useState} from "react";
import {Camera} from "lucide-react-native";
// import {launchImageLibrary} from "react-native-image-picker";
import {
    Box,
    Button,
    ButtonIcon,
    ButtonText,
    HStack,
    Image,
} from "@gluestack-ui/themed";

export default function Photo() {
    const [photoResults, setPhotoResults] = useState<string[]>([]);
    async function onPressPhoto() {
        // const result = await launchImageLibrary({
        //     mediaType: "photo",
        // });

        // if (!result.didCancel) {
        //     setPhotoResults(prev => [
        //         ...prev,
        //         result.assets?.[0].uri as string,
        //     ]);
        // }
        setPhotoResults(prev => [...prev]);
    }

    return (
        <>
            <HStack space="sm" position="absolute" left={15} bottom={15}>
                {photoResults.length > 0 &&
                    photoResults.map((photoUri, index) => {
                        return (
                            <Box
                                position="relative"
                                key={index}
                                w={50}
                                h={50}
                                overflow="hidden">
                                <Image
                                    source={{uri: photoUri}}
                                    objectFit="cover"
                                    alt={`image-${index}`}
                                />
                            </Box>
                        );
                    })}
            </HStack>
            <Button
                backgroundColor="$trueGray600"
                position="absolute"
                borderRadius={40}
                bottom={15}
                right={15}
                onPress={onPressPhoto}
                gap={10}>
                <ButtonIcon as={Camera} />
                {photoResults.length === 0 && (
                    <ButtonText>사진 첨부하기</ButtonText>
                )}
            </Button>
        </>
    );
}
