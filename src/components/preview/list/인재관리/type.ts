export interface ITopTab {
    selectedIndex: number;
    onPressTabItem: (index: number) => void;
}

export interface ITopTabItem {
    title: string;
    isSelected: boolean;
    onPressTabItem: () => void;
}

export interface IWishListItem {
    name: string;
    age: number;
    gender: string;
    location: string;
    education: string;
    career: string;
}
