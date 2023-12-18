import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
} from "react-native";
import React, {useState} from "react";
import Header from "../common/Header";
import Profile from "./Profile";
import Post from "./Post";
import HorizontalDivider from "../common/HorizontalDivider";
import Comment from "./Comment";
import {
    ChevronRightIcon,
    Input,
    InputField,
    InputIcon,
    InputSlot,
    Pressable,
} from "@gluestack-ui/themed";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {IComment} from "./type";

export default function PostDetail() {
    const safeAreaInset = useSafeAreaInsets();
    const [textInput, setTextInput] = useState("");
    const [commentList, setCommentList] = useState<IComment[]>([
        {
            nickname: "nickname",
            comment: "돈가스 맛있죠..! 저는 내일 쫄면 먹으려구요",
        },
    ]);

    function onPressSend() {
        if (!textInput) return;
        Keyboard.dismiss();
        setCommentList(prev => [
            {nickname: "nickname2", comment: textInput},
            ...prev,
        ]);
        setTextInput("");
    }

    return (
        <SafeAreaView
            style={{
                flex: 1,
                position: "relative",
                zIndex: 1,
            }}>
            <Header title="게시물" />
            <Profile />
            <HorizontalDivider />
            <Post />
            <HorizontalDivider />
            <Comment commentList={commentList} />
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{
                    position: "absolute",
                    bottom: 0 + safeAreaInset.bottom,
                    width: "100%",
                    backgroundColor: "white",
                }}>
                <Input>
                    <InputField
                        placeholder="댓글을 남겨주세요."
                        enterKeyHint="done"
                        value={textInput}
                        onChangeText={setTextInput}
                        onSubmitEditing={onPressSend}
                    />
                    <InputSlot>
                        <Pressable
                            w={30}
                            h={30}
                            bgColor="$blue400"
                            borderRadius={"$full"}
                            mr={10}
                            alignItems="center"
                            justifyContent="center"
                            onPress={onPressSend}>
                            <InputIcon
                                as={ChevronRightIcon}
                                color="white"
                                size="md"
                            />
                        </Pressable>
                    </InputSlot>
                </Input>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
