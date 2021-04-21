import {
    Palette,
    PaletteOptions,
    TypeBackground
} from "@material-ui/core/styles/createPalette";
import { MuiPickersOverrides } from "@material-ui/pickers/typings/overrides";

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

type overridesNameToClassKey = {
    [P in keyof MuiPickersOverrides]: keyof MuiPickersOverrides[P];
};

declare module "@material-ui/core/styles/overrides" {
    export interface ComponentNameToClassKey extends overridesNameToClassKey {}
}
