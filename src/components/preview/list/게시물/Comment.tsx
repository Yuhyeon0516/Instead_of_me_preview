import {Box, VStack} from "@gluestack-ui/themed";
import React from "react";
import {IComment} from "./type";
import CommentItem from "./CommentItem";
import {ScrollView} from "react-native";
import HorizontalDivider from "../common/HorizontalDivider";
import VerticalSpacer from "../common/VerticalSpacer";

interface ICommentComponent {
    commentList: IComment[];
}

export default function Comment({commentList}: ICommentComponent) {
    return (
        <VStack>
            <ScrollView style={{width: "100%"}}>
                {commentList.length > 0 &&
                    commentList.map((comment, index) => {
                        return (
                            <Box key={`comment-${index}`}>
                                <CommentItem comment={comment} />
                                <HorizontalDivider />
                            </Box>
                        );
                    })}
                <VerticalSpacer height={200} />
            </ScrollView>
        </VStack>
    );
}
