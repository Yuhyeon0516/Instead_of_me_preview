import {atom} from "recoil";
import {PreviewList} from "./constant";
import {IPreviewItem} from "../types/type";

export const CategoryState = atom({
    default: "App",
    key: "Category",
});

export const ShowSelectPreviewModalState = atom({
    default: false,
    key: "ShowSelectPreviewModalState",
});

export const ShowDetailPreviewModalState = atom({
    default: false,
    key: "ShowDetailPreviewModalState",
});

export const SelectPreviewIdState = atom({
    default: 0,
    key: "SelectPreviewIdState",
});

export const SelectedPreviewState = atom<number[]>({
    default: [],
    key: "SelectedPreviewState",
});

export const MobileScreenState = atom({
    default: 0,
    key: "MobileScreenState",
});

export const PreviewListState = atom<IPreviewItem[]>({
    default: PreviewList,
    key: "PreviewListState",
});
