import React from "react";
import { observer } from "mobx-react";
import {
    Typography,
    Button as MaterialButton,
    TextField,
    RadioGroup,
    FormControlLabel,
    Radio,
    FormControl,
    FormLabel,
    makeStyles,
    Theme
} from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";

import { DialogBase } from "./DialogBase";
import { Button } from "components";
import { useStores } from "stores/useStore";
import { PlusIcon } from "icons";
import truncateText from "utils/truncateText";

const useStyles = makeStyles((theme: Theme) => ({
    uploadFile: {
        display: "flex",
        alignItems: "center",
        marginBottom: 28,
        [theme.breakpoints.down("xs")]: {
            display: "block"
        }
    },
    uploadFileCaption: {
        marginBottom: 8
    },
    uploadFileButton: {
        marginRight: 16,
        [theme.breakpoints.down("xs")]: {
            marginBottom: 8,
            marginRight: 0
        }
    },
    formInput: {
        marginBottom: 8
    },
    submitButton: {
        display: "block",
        marginLeft: "auto"
    },
    fileInfo: {
        marginBottom: 28
    },
    analysisDate: {
        marginBottom: 28
    },
    analysisDateLabel: {
        marginBottom: 10
    }
}));

export const DialogAddAnalysis: React.FC = observer(() => {
    const classes = useStyles();
    const { modalsStore } = useStores();
    const { getModalIsOpen, setModalIsOpen } = modalsStore;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        console.log("submit");
    };

    const handleClose = (): void => {
        setModalIsOpen("add-analysis", false);
    };

    const handleFileAttachment = (files: any): void => {
        if (files && files.length !== 0) {
            // setFile(files[0]);
            console.log(files[0]);
        }
    };

    const handleDateChange = (date: any): void => {
        // setFormValue("date", date);
        // getFreeDoctorTime(date);
    };

    return (
        <DialogBase
            isOpen={getModalIsOpen("add-analysis")}
            title="Загрузка анализов"
            icon={<PlusIcon />}
            paperWidth={536}
            onClose={handleClose}
        >
            <form onSubmit={handleSubmit}>
                <Typography
                    className={classes.uploadFileCaption}
                    variant="h5"
                    color="textSecondary"
                >
                    Допустимые форматы: jpeg, png, txt,pdf
                </Typography>
                <div className={classes.uploadFile}>
                    <label htmlFor="analysis-file">
                        <MaterialButton
                            className={classes.uploadFileButton}
                            variant="outlined"
                            color="primary"
                            component="span"
                        >
                            Выбрать файл
                        </MaterialButton>
                    </label>
                    <input
                        id="analysis-file"
                        type="file"
                        accept="image/png, image/jpg, image/jpeg, text/plain, application/pdf"
                        onChange={event => handleFileAttachment(event.target.files)}
                        hidden
                    />
                    <Typography variant="body1" color="textSecondary">
                        {"jdfgdfjgjdfg.txt"
                            ? truncateText("jdfgdfjgjdfg.txt")
                            : "Файл не выбран"}
                    </Typography>
                </div>
                <div className={classes.fileInfo}>
                    <TextField
                        className={classes.formInput}
                        variant="outlined"
                        color="secondary"
                        placeholder="Название анализа / снимка"
                        fullWidth
                    />
                    <RadioGroup
                        // value={signUpForm.userType}
                        // onChange={event =>
                        //     setFormValue("userType", event.target.value)
                        // }
                        aria-label="Тип загружаемого файла"
                        row
                    >
                        <FormControlLabel
                            value="patient"
                            control={<Radio color="secondary" />}
                            label={
                                <Typography variant="body1" color="textSecondary">
                                    Анализы
                                </Typography>
                            }
                        />
                        <FormControlLabel
                            value="doctor"
                            control={<Radio color="secondary" />}
                            label={
                                <Typography variant="body1" color="textSecondary">
                                    Снимки
                                </Typography>
                            }
                        />
                    </RadioGroup>
                </div>
                <div className={classes.analysisDate}>
                    <FormControl component="fieldset" fullWidth>
                        <FormLabel
                            className={classes.analysisDateLabel}
                            component="legend"
                        >
                            Дата сдачи анализа
                        </FormLabel>
                        <KeyboardDatePicker
                            variant="inline"
                            inputVariant="outlined"
                            color="secondary"
                            placeholder="Не выбрана"
                            format="dd/MM/yyyy"
                            value={new Date()}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                "aria-label": "Изменение даты сдачи анализа"
                            }}
                            invalidDateMessage="Неверный формат даты"
                            minDateMessage="Неверный формат даты"
                            maxDateMessage="Неверный формат даты"
                            disableToolbar
                            disableFuture
                            autoOk
                        />
                    </FormControl>
                </div>
                <Button
                    className={classes.submitButton}
                    type="submit"
                    variant="contained"
                    color="primary"
                >
                    Загрузить
                </Button>
            </form>
        </DialogBase>
    );
});
