import {
    Heading,
    Modal,
    ModalBackdrop,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
} from "@gluestack-ui/themed";
import React from "react";
import {useRecoilState} from "recoil";
import {ShowSelectPreviewModalState} from "../../global/recoil";
import {IoMdClose} from "react-icons/io";
import PreviewItem from "./PreviewItem";
import {FlatList} from "react-native";
import {PreviewList} from "../../global/constant";

export default function SelectPreviewModal() {
    const [showModal, setShowModal] = useRecoilState(
        ShowSelectPreviewModalState,
    );

    return (
        <Modal
            size="lg"
            isOpen={showModal}
            onClose={() => {
                setShowModal(false);
            }}>
            <ModalBackdrop />
            <ModalContent>
                <ModalHeader>
                    <Heading size="lg">Preview 추가</Heading>
                    <ModalCloseButton>
                        <IoMdClose style={{fontSize: 30, color: "black"}} />
                    </ModalCloseButton>
                </ModalHeader>
                <ModalBody
                    pb={30}
                    pt={10}
                    h={500}
                    showsVerticalScrollIndicator={false}>
                    <FlatList
                        data={PreviewList}
                        numColumns={3}
                        renderItem={({item}) => (
                            <PreviewItem
                                id={item.id}
                                title={item.title}
                                image={item.image}
                            />
                        )}
                    />
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
