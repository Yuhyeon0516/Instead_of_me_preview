import {Text, Textarea, TextareaInput, VStack} from "@gluestack-ui/themed";
import React, {useState} from "react";

export default function TextArea() {
    const [text, setText] = useState("");

    return (
        <VStack px={20} space="md" alignItems="flex-end">
            <Textarea h={150}>
                <TextareaInput
                    value={text}
                    onChangeText={setText}
                    placeholder="(선택) 상세 내용을 입력해주세요."
                    keyboardType="web-search"
                />
            </Textarea>

            <Text>
                <Text color="black" fontWeight="$bold">
                    {text.length}
                </Text>
                /500
            </Text>
        </VStack>
    );
}
