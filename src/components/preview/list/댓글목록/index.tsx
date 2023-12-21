import {SafeAreaView} from "react-native";
import React from "react";
import Header from "../common/Header";
import CommentItem from "./CommentItem";

export default function CommentList() {
    return (
        <SafeAreaView>
            <Header title="댓글" />
            <CommentItem sender="홍길동" timesAgo="1일 전" />
            <CommentItem sender="짱구" timesAgo="3일 전" />
            <CommentItem sender="철수" timesAgo="5일 전" />
            <CommentItem sender="유리" timesAgo="12일 전" />
        </SafeAreaView>
    );
}
