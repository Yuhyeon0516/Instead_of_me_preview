export interface ISectionItem {
    title: string;
    buttons: string[];
}

export interface IButtonItem {
    title: string;
    isSelected: boolean;
    onPressButton: () => void;
}
