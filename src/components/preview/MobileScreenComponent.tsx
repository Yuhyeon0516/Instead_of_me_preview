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
    ) : (
        <></>
    );
}
