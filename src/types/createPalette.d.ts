import {
    Palette,
    PaletteOptions,
    TypeBackground
} from "@material-ui/core/styles/createPalette";

declare module "@material-ui/core/styles/createPalette" {
    interface Palette {
        border?: Palette["primary"];
    }

    interface PaletteOptions {
        border?: PaletteOptions["primary"];
    }

    interface TypeBackground {
        dark?: string;
        blue?: string;
    }
}
