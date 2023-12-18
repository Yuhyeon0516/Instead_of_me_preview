export interface ISectionItem {
    text: string;
    showLabel?: boolean;
    label?: string;
}

export interface ISection {
    headerTitle: string;
    sectionItemList: ISectionItem[];
}
