export enum Colors {
    Amber200 = '#FFE082',
    Amber500 = '#FFC107',
    Amber700 = '#FFA000',
    Black = '#000000',
    Blue200 = '#90CAF9',
    Blue500 = '#2196F3',
    Blue700 = '#1976D2',
    Blue900 = '#132742',
    Cyan200 = '#80DEEA',
    Cyan500 = '#00BCD4',
    Cyan700 = '#0097A7',
    DarkGrey = '#333333',
    Green200 = '#A5D6A7',
    Green500 = '#4CAF50',
    Green700 = '#388E3C',
    Grey100 = '#F5F5F5',
    Grey200 = '#EEEEEE',
    Grey300 = '#E0E0E0',
    Grey400 = '#BDBDBD',
    Grey500 = '#999999',
    Grey600 = '#757575',
    Grey700 = '#5c5c5c',
    Grey800 = '#424242',
    Grey900 = '#393939',
    LightGreen200 = '#C5E1A5',
    LightGreen500 = '#8BC34A',
    LightGreen700 = '#689F38',
    Orange200 = '#FFCC80',
    Orange500 = '#FF9800',
    Orange700 = '#F57C00',
    Pink200 = '#F48FB1',
    Pink500 = '#E91E63',
    Pink700 = '#C2185B',
    Purple200 = '#CE93D8',
    Purple500 = '#9C27B0',
    Purple700 = '#7B1FA2',
    Red200 = '#EF9A9A',
    Red500 = '#F44336',
    Red700 = '#D32F2F',
    Teal = '#00D0B9',
    Transparent = 'transparent',
    White = '#FFFFFF',
}

export enum TextColors {
    Default = '#5C5C5C',
    LightGrey = '#EEEEEE',
}

export enum GlobalSizes {
    Unit = 10,
}

export enum ColorSchemeName {
    Error = 'error',
    Monochrome = 'monochrome',
    MonochromeWhite = 'monochromeWhite',
    Primary = 'primary',
    Secondary = 'secondary',
    Success = 'success',
    Tertiary = 'tertiary',
    Warning = 'warning',
}

export const ErrorStateColors = {
    Main: Colors.Red700,
    Accent: Colors.White,
};

export const PrimaryStateColors = {
    Main: Colors.Blue700,
    Accent: Colors.White,
};

export const SecondaryStateColors = {
    Main: Colors.Grey400,
    Accent: Colors.Black,
};

export const SuccessStateColors = {
    Main: Colors.Green500,
    Accent: Colors.White,
};

export const TertiaryStateColors = {
    Main: Colors.Grey500,
    Accent: Colors.White,
};

export const WarningStateColors = {
    Main: Colors.Amber700,
    Accent: Colors.Black,
};

export const Monochrome = {
    Main: Colors.Grey700,
    Accent: Colors.White,
};

export const MonochromeWhite = {
    Main: Colors.White,
    Accent: Colors.Grey700,
};

export const PrimaryTheme = {
    Primary: Colors.Teal,
    Seconday: Colors.White,
    PrimaryButton: PrimaryStateColors.Main,
    PrimaryButtonText: TextColors.LightGrey,
    PrimaryButtonHover: Colors.Blue500,
    PrimaryButtonActive: Colors.Grey100,
    SecondaryButton: PrimaryStateColors.Accent,
    PrimaryText: TextColors.Default,
    SecondaryText: Colors.Teal,
};
