import {Heading, Image, Pressable, VStack} from "@gluestack-ui/themed";
import React from "react";
import {IPreviewItem} from "../../types/type";
import {useSetRecoilState} from "recoil";
import {
    SelectPreviewIdState,
    ShowDetailPreviewModalState,
} from "../../global/recoil";

export default function PreviewItem({id, title, image}: IPreviewItem) {
    const setShowDetailPreviewModal = useSetRecoilState(
        ShowDetailPreviewModalState,
    );
    const setSelectPreviewId = useSetRecoilState(SelectPreviewIdState);

    function onPressItem() {
        setShowDetailPreviewModal(true);
        setSelectPreviewId(id);
    }

    return (
        <Pressable
            $hover={{transform: "scale(1.05)"}}
            sx={{
                _web: {
                    transition: "all 0.2s linear",
                },
            }}
            onPress={onPressItem}>
            <VStack space="md" alignItems="center" p={10}>
                <Heading>{title}</Heading>
                <Image source={image} w={185} h={350} />
            </VStack>
        </Pressable>
    );
}
