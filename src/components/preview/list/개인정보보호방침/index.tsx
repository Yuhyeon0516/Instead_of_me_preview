import {Box, Divider} from "@gluestack-ui/themed";
import React from "react";
import {FlatList, SafeAreaView} from "react-native";
import Header from "../common/Header";
import Item from "./Item";
import {IPolicy} from "./type";
import VerticalSpacer from "../common/VerticalSpacer";

const policyList: IPolicy[] = [
    {
        title: "수집하는 개인정보 항목",
        description:
            "성명, 생년월일, 성별, 주소, 전화번호, 이메일 주소, 서비스 이용기록, 기기 정보(디바이스 ID, 쿠키, 광고 식별자 등), 위치 정보 등의 개인정보를 수집합니다.",
    },
    {
        title: "개인정보 수집 및 이용 목적",
        description:
            "서비스 제공, 계정 관리, 고객 지원 및 문의 응답, 이벤트 참가 및 당첨 안내, 신규 서비스 및 기능 안내, 마케팅 및 광고 목적으로 개인정보를 수집하고 이용합니다.",
    },
    {
        title: "수집방법",
        description:
            "웹사이트 및 애플리케이션을 통한 가입 및 서비스 이용 시 자동 수집, 이벤트 참가, 고객 문의를 통한 수동 수집 등의 방법으로 개인정보를 수집합니다.",
    },
    {
        title: "보유 및 이용기간",
        description:
            "서비스 이용계약이 종료되거나 회원 탈퇴 요청이 있을 때까지 개인정보를 보유하며, 법령에서 정한 기간 동안 필요한 경우에 한하여 개인정보를 이용합니다.",
    },
    {
        title: "개인정보 제3자 제공",
        description:
            "회원의 동의가 있는 경우, 협력사 및 파트너사와 개인정보를 공유할 수 있습니다. 또한, 법률적 의무의 이행, 서비스 제공을 위해 필요한 경우에 한해 개인정보를 제3자에게 제공할 수 있습니다.",
    },
    {
        title: "개인정보의 보안조치",
        description:
            "개인정보를 보호하기 위해 접근 제어, 암호화, 보안 소프트웨어를 이용하며, 내부 교육 및 감사를 통해 보안 수준을 유지합니다.",
    },
    {
        title: "사용자의 권리 및 선택",
        description:
            "사용자는 언제든지 자신의 개인정보를 열람하고 수정할 수 있으며, 개인정보 수집 및 이용에 대한 동의 철회가 가능합니다.",
    },
    {
        title: "쿠키 및 유사 기술 사용",
        description:
            "쿠키를 통해 사용자 경험을 개선하고 서비스 제공에 활용하며, 사용자는 브라우저 설정을 통해 쿠키의 수락 여부를 선택할 수 있습니다.",
    },
    {
        title: "변경된 개인정보보호방침 공지",
        description:
            "개인정보보호방침이 변경될 경우, 웹사이트 또는 애플리케이션을 통해 사전에 공지하고 변경된 내용을 제공합니다.",
    },
    {
        title: "연락처 정보",
        description:
            "개인정보와 관련된 문의 또는 민원은 아래 연락처로 문의할 수 있습니다. 이메일: privacy@example.com, 고객센터 전화번호: 123-456-7890",
    },
];

export default function PrivacyPolicy() {
    return (
        <SafeAreaView>
            <Box>
                <Header title="개인정보 보호방침" />
                <Box p={20}>
                    <FlatList
                        data={policyList}
                        renderItem={({item, index}) => (
                            <Item item={item} index={index + 1} />
                        )}
                        ItemSeparatorComponent={Divider}
                        ListFooterComponent={() => (
                            <VerticalSpacer height={150} />
                        )}
                        showsVerticalScrollIndicator={false}
                    />
                </Box>
            </Box>
        </SafeAreaView>
    );
}
