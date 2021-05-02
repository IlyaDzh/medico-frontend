import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { Typography, makeStyles } from "@material-ui/core";

import { ConsultationItem } from "../components";
import { DialogCancelConsultation, Loader } from "components";
import { useStores } from "stores/useStore";

const useStyles = makeStyles(() => ({
    title: {
        marginBottom: 12
    },
    articleMargin: {
        marginBottom: 44
    }
}));

export const PatientAlertsPage: React.FC = observer(() => {
    const classes = useStyles();
    const { dashboardConsultations } = useStores();
    const {
        waitingConsultations,
        doneConsultations,
        pendingWaitingConsultations,
        pendingDoneConsultations,
        getWaitingConsultations,
        getDoneConsultations
    } = dashboardConsultations;

    useEffect(() => {
        if (pendingWaitingConsultations || pendingDoneConsultations) {
            return;
        }

        getWaitingConsultations();
        getDoneConsultations();
    }, [getWaitingConsultations, getDoneConsultations]); // eslint-disable-line

    return (
        <React.Fragment>
            <article className={classes.articleMargin}>
                <Typography className={classes.title} variant="h4">
                    Запланированные записи
                </Typography>
                {!pendingWaitingConsultations ? (
                    waitingConsultations.length > 0 ? (
                        waitingConsultations.map((consultation, index) => (
                            <ConsultationItem
                                key={index}
                                consultation={consultation}
                            />
                        ))
                    ) : (
                        <Typography variant="body1">
                            Запланированных консультаций не найдено
                        </Typography>
                    )
                ) : (
                    <Loader level={3} isCenter />
                )}
            </article>
            <article>
                <Typography className={classes.title} variant="h4">
                    История
                </Typography>
                {!pendingDoneConsultations ? (
                    doneConsultations.length > 0 ? (
                        doneConsultations.map((consultation, index) => (
                            <ConsultationItem
                                key={index}
                                consultation={consultation}
                                isHistory
                            />
                        ))
                    ) : (
                        <Typography variant="body1">
                            Консультаций не найдено
                        </Typography>
                    )
                ) : (
                    <Loader level={3} isCenter />
                )}
            </article>

            <DialogCancelConsultation />
        </React.Fragment>
    );
});
