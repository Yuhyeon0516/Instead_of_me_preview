import {Pressable} from "@gluestack-ui/themed";
import React from "react";
import {TiPlus} from "react-icons/ti";
import {useSetRecoilState} from "recoil";
import {ShowSelectPreviewModalState} from "../../global/recoil";

export default function AddPreview() {
    const setShowModal = useSetRecoilState(ShowSelectPreviewModalState);

    return (
        <Pressable
            w={"80%"}
            h={250}
            borderWidth={1}
            borderColor="$trueGray300"
            borderRadius={20}
            alignSelf="center"
            px={"10%"}
            my={30}
            alignItems="center"
            justifyContent="center"
            $hover={{transform: "scale(1.05)"}}
            sx={{
                _web: {
                    transition: "all 0.2s linear",
                },
            }}
            onPress={() => setShowModal(true)}>
            <TiPlus style={{fontSize: 60, color: "#d4d4d4"}} />
        </Pressable>
    );
}
