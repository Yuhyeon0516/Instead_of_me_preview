import React from "react";
import {IComment} from "./type";
import {Heading, VStack} from "@gluestack-ui/themed";

interface ICommentItem {
    comment: IComment;
}

export default function CommentItem({comment}: ICommentItem) {
    return (
        <VStack px={10} py={20} space="sm">
            <Heading size="sm" color="$blue500">
                {comment.nickname}
            </Heading>
            <Heading size="xs">{comment.comment}</Heading>
        </VStack>
    );
}
