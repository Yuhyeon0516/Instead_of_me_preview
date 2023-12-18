import React from "react";
import {
    Box,
    Button,
    ButtonText,
    Input,
    InputField,
    Textarea,
    TextareaInput,
} from "@gluestack-ui/themed";

import Photo from "./Photo";

export default function TextInputBox() {
    return (
        <>
            <Box
                w={"100%"}
                h={500}
                backgroundColor="$trueGray100"
                position="relative">
                <Input variant="underlined" size="lg" px={15}>
                    <InputField
                        placeholder="게시글의 제목을 입력해주세요."
                        color="black"
                        fontWeight="$semibold"
                        fontSize={18}
                    />
                </Input>
                <Textarea size="lg" flex={1} px={3} py={10}>
                    <TextareaInput
                        placeholder="내용을 입력해주세요."
                        color="black"
                    />
                </Textarea>

                <Photo />
            </Box>
            <Button size="xl" mx={15} mt={20}>
                <ButtonText>게시글 올리기</ButtonText>
            </Button>
        </>
    );
}
