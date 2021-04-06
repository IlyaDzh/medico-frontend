import React from "react";

import { ExtendedHeader, Button } from "components";

export const AppointmentHeader: React.FC = () => {
    return (
        <ExtendedHeader
            title="Записаться на прием"
            action={<Button variant="outlined" color="default">Отменить запись</Button>}
        />
    );
};
