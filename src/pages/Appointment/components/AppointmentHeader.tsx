import React from "react";

import { ExtendedHeader, Button } from "components";

export const AppointmentHeader: React.FC = () => (
    <ExtendedHeader
        title="Записаться на прием"
        breadcrumbs={[{ to: "/doctors", title: "Специалисты" }]}
        action={
            <Button to="/doctors" variant="outlined" color="default">
                Отменить запись
            </Button>
        }
    />
);
