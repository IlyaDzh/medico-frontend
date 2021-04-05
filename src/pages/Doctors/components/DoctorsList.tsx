import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { makeStyles, Theme } from "@material-ui/core";

import { DoctorItem } from "./DoctorItem";
import { useStores } from "stores/useStore";

const useStyles = makeStyles((theme: Theme) => ({
    list: {
        paddingLeft: 60,
        [theme.breakpoints.down("sm")]: {
            paddingLeft: 0
        }
    }
}));

export const DoctorsList: React.FC = observer(() => {
    const classes = useStyles();
    const { doctorStore } = useStores();
    const { doctors, pending, getDoctors } = doctorStore;

    useEffect(() => {
        if (doctors.length === 0) {
            getDoctors();
        }
    }, [doctors, getDoctors]);

    return (
        <div className={classes.list}>
            {!pending ? (
                doctors.map(doctor => <DoctorItem key={doctor.id} doctor={doctor} />)
            ) : (
                <div>loader</div>
            )}
        </div>
    );
});
