import React from "react";
import {FlatList, SafeAreaView, ScrollView} from "react-native";
import SearchHeader from "../common/SearchHeader";
import {HStack, Heading, VStack} from "@gluestack-ui/themed";
import ButtonGroup from "./ButtonGroup";
import {ISpaceItem, ISpaceReviewItem} from "./type";
import SpaceItem from "./SpaceItem";
import HorizontalSpacer from "../common/HorizontalSpacer";
import SpaceReviewItem from "./SpaceReviewItem";

const spaceList: ISpaceItem[] = [
    {
        location: "안산시",
        title: "IOM 파티룸",
        score: "4.9",
    },
    {
        location: "화성시",
        title: "IOM 댄스 연습실",
        score: "5.0",
    },
    {
        location: "수원시",
        title: "IOM 녹음실",
        score: "4.7",
    },
];

const spaceReviewList: ISpaceReviewItem[] = [
    {
        title: "IOM 파티룸",
        location: "안산시",
        type: "파티룸",
        score: "5.0",
        description:
            "친구들과 정말 재밌게 연말파티 잘 마무리했습니다. 좋은 공간 대여해주셔서 감사합니다!",
    },
    {
        title: "IOM 댄스 연습실",
        location: "화성시",
        type: "댄스 연습실",
        score: "4.5",
        description:
            "저희 댄스팀이 이용하려고 예약했었고 잘 이용했습니다. 그러나 생각보다 좁았네요..",
    },
    {
        title: "IOM 녹음실",
        location: "수원시",
        type: "녹음실",
        score: "3.0",
        description:
            "먼지가 너무 많아서 노래부르기가 생각보다 어려웠어요. 시설을 좋습니다.",
    },
];

export default function SpaceHome() {
    return (
        <SafeAreaView>
            <ScrollView stickyHeaderIndices={[0]}>
                <SearchHeader placeHolder="검색어를 입력하세요." />
                <VStack space="md" bgColor="$trueGray100">
                    <VStack space="lg" bgColor="white" px={15} py={20}>
                        <HStack alignItems="flex-end">
                            <Heading flex={1}>
                                예약할 공간을 찾고 있나요?
                            </Heading>
                            <Heading size="sm" color="$trueGray400">
                                전체보기
                            </Heading>
                        </HStack>

                        <ButtonGroup />

                        <FlatList
                            data={spaceList}
                            renderItem={({item}) => <SpaceItem item={item} />}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            ItemSeparatorComponent={() => (
                                <HorizontalSpacer width={10} />
                            )}
                        />
                    </VStack>

                    <VStack px={15} py={30} space="lg">
                        <Heading>유저들의 생생한 공간 리뷰</Heading>
                        <FlatList
                            data={spaceReviewList}
                            renderItem={({item}) => (
                                <SpaceReviewItem item={item} />
                            )}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            ItemSeparatorComponent={() => (
                                <HorizontalSpacer width={10} />
                            )}
                        />
                    </VStack>
                </VStack>
            </ScrollView>
        </SafeAreaView>
    );
}
