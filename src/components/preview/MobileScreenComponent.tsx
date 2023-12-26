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
import 선호타입선택 from "./list/선호타입선택";
import 교육종류선택 from "./list/교육종류선택";
import 상품검색 from "./list/상품검색";
import 랭킹 from "./list/랭킹";
import 추천 from "./list/추천";
import 구인목록 from "./list/구인목록";
import 공고등록 from "./list/공고등록";
import 공고 from "./list/공고";
import 마이페이지 from "./list/마이페이지";
import 주요업무팝업 from "./list/주요업무팝업";
import 인재관리 from "./list/인재관리";
import 채팅 from "./list/채팅";
import 구직자프로필 from "./list/구직자프로필";
import 구직자프로필목록 from "./list/구직자프로필목록";
import 구직자필터 from "./list/구직자필터";
import 권한 from "./list/권한";
import 날짜선택 from "./list/날짜선택";
import 댓글목록 from "./list/댓글목록";
import 클래스신청 from "./list/클래스신청";
import 마켓정보 from "./list/마켓정보";
import 로그인 from "./list/로그인";
import 스플래쉬로딩 from "./list/스플래쉬로딩";
import 제품리뷰목록 from "./list/제품리뷰목록";
import 리뷰작성하기 from "./list/리뷰작성하기";
import 주문내역 from "./list/주문내역";
import 마이페이지2 from "./list/마이페이지2";
import 건강맞춤분석 from "./list/건강맞춤분석";
import 가게검색하기 from "./list/가게검색하기";
import 가게정보수정 from "./list/가게정보수정";
import 가게정보수정2 from "./list/가게정보수정2";
import 문의리스트 from "./list/문의리스트";
import 문의작성 from "./list/문의작성";
import 문의제출결과 from "./list/문의제출결과";
import 받은후기현황 from "./list/받은후기현황";
import 이사신청하기 from "./list/이사신청하기";
import 배달상점상세 from "./list/배달상점상세";
import 배달홈 from "./list/배달홈";
import 병원카테고리검색 from "./list/병원카테고리검색";

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
    ) : MS === 21 ? (
        <선호타입선택 />
    ) : MS === 22 ? (
        <교육종류선택 />
    ) : MS === 23 ? (
        <상품검색 />
    ) : MS === 24 ? (
        <랭킹 />
    ) : MS === 25 ? (
        <추천 />
    ) : MS === 26 ? (
        <구인목록 />
    ) : MS === 27 ? (
        <공고등록 />
    ) : MS === 28 ? (
        <공고 />
    ) : MS === 29 ? (
        <마이페이지 />
    ) : MS === 30 ? (
        <주요업무팝업 />
    ) : MS === 31 ? (
        <인재관리 />
    ) : MS === 32 ? (
        <채팅 />
    ) : MS === 33 ? (
        <구직자프로필 />
    ) : MS === 34 ? (
        <구직자프로필목록 />
    ) : MS === 35 ? (
        <구직자필터 />
    ) : MS === 36 ? (
        <권한 />
    ) : MS === 37 ? (
        <날짜선택 />
    ) : MS === 38 ? (
        <댓글목록 />
    ) : MS === 39 ? (
        <클래스신청 />
    ) : MS === 40 ? (
        <마켓정보 />
    ) : MS === 41 ? (
        <로그인 />
    ) : MS === 42 ? (
        <스플래쉬로딩 />
    ) : MS === 43 ? (
        <제품리뷰목록 />
    ) : MS === 44 ? (
        <리뷰작성하기 />
    ) : MS === 45 ? (
        <주문내역 />
    ) : MS === 46 ? (
        <마이페이지2 />
    ) : MS === 47 ? (
        <건강맞춤분석 />
    ) : MS === 48 ? (
        <가게검색하기 />
    ) : MS === 49 ? (
        <가게정보수정 />
    ) : MS === 50 ? (
        <가게정보수정2 />
    ) : MS === 51 ? (
        <문의리스트 />
    ) : MS === 52 ? (
        <문의작성 />
    ) : MS === 53 ? (
        <문의제출결과 />
    ) : MS === 54 ? (
        <받은후기현황 />
    ) : MS === 55 ? (
        <이사신청하기 />
    ) : MS === 56 ? (
        <배달상점상세 />
    ) : MS === 57 ? (
        <배달홈 />
    ) : MS === 58 ? (
        <병원카테고리검색 />
    ) : (
        <></>
    );
}
