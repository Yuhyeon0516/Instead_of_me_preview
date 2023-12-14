import {atom} from "recoil";

export const CategoryState = atom({
    default: "",
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
