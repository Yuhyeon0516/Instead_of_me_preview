import React from "react";
import {SafeAreaView} from "react-native";
import Header from "../common/Header";
import {
    Box,
    HStack,
    Heading,
    Input,
    InputField,
    Text,
    VStack,
} from "@gluestack-ui/themed";
import {ILectureItem} from "./type";
import MyLectureItem from "./MyLectureItem";
// import AntDesign from "react-native-vector-icons/AntDesign";
import {AiOutlineExclamationCircle} from "react-icons/ai";

const lectureList: ILectureItem[] = [
    {
        num: "068",
        numBg: "$rose300",
        subjectName: "수학",
        professorName: "홍길동",
    },
    {
        num: "074",
        numBg: "$tertiary300",
        subjectName: "과학",
        professorName: "박혁거세",
    },
    {
        num: "080",
        numBg: "$violet300",
        subjectName: "영어",
        professorName: "김철수",
    },
];

export default function LectureRoom() {
    return (
        <SafeAreaView>
            <Header title="강의실" />
            <VStack p={20} gap={20}>
                <Input variant="outline" size="lg">
                    <InputField placeholder="과목명, 교수명으로 검색" />
                </Input>

                <VStack
                    borderWidth={1}
                    borderColor="$trueGray300"
                    p={20}
                    borderRadius={15}
                    gap={15}>
                    <Heading>내 강의</Heading>
                    {lectureList.map((lecture, index) => (
                        <MyLectureItem {...lecture} key={index} />
                    ))}
                </VStack>

                <HStack
                    borderWidth={1}
                    borderColor="$trueGray300"
                    p={20}
                    borderRadius={15}>
                    <Heading size="md" flex={1}>
                        내 포인트 현황
                    </Heading>
                    <Text color="$blue500" fontWeight="$extrabold">
                        55 포인트
                    </Text>
                </HStack>

                <VStack
                    backgroundColor="$trueGray100"
                    borderRadius={10}
                    p={20}
                    gap={20}>
                    <HStack gap={30} alignItems="center">
                        {/* <AntDesign
                            name="exclamationcircleo"
                            size={50}
                            color={"black"}
                        /> */}
                        <AiOutlineExclamationCircle
                            style={{color: "black", fontSize: 50}}
                        />
                        <VStack flex={1}>
                            <Text
                                color="black"
                                fontSize={18}
                                fontWeight="$bold">
                                지난 학기에 수강하신
                            </Text>
                            <Text
                                color="black"
                                fontSize={18}
                                fontWeight="$bold">
                                강의는 어땠나요?
                            </Text>
                        </VStack>
                    </HStack>
                    <Box alignSelf="center">
                        <Text fontSize={14} fontWeight="$bold">
                            강의평을 등록하고{" "}
                            <Text
                                color="$blue500"
                                fontSize={14}
                                fontWeight="$bold">
                                10포인트
                            </Text>
                            를 받아가세요.
                        </Text>
                    </Box>
                </VStack>
            </VStack>
        </SafeAreaView>
    );
}
