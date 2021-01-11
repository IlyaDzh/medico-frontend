import React from "react";
import { Container, makeStyles, Theme } from "@material-ui/core";

import { DoctorItem } from "./DoctorItem";
import doctorAlla from "images/doctors/alla.jpg";
import doctorOleg from "images/doctors/oleg.jpg";
import doctorTalgat from "images/doctors/talgat.jpg";

const useStyles = makeStyles((theme: Theme) => ({
    list: {}
}));

const doctorsList = [
    {
        id: "1",
        category: "Терапевт",
        time: "с 10:00 до 18:00",
        fullName: "Алла Викторовна Иванова",
        image: doctorAlla,
        rating: 4.7,
        description:
            "Врач высшей категории таким образом реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов).",
        jobTime: "12 лет"
    },
    {
        id: "2",
        category: "Эндокринолог",
        time: "с 10:00 до 18:00",
        fullName: "Олег Аркадьевич Петров",
        image: doctorOleg,
        rating: 4.5,
        description:
            "Врач высшей категории таким образом реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов).",
        jobTime: "10 лет"
    },
    {
        id: "3",
        category: "Иммунолог",
        time: "с 10:00 до 18:00",
        fullName: "Талгат Максатович Турганов",
        image: doctorTalgat,
        rating: 4.2,
        description:
            "Врач высшей категории таким образом реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов).",
        jobTime: "6 лет"
    }
];

export const DoctorsList: React.FC = () => {
    const classes = useStyles();

    return (
        <Container>
            <div className={classes.list}>
                {doctorsList.map(doctor => (
                    <DoctorItem key={doctor.id} doctor={doctor} />
                ))}
            </div>
        </Container>
    );
};
