import React from "react";
import {MobileScreenState} from "../../global/recoil";
import {useRecoilValue} from "recoil";
import NoSelectMobileScreenComponent from "./NoSelectMobileScreenComponent";
import 강의실 from "./list/강의실";
import 강의평가 from "./list/강의평가";

export default function MobileScreenComponent() {
    const MS = useRecoilValue(MobileScreenState);

    return MS === 0 ? (
        <NoSelectMobileScreenComponent />
    ) : MS === 1 ? (
        <강의실 />
    ) : MS === 2 ? (
        <강의평가 />
    ) : (
        <></>
    );
}
