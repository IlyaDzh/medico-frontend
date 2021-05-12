import React from "react";
import { Link } from "react-router-dom";
import { Typography, makeStyles, Theme } from "@material-ui/core";

import { Avatar } from "components";
import { AppointmentResult } from "stores/interfaces/Dashboard";
import { formatDate } from "utils/formatDate";

interface IAppointmentResultItem {
    result: AppointmentResult;
}

const useStyles = makeStyles((theme: Theme) => ({
    result: {
        background: "#fff",
        border: `1px solid ${theme.palette.other!.main}`,
        borderRadius: 8,
        padding: "34px 40px",
        marginBottom: 22,
        maxWidth: 898,
        [theme.breakpoints.down("xs")]: {
            padding: 20,
            marginBottom: 14
        }
    },
    resultHeader: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 24,
        [theme.breakpoints.down("xs")]: {
            marginBottom: 16
        }
    },
    doctorInfo: {
        display: "flex",
        alignItems: "center",
        textDecoration: "none"
    },
    doctorData: {
        marginLeft: 12
    }
}));

export const AppointmentResultItem: React.FC<IAppointmentResultItem> = ({
    result
}) => {
    const classes = useStyles();

    return (
        <div className={classes.result}>
            <div className={classes.resultHeader}>
                <Link
                    className={classes.doctorInfo}
                    to={`/doctor/${result.doctor.id}`}
                >
                    <Avatar
                        src={
                            process.env.REACT_APP_API_BASE_URL + result.doctor.photo
                        }
                        alt={`${result.doctor.name} аватар`}
                        isPositionTop
                    />
                    <div className={classes.doctorData}>
                        <Typography variant="h6" color="primary">
                            {result.doctor.specialty}
                        </Typography>
                        <Typography variant="body1">
                            {result.doctor.surname} {result.doctor.name}{" "}
                            {result.doctor.middleName}
                        </Typography>
                    </div>
                </Link>
                <Typography color="textSecondary" variant="h6">
                    {formatDate(result.receptionDate.toString(), "dd MMMM yyyy")}
                </Typography>
            </div>
            <Typography variant="body1">
                {result.appointment || <i>Врач не написал назначения</i>}
            </Typography>
        </div>
    );
};
