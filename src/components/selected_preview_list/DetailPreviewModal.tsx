import {
    Button,
    ButtonText,
    Center,
    Heading,
    Image,
    Modal,
    ModalBackdrop,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
} from "@gluestack-ui/themed";
import React from "react";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {
    SelectPreviewIdState,
    SelectedPreviewState,
    ShowDetailPreviewModalState,
    ShowSelectPreviewModalState,
} from "../../global/recoil";
import {IoMdClose} from "react-icons/io";
import {PreviewList} from "../../global/constant";

export default function DetailPreviewModal() {
    const [showModal, setShowModal] = useRecoilState(
        ShowDetailPreviewModalState,
    );
    const setSelectedPreviewState = useSetRecoilState(SelectedPreviewState);
    const setSelectPreviewModalState = useSetRecoilState(
        ShowSelectPreviewModalState,
    );
    const imageId = useRecoilValue(SelectPreviewIdState);

    function onPressAddButton() {
        setSelectedPreviewState(prev => [...prev, imageId]);
        setShowModal(false);
        setSelectPreviewModalState(false);
    }

    return imageId ? (
        <Modal
            size="lg"
            isOpen={showModal}
            onClose={() => {
                setShowModal(false);
            }}>
            <ModalBackdrop />
            <ModalContent>
                <ModalHeader>
                    <Heading size="lg">
                        {PreviewList[imageId - 1].title}
                    </Heading>
                    <ModalCloseButton>
                        <IoMdClose style={{fontSize: 30, color: "black"}} />
                    </ModalCloseButton>
                </ModalHeader>
                <ModalBody>
                    <Center>
                        <Image
                            w={370}
                            h={790}
                            source={PreviewList[imageId - 1].image}
                        />
                    </Center>
                </ModalBody>
                <ModalFooter>
                    <Button size="lg" onPress={onPressAddButton}>
                        <ButtonText>추가</ButtonText>
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    ) : (
        <></>
    );
}
