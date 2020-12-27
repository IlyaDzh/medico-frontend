import React from "react";

interface IDashboardHeader {
    isDoctor?: boolean;
}

export const DashboardHeader: React.FC<IDashboardHeader> = ({ isDoctor }) => {
    return <div>{isDoctor ? "Doctor" : "Patient"} dashboard header</div>;
};
