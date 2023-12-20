// import React, {useState} from "react";
import React from "react";
import {SafeAreaView, ScrollView} from "react-native";
import Header from "../common/Header";
import {
    Button,
    ButtonText,
    CheckIcon,
    Checkbox,
    // CheckboxGroup,
    CheckboxIcon,
    CheckboxIndicator,
    CheckboxLabel,
    Divider,
    HStack,
    Heading,
    Input,
    InputField,
    VStack,
    Text,
} from "@gluestack-ui/themed";
import WorkButtonGroup from "./WorkButtonGroup";
import EmploymentPeriodRadio from "./EmploymentPeriodRadio";
import SelectDay from "./SelectDay";
import Time from "./Time";

export default function RegisterNotice() {
    // const [values, setValues] = useState<string[]>([]);

    return (
        <SafeAreaView>
            <ScrollView stickyHeaderIndices={[0]}>
                <Header title="공고 등록" />

                <VStack px={20} py={30} space="md">
                    <Heading size="md">근무지</Heading>
                    <Input size="lg">
                        <InputField placeholder="근무지를 입력해주세요." />
                    </Input>

                    <Heading size="md" mt={10}>
                        주요업무
                    </Heading>
                    <WorkButtonGroup />
                </VStack>

                <Divider h={10} />

                <VStack px={20} py={30} space="3xl">
                    <EmploymentPeriodRadio />
                    <SelectDay />
                    <Time />
                </VStack>

                <Divider h={10} />

                <VStack px={20} py={30} space="md">
                    <Heading size="md">급여</Heading>
                    <HStack alignItems="center" space="md">
                        <Input size="lg" flex={1}>
                            <InputField
                                placeholder="시간당 급여를 입력해주세요."
                                keyboardType="number-pad"
                            />
                        </Input>
                        <Heading>원</Heading>
                    </HStack>
                    <VStack>
                        {/* <CheckboxGroup
                            value={values}
                            onChange={keys => {
                                setValues(keys);
                            }}> */}
                        <Checkbox size="md" value="check" aria-label="1">
                            <CheckboxIndicator mr="$2">
                                <CheckboxIcon as={CheckIcon} />
                            </CheckboxIndicator>
                            <CheckboxLabel color="black" fontWeight="$bold">
                                협의가능
                            </CheckboxLabel>
                        </Checkbox>
                        {/* </CheckboxGroup> */}
                        <Text fontSize={14} color="$trueGray500">
                            최저시급은 9,160원 입니다.
                        </Text>
                    </VStack>
                </VStack>

                <Button size="xl">
                    <ButtonText>등록하기</ButtonText>
                </Button>
            </ScrollView>
        </SafeAreaView>
    );
}
