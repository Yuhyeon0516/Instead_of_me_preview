import React from "react";

export interface ICategoryItem {
    title: string;
}

export interface IPreviewItem {
    id: number;
    title: string;
    image: any;
    component?: () => React.JSX.Element;
}
