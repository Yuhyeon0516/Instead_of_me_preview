import {SafeAreaView, ScrollView} from "react-native";
import React from "react";
import Header from "../common/Header";
import {IAnnouncementItem} from "./type";
import AnnouncementItem from "./AnnouncementItem";

const announcementList: IAnnouncementItem[] = [
    {
        title: "배송 안내",
        description:
            "IOM 물류사 사정으로 인해 택배가 지연되고있습니다. 고객님들께 정말 죄송한 마음이며 최대한 빨리 배송 될 수 있도록하겠습니다.",
        type: "안내사항",
        date: "2023-12-19",
    },
    {
        title: "앱 업데이트 안내",
        description:
            "앱 버젼이 1.0.0 => 1.0.1로 업데이트되었습니다. 앱스토어에서 업데이트 후 사용 부탁드립니다.",
        type: "공지사항",
        date: "2023-12-17",
    },
    {
        title: "IOM 물류사 제휴",
        description:
            "현재 저희 회사는 IOM 물류사와 택배 제휴가 되어있는 상태입니다. 특이사항없도록 밀착하여 모니터링하겠습니다.",
        type: "안내사항",
        date: "2023-12-15",
    },
];

export default function Announcement() {
    return (
        <SafeAreaView>
            <ScrollView stickyHeaderIndices={[0]}>
                <Header title="공지사항" />
                {announcementList.length > 0 &&
                    announcementList.map((item, index) => (
                        <AnnouncementItem
                            key={index}
                            type={item.type}
                            title={item.title}
                            description={item.description}
                            date={item.date}
                        />
                    ))}
            </ScrollView>
        </SafeAreaView>
    );
}
