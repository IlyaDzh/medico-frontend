import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react";
import { makeStyles, Theme } from "@material-ui/core";

import { DoctorItem } from "./DoctorItem";
import { Loader, ErrorAnimation } from "components";
import { useStores } from "stores/useStore";

const useStyles = makeStyles((theme: Theme) => ({
    list: {
        paddingLeft: 60,
        [theme.breakpoints.down("sm")]: {
            paddingLeft: 0
        }
    },
    loader: {
        marginBottom: 80
    },
    error: {
        marginBottom: 80
    }
}));

export const DoctorsList: React.FC = observer(() => {
    const classes = useStyles();
    const { specialty, page } = useParams<{ specialty: string; page: string }>();
    const { searchDoctorStore } = useStores();
    const { doctors, pending, fetchingDoctorsError, getDoctors } = searchDoctorStore;

    useEffect(() => {
        const slug = specialty === "all" || !specialty ? "" : specialty;

        if (page) {
            getDoctors(Number(page), slug);
        } else {
            getDoctors(1, slug);
        }
    }, [specialty, page, getDoctors]);

    if (fetchingDoctorsError) {
        return (
            <div className={classes.error}>
                <ErrorAnimation path="/doctors" title="Перейти к списку врачей" />
            </div>
        );
    }

    return !pending ? (
        <div className={classes.list}>
            {doctors.map(doctor => (
                <DoctorItem key={doctor.id} doctor={doctor} />
            ))}
        </div>
    ) : (
        <Loader className={classes.loader} level={3} isCenter />
    );
});
