import {Box, Heading} from "@gluestack-ui/themed";
import React from "react";
import {SafeAreaView} from "react-native";

export default function NoSelectMobileScreenComponent() {
    return (
        <SafeAreaView style={{height: 736, width: "100%"}}>
            <Box
                minHeight={736}
                w={"100%"}
                alignItems="center"
                justifyContent="center">
                <Heading size="2xl">Instead of me</Heading>
                <Heading size="xl">Preview System</Heading>
                <Heading>원하는 Preview를 선택해주세요.</Heading>
            </Box>
        </SafeAreaView>
    );
}
