import {Box, Pressable, Text} from "@gluestack-ui/themed";
import React from "react";
// import MaterialIcons from "react-native-vector-icons/MaterialIcons"; // App으로 구현할때는 react-native-vector-icons를 사용해야함
import {MdArrowBack} from "react-icons/md"; // Web구현용으로 react-icons사용

interface IHeader {
    title: string;
}

export default function Header({title}: IHeader) {
    function onPressBackButton() {
        console.log("press");
    }

    return (
        <Box
            backgroundColor="white"
            justifyContent="center"
            h={50}
            w={"100%"}
            px={10}
            position="relative"
            borderBottomColor="$warmGray300"
            borderBottomWidth={0.5}>
            <Pressable
                onPress={onPressBackButton}
                w={50}
                h={50}
                alignItems="center"
                justifyContent="center">
                {/* <MaterialIcons name="arrow-back" color={"black"} size={30} /> */}
                <MdArrowBack style={{color: "black", fontSize: 30}} />
            </Pressable>
            <Text
                position={"absolute"}
                fontSize={18}
                alignSelf={"center"}
                color="black"
                fontWeight={"$extrabold"}>
                {title}
            </Text>
        </Box>
    );
}
