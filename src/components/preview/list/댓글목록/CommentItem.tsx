import React from "react";
import {Box, HStack, Heading, VStack} from "@gluestack-ui/themed";
import {ICommentItem} from "./type";

export default function CommentItem({sender, timesAgo}: ICommentItem) {
    return (
        <HStack
            w={"$full"}
            px={15}
            py={20}
            space="md"
            borderBottomColor="$trueGray400"
            borderBottomWidth={0.5}>
            <Box
                w={80}
                h={80}
                borderRadius={"$full"}
                bgColor="$trueGray200"
                alignItems="center"
                justifyContent="center">
                <Heading color="$trueGray500">Image</Heading>
            </Box>

            <VStack justifyContent="center">
                <Heading size="sm">Instead of me</Heading>
                <Heading size="sm" color="$trueGray400">
                    {sender}님께서 메세지를 보냈습니다.
                </Heading>
                <Heading size="xs" color="$trueGray400" mt={10}>
                    {timesAgo}
                </Heading>
            </VStack>
        </HStack>
    );
}
