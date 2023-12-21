import React from "react";
import {Heading, RadioGroup, VStack} from "@gluestack-ui/themed";
import ScheduleItem from "./ScheduleItem";

export default function SelectSchedule() {
    return (
        <VStack px={15} py={30} space="md">
            <Heading>희망 스케쥴 선택 (필수)</Heading>
            <RadioGroup>
                <VStack space="md">
                    <ScheduleItem label="원데이 클래스로 수강할래요." />
                    <ScheduleItem label="정기적으로 클래스를 듣고싶어요." />
                    <ScheduleItem label="상담 후 결정할게요." />
                </VStack>
            </RadioGroup>
        </VStack>
    );
}
