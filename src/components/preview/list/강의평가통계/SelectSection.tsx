import React from "react";
import {HStack, Heading, VStack} from "@gluestack-ui/themed";
import SubjectNameSelect from "./SubjectNameSelect";
import Expanded from "../common/Expanded";
import ProfessorNameSelect from "./ProfessorNameSelect";

export default function SelectSection() {
    return (
        <VStack
            borderWidth={1}
            borderColor="$trueGray300"
            p={20}
            borderRadius={10}
            gap={30}>
            <HStack gap={20} alignItems="center">
                <Heading color="$trueGray500" size="md">
                    과목명
                </Heading>
                <SubjectNameSelect />
                <Expanded />
            </HStack>
            <HStack gap={20} alignItems="center">
                <Heading color="$trueGray500" size="md">
                    교수명
                </Heading>
                <ProfessorNameSelect />
                <Expanded />
            </HStack>
        </VStack>
    );
}
