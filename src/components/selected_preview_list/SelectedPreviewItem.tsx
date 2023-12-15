import React from "react";
import {
    Button,
    ButtonIcon,
    CloseIcon,
    HStack,
    Heading,
    Image,
    Pressable,
    VStack,
} from "@gluestack-ui/themed";
import {PreviewList} from "../../global/constant";
import {useRecoilState, useSetRecoilState} from "recoil";
import {MobileScreenState, SelectedPreviewState} from "../../global/recoil";

export default function SelectedPreviewItem({
    id,
    index,
}: {
    id: number;
    index: number;
}) {
    const setSelectedPreview = useSetRecoilState(SelectedPreviewState);
    const [mobileScreen, setMobileScreen] = useRecoilState(MobileScreenState);

    function onPressDelete() {
        setSelectedPreview(prev => prev.filter(item => item !== id));
        if (mobileScreen === id) {
            setMobileScreen(0);
        }
    }

    function onPressItem() {
        setMobileScreen(id);
    }

    return (
        <VStack space="sm">
            <HStack px={20} justifyContent="space-between" alignItems="center">
                <Heading>{index + 1}</Heading>
                <Heading>{PreviewList[id - 1].title}</Heading>
                <Button
                    variant="link"
                    borderRadius="$full"
                    size="xl"
                    onPress={onPressDelete}>
                    <ButtonIcon as={CloseIcon} color="red" />
                </Button>
            </HStack>
            <Pressable
                w={"80%"}
                h={250}
                borderWidth={1}
                borderColor="$trueGray300"
                borderRadius={20}
                alignSelf="center"
                mb={20}
                alignItems="center"
                justifyContent="center"
                $hover={{transform: "scale(1.05)"}}
                overflow="hidden"
                sx={{
                    _web: {
                        transition: "all 0.2s linear",
                    },
                }}
                onPress={onPressItem}>
                <Image
                    source={PreviewList[id - 1].image}
                    w={"100%"}
                    h={"100%"}
                />
            </Pressable>
        </VStack>
    );
}
