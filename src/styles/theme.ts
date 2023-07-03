import { css, CSSProp } from "styled-components";

// Font
const Font = {
    heading: {
        depth1: css`
            font-size: 3.2rem;
            line-height: 4.8rem;
        `,
        depth2: css`
            font-size: 2.8rem;
            line-height: 4.2rem;
        `,
    },
    title: css`
        font-size: 2.4rem;
        line-height: 3.6rem;
    `,
    subTitle: {
        depth1: css`
            font-size: 2rem;
            line-height: 3rem;
        `,
        depth2: css`
            font-size: 1.8rem;
            line-height: 2.6rem;
        `,
    },
    body: {
        depth1: css`
            font-size: 1.6rem;
            line-height: 2.4rem;
        `,
        depth2: css`
            font-size: 1.4rem;
            line-height: 2.2rem;
        `,
    },
    caption: {
        depth1: css`
            font-size: 1.2rem;
            line-height: 1.8rem;
        `,
        depth2: css`
            font-size: 1rem;
            line-height: 1.6rem;
        `,
    },
};

// Color
const Color = {
    white: "#ffffff",
    black: "#000000",
    primaryColor: {
        primary100: "#0740e4",
        primary90: "#2c5bea",
        primary80: "#4f75ef",
        primary70: "#7590f4",
        primary60: "#9ab0f6",
        primary50: "#b4c3f8",
        primary40: "#cdd7fa",
        primary30: "#e5ebfc",
        primary20: "#f5f8ff",
        primary10: "#fafbff",
    },
    secondaryColor: {
        secondary100: "#ff673e",
        secondary90: "#ff7b57",
        secondary80: "#ff9173",
        secondary70: "#ffa188",
        secondary60: "#ffa993",
        secondary50: "#ffbcaa",
        secondary40: "#ffcdc1",
        secondary30: "#ffe3dd",
        secondary20: "#fff3f0",
        secondary10: "#fefbfb",
    },
    greenColor: {
        green100: "#83b100",
        green90: "#9ec236",
        green80: "#aaca4e",
        green70: "#b8d36c",
        green60: "#c3da82",
        green50: "#cee099",
        green40: "#d9e8b1",
        green30: "#e4efc8",
        green20: "#f4f9e9",
        green10: "#fbfdf7",
    },
    grayColor: {
        gray100: "#101010",
        gray90: "#3c3c3c",
        gray80: "#555555",
        gray70: "#707070",
        gray60: "#939393",
        gray50: "#a7a7a7",
        gray40: "#c2c2c2",
        gray30: "#d9d9d9",
        gray20: "#ededed",
        gray10: "#f8f8f8",
    },
};
const OpacityColor = {
    whiteOpacity: {
        op100: css`
            color: ${Color.white};
            opacity: 1;
        `,
        op90: css`
            color: ${Color.white};
            opacity: 0.9;
        `,
        op80: css`
            color: ${Color.white};
            opacity: 0.8;
        `,
        op70: css`
            color: ${Color.white};
            opacity: 0.7;
        `,
        op60: css`
            color: ${Color.white};
            opacity: 0.6;
        `,
        op50: css`
            color: ${Color.white};
            opacity: 0.5;
        `,
        op40: css`
            color: ${Color.white};
            opacity: 0.4;
        `,
        op30: css`
            color: ${Color.white};
            opacity: 0.3;
        `,
        op20: css`
            color: ${Color.white};
            opacity: 0.2;
        `,
        op10: css`
            color: ${Color.white};
            opacity: 0.1;
        `,
    },
    blackOpacity: {
        op100: css`
            color: ${Color.black};
            opacity: 1;
        `,
        op90: css`
            color: ${Color.black};
            opacity: 0.9;
        `,
        op80: css`
            color: ${Color.black};
            opacity: 0.8;
        `,
        op70: css`
            color: ${Color.black};
            opacity: 0.7;
        `,
        op60: css`
            color: ${Color.black};
            opacity: 0.6;
        `,
        op50: css`
            color: ${Color.black};
            opacity: 0.5;
        `,
        op40: css`
            color: ${Color.black};
            opacity: 0.4;
        `,
        op30: css`
            color: ${Color.black};
            opacity: 0.3;
        `,
        op20: css`
            color: ${Color.black};
            opacity: 0.2;
        `,
        op10: css`
            color: ${Color.black};
            opacity: 0.1;
        `,
    },
};
const ButtonSizes = {
    tiny: css`
        font-size: 1.2rem;
        padding: 0rem 0.8rem;
        height: 3.2rem;
    `,
    xsmall: css`
        font-size: 1.4rem;
        padding: 0rem 0.8rem;
        height: 3.8rem;
    `,
    small: css`
        font-size: 1.4rem;
        padding: 0rem 1.6rem;
        height: 4.6rem;
    `,
    medium: css`
        font-size: 1.6rem;
        padding: 0rem 1.6rem;
        height: 5.2rem;
    `,
    large: css`
        font-size: 1.6rem;
        padding: 0rem 1.6rem;
        height: 5.6rem;
    `,
    xlarge: css`
        font-size: 1.8rem;
        padding: 0rem 1.6rem;
        height: 6rem;
    `,
};

const ButtonVariants = {
    soildBlue: css`
        color: #ffffff;
        background-color: ${Color.primaryColor.primary100};
        &:active {
            color: #ffffff;
            background-color: ${Color.primaryColor.primary90};
        }
        &:disabled {
            pointer-events: none;
            color: #ffffff;
            background-color: ${Color.grayColor.gray20};
        }
    `,
    soildBlack: css`
        color: #ffffff;
        background-color: ${Color.grayColor.gray100};
        &:active {
            color: #ffffff;
            background-color: ${Color.grayColor.gray80};
        }
        &:disabled {
            pointer-events: none;
            color: #ffffff;
            background-color: ${Color.grayColor.gray20};
        }
    `,
    soildWhiteBlue: css`
        color: ${Color.primaryColor.primary100};
        background-color: #ffffff;
        &:active {
            color: ${Color.primaryColor.primary80};
            background-color: ${Color.grayColor.gray20};
        }
        &:disabled {
            pointer-events: none;
            color: ${Color.primaryColor.primary100};
            background-color: ${Color.grayColor.gray20};
        }
    `,
    soildWhiteBlack: css`
        color: ${Color.grayColor.gray100};
        background-color: #ffffff;
        &:active {
            color: ${Color.grayColor.gray80};
            background-color: ${Color.grayColor.gray20};
        }
        &:disabled {
            pointer-events: none;
            color: ${Color.grayColor.gray100};
            background-color: ${Color.grayColor.gray20};
        }
    `,
    outlineBlue: css`
        color: ${Color.primaryColor.primary100};
        background-color: ${Color.primaryColor.primary10};
        border: ${Color.primaryColor.primary30} 1px solid;
        &:active {
            color: ${Color.grayColor.gray50};
            background-color: #ffffff;
            border: ${Color.grayColor.gray10} 1px solid;
        }
        &:disabled {
            pointer-events: none;
            color: #ffffff;
            background-color: ${Color.grayColor.gray20};
        }
    `,
    outlinewhite: css`
        color: ${Color.grayColor.gray70};
        background-color: #ffffff;
        border: ${Color.grayColor.gray20} 1px solid;
        &:active {
            color: ${Color.primaryColor.primary70};
            background-color: ${Color.primaryColor.primary10};
            border: ${Color.primaryColor.primary20} 1px solid;
        }
        &:disabled {
            pointer-events: none;
            color: #ffffff;
            background-color: ${Color.grayColor.gray20};
        }
    `,
};

// 반응형
const sizes: { [key: string]: number } = {
    mobile: 320,
    tablet: 768,
    desktop: 1200,
};

type BackQuoteArgs = string[];

interface Media {
    mobile: (...args: BackQuoteArgs) => CSSProp | undefined;
    tablet: (...args: BackQuoteArgs) => CSSProp | undefined;
    desktop: (...args: BackQuoteArgs) => CSSProp | undefined;
}

const media: Media = {
    mobile: (...args: BackQuoteArgs) => undefined,
    tablet: (...args: BackQuoteArgs) => undefined,
    desktop: (...args: BackQuoteArgs) => undefined,
};

Object.keys(sizes).reduce((acc: Media, label: string) => {
    switch (label) {
        case "desktop":
            acc.desktop = (...args: BackQuoteArgs) =>
                css`
                    @media only screen and (min-width: ${sizes.desktop}px) {
                        ${args}
                    }
                `;
            break;
        case "tablet":
            acc.tablet = (...args: BackQuoteArgs) =>
                css`
                    @media only screen and (max-width: ${sizes.desktop}px) and (min-width: ${sizes.tablet}px) {
                        ${args}
                    }
                `;
            break;
        case "mobile":
            acc.mobile = (...args: BackQuoteArgs) =>
                css`
                    @media only screen and (max-width: ${sizes.tablet}px) {
                        ${args}
                    }
                `;
            break;
        default:
            break;
    }
    return acc;
}, media);

const theme = { Font, Color, OpacityColor, ButtonSizes, ButtonVariants, media };

export default theme;
