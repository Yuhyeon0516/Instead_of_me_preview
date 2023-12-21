import React from "react";
import {SafeAreaView} from "react-native";
import Header from "../common/Header";
import ChatItem from "./ChatItem";

export default function Chatting() {
    return (
        <SafeAreaView>
            <Header title="채팅" />
            <ChatItem
                name="홍길동"
                time="방금"
                company="Instead of me"
                description="주신 제안에 관심이 있어 연락드렸습니다."
                chatCount={3}
            />
            <ChatItem
                name="짱구"
                time="3분 전"
                company="Instead of me"
                description="아쉽지만 주신 제안의 업무가 저와는 맞지 않은것같습니다. 죄송합니다."
                chatCount={1}
            />
            <ChatItem
                name="철수"
                time="12시간 전"
                company="Instead of me"
                description="면접을 보고십습니다."
                chatCount={4}
            />
        </SafeAreaView>
    );
}
