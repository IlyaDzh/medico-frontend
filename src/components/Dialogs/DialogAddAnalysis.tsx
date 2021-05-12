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
    FormHelperText,
    makeStyles,
    Theme
} from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";

import { DialogBase } from "./DialogBase";
import { Button, SubmissionResult } from "components";
import { useStores } from "stores/useStore";
import { AnalysisType } from "stores/interfaces/Dashboard";
import { truncateText } from "utils/truncateText";
import { PlusIcon } from "icons";

const useStyles = makeStyles((theme: Theme) => ({
    uploadFile: {
        marginBottom: 28
    },
    uploadFileInput: {
        display: "flex",
        alignItems: "center",
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
    const { modalsStore, dashboardAnalyzesStore } = useStores();
    const { getModalIsOpen, setModalIsOpen } = modalsStore;
    const {
        appendForm,
        appendFormErrors,
        appendPending,
        submissionError,
        setFormValue,
        appendAnalysis,
        resetForm
    } = dashboardAnalyzesStore;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        appendAnalysis();
    };

    const handleClose = (): void => {
        setModalIsOpen("add-analysis", false);
        resetForm();
    };

    const handleFileAttachment = (files: any): void => {
        if (files && files.length !== 0) {
            setFormValue("file", files[0]);
        }
    };

    const handleDateChange = (date: any): void => {
        setFormValue("analysisDeliveryDate", date);
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
                    <div className={classes.uploadFileInput}>
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
                            onChange={event =>
                                handleFileAttachment(event.target.files)
                            }
                            hidden
                        />
                        <Typography variant="body1" color="textSecondary">
                            {appendForm.file
                                ? truncateText(appendForm.file.name)
                                : "Файл не выбран"}
                        </Typography>
                    </div>
                    <FormHelperText error={Boolean(appendFormErrors.file)}>
                        {appendFormErrors.file}
                    </FormHelperText>
                </div>
                <div className={classes.fileInfo}>
                    <TextField
                        className={classes.formInput}
                        variant="outlined"
                        color="secondary"
                        placeholder="Название анализа / снимка"
                        value={appendForm.name}
                        onChange={event => setFormValue("name", event.target.value)}
                        error={Boolean(appendFormErrors.name)}
                        helperText={appendFormErrors.name}
                        fullWidth
                    />
                    <RadioGroup
                        value={appendForm.type}
                        onChange={event =>
                            setFormValue("type", event.target.value as AnalysisType)
                        }
                        aria-label="Тип загружаемого файла"
                        row
                    >
                        <FormControlLabel
                            value="analysis"
                            control={<Radio color="secondary" />}
                            label={
                                <Typography variant="body1" color="textSecondary">
                                    Анализы
                                </Typography>
                            }
                        />
                        <FormControlLabel
                            value="snapshot"
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
                            value={appendForm.analysisDeliveryDate}
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
                <SubmissionResult align="center" isError>
                    {submissionError}
                </SubmissionResult>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={appendPending}
                    isLoaded={appendPending}
                >
                    Загрузить
                </Button>
            </form>
        </DialogBase>
    );
});
