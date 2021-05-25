import { makeStyles } from "@material-ui/core";

export const useFormStyles = makeStyles(() => ({
    formGroup: {
        display: "block",
        padding: 0,
        margin: "0 0 36px",
        border: "none"
    },
    groupLabel: {
        marginBottom: 16,
        fontSize: 16,
        fontWeight: 500
    }
}));
