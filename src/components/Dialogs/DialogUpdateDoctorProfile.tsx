import React from "react";
import { observer } from "mobx-react";

import { DialogBase } from "./DialogBase";
import {
    CostForm,
    AboutForm,
    EducationForm,
    WorkplacesForm
} from "pages/Dashboard/components";
import { useStores } from "stores/useStore";
import { ChangeDoctorProfileTypes } from "stores/interfaces/Dashboard";
import { PlusIcon } from "icons";

type ModalStates = {
    [key in ChangeDoctorProfileTypes]: React.ReactNode;
};

const MODAL_STATES: ModalStates = {
    cost: <CostForm />,
    about: <AboutForm />,
    education: <EducationForm />,
    workplaces: <WorkplacesForm />
};

export const DialogUpdateDoctorProfile: React.FC = observer(() => {
    const { modalsStore, dashboardDoctorProfileStore } = useStores();
    const { getModalIsOpen, setModalIsOpen } = modalsStore;
    const { currentModalState, updateDoctorProfile, resetForm } =
        dashboardDoctorProfileStore;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        updateDoctorProfile();
    };

    const handleClose = (): void => {
        setModalIsOpen("update-doctor-profile", false);
        resetForm();
    };

    return (
        <DialogBase
            isOpen={getModalIsOpen("update-doctor-profile")}
            title="Изменение профиля"
            icon={<PlusIcon />}
            onClose={handleClose}
            paperWidth={560}
        >
            <form onSubmit={handleSubmit}>
                {currentModalState && MODAL_STATES[currentModalState]}
            </form>
        </DialogBase>
    );
});
