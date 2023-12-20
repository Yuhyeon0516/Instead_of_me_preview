import React from "react";
import {MobileScreenState} from "../../global/recoil";
import {useRecoilValue} from "recoil";
import NoSelectMobileScreenComponent from "./NoSelectMobileScreenComponent";
import 강의실 from "./list/강의실";
import 강의평가 from "./list/강의평가";
import 강의평가통계 from "./list/강의평가통계";
import 강의평등록 from "./list/강의평등록";
import 개인정보보호방침 from "./list/개인정보보호방침";
import 건강챌린지 from "./list/건강챌린지";
import 건의하기 from "./list/건의하기";
import 게시물 from "./list/게시물";
import 결제상품선택 from "./list/결제상품선택";
import 계좌번호등록 from "./list/계좌번호등록";
import 고객센터 from "./list/고객센터";
import 글쓰기 from "./list/글쓰기";
import 공간예약 from "./list/공간예약";
import 공간찜목록 from "./list/공간찜목록";
import 공간필터 from "./list/공간필터";
import 공간홈 from "./list/공간홈";
import 공간예약결제 from "./list/공간예약결제";
import 공지사항 from "./list/공지사항";
import 이력추가 from "./list/이력추가";
import 관심선택팝업 from "./list/관심선택팝업";

export default function MobileScreenComponent() {
    const MS = useRecoilValue(MobileScreenState);

    return MS === 0 ? (
        <NoSelectMobileScreenComponent />
    ) : MS === 1 ? (
        <강의실 />
    ) : MS === 2 ? (
        <강의평가 />
    ) : MS === 3 ? (
        <강의평가통계 />
    ) : MS === 4 ? (
        <강의평등록 />
    ) : MS === 5 ? (
        <개인정보보호방침 />
    ) : MS === 6 ? (
        <건강챌린지 />
    ) : MS === 7 ? (
        <건의하기 />
    ) : MS === 8 ? (
        <게시물 />
    ) : MS === 9 ? (
        <결제상품선택 />
    ) : MS === 10 ? (
        <계좌번호등록 />
    ) : MS === 11 ? (
        <고객센터 />
    ) : MS === 12 ? (
        <글쓰기 />
    ) : MS === 13 ? (
        <공간예약 />
    ) : MS === 14 ? (
        <공간찜목록 />
    ) : MS === 15 ? (
        <공간필터 />
    ) : MS === 16 ? (
        <공간홈 />
    ) : MS === 17 ? (
        <공간예약결제 />
    ) : MS === 18 ? (
        <공지사항 />
    ) : MS === 19 ? (
        <이력추가 />
    ) : MS === 20 ? (
        <관심선택팝업 />
    ) : (
        <></>
    );
}
