import {Box, Heading, VStack} from "@gluestack-ui/themed";
import React from "react";
import SectionItem from "./SectionItem";
import {ISection} from "./type";
import VerticalSpacer from "../common/VerticalSpacer";

const sectionItemList: ISection[] = [
    {
        headerTitle: "서비스",
        sectionItemList: [
            {
                text: "문의하기",
            },
        ],
    },
    {
        headerTitle: "약관",
        sectionItemList: [
            {
                text: "공고 등록 제한 규정",
            },
            {
                text: "계정 이용 정지 규정",
            },
            {
                text: "이용약관",
            },
            {
                text: "개인정보 처리방침",
            },
            {
                text: "휴대폰 본인인증 서비스",
            },
        ],
    },
    {
        headerTitle: "앱 정보",
        sectionItemList: [
            {
                text: "앱 버젼: 1.0.0(v01)",
                showLabel: true,
                label: "업데이트 확인",
            },
            {
                text: "사업자 정보",
            },
        ],
    },
];

export default function Section() {
    return (
        <VStack p={20}>
            {sectionItemList.map((section, sectionIndex) => {
                return (
                    <>
                        <Box key={`box-${sectionIndex}`}>
                            <Heading size="md" color="$trueGray500" mb={10}>
                                {section.headerTitle}
                            </Heading>
                            <VStack pl={1}>
                                {section.sectionItemList.map(
                                    (sectionItem, itemIndex) => (
                                        <SectionItem
                                            key={`item-${itemIndex}`}
                                            text={sectionItem.text}
                                            showLabel={sectionItem.showLabel}
                                            label={sectionItem.label}
                                        />
                                    ),
                                )}
                            </VStack>
                        </Box>
                        <VerticalSpacer height={20} />
                    </>
                );
            })}
        </VStack>
    );
}
