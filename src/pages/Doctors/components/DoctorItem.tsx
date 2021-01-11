import React from "react";

interface IDoctorItem {
    doctor: {
        id: string;
        category: string;
        time: string;
        fullName: string;
        image: string;
        rating: number;
        description: string;
        jobTime: string;
    };
}

export const DoctorItem: React.FC<IDoctorItem> = ({ doctor }) => {
    return <section>{doctor.fullName}</section>;
};
