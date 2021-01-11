import {
    Palette,
    PaletteOptions,
    TypeBackground
} from "@material-ui/core/styles/createPalette";

declare module "@material-ui/core/styles/createPalette" {
    interface Palette {
        other?: Palette["primary"];
    }

    interface PaletteOptions {
        other?: PaletteOptions["primary"];
    }

    interface TypeBackground {
        dark?: string;
        blue?: string;
    }
}
