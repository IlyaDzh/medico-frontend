import React from "react";

import { FormWrapper } from "./FormWrapper";

export const DoctorForm: React.FC = () => {
    return (
        <FormWrapper
            title="Анкета"
            subtitle="Данные из анкеты будут использоваться врачом в качестве первичной медицинской карты"
        >
            Укажите ваш вес
        </FormWrapper>
    );
};
