import {IPreviewItem} from "../types/type";
import 강의실 from "../components/preview/list/강의실";
import 강의평가 from "../components/preview/list/강의평가";

export const PreviewList: IPreviewItem[] = [
    {
        id: 1,
        title: "강의실",
        image: require("../assets/preview/강의실.png"),
        component: 강의실,
    },
    {
        id: 2,
        title: "강의평가",
        image: require("../assets/preview/강의평가.png"),
        component: 강의평가,
    },
    {
        id: 3,
        title: "강의평가통계",
        image: require("../assets/preview/강의평가통계.png"),
    },
    {
        id: 4,
        title: "강의평등록",
        image: require("../assets/preview/강의평등록.png"),
    },
    {
        id: 5,
        title: "개인정보보호방침",
        image: require("../assets/preview/개인정보보호방침.png"),
    },
    {
        id: 6,
        title: "건강챌린지",
        image: require("../assets/preview/건강챌린지.png"),
    },
    {
        id: 7,
        title: "건의하기",
        image: require("../assets/preview/건의하기.png"),
    },
    {
        id: 8,
        title: "게시물",
        image: require("../assets/preview/게시물.png"),
    },
    {
        id: 9,
        title: "결제상품선택",
        image: require("../assets/preview/결제상품선택.png"),
    },
    {
        id: 10,
        title: "계좌번호등록",
        image: require("../assets/preview/계좌번호등록.png"),
    },
    {
        id: 11,
        title: "고객센터",
        image: require("../assets/preview/고객센터.png"),
    },
    {
        id: 12,
        title: "글쓰기",
        image: require("../assets/preview/글쓰기.png"),
    },
];
