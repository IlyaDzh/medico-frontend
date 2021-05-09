import React from "react";
import { observer } from "mobx-react";

import { DialogBase } from "./DialogBase";
import {
    BloodTypeForm,
    AllergiesForm,
    BadHabitsForm
} from "pages/Dashboard/components";
import { useStores } from "stores/useStore";
import { AdditionalTypes } from "stores/interfaces/Dashboard";
import { PlusIcon } from "icons";

type ModalStates = {
    [key in AdditionalTypes]: React.ReactNode;
};

const MODAL_STATES: ModalStates = {
    "blood-type": <BloodTypeForm />,
    allergies: <AllergiesForm />,
    "bad-habits": <BadHabitsForm />,
    "blood-transfusion": <div>blood-transfusion</div>,
    "chronic-diseases": <div>chronic-diseases</div>,
    operations: <div>operations</div>
};

export const DialogUpdateMedicalCard: React.FC = observer(() => {
    const { modalsStore, dashboardMedicalCard } = useStores();
    const { getModalIsOpen, setModalIsOpen } = modalsStore;
    const { currentModalState, changeMedicalCard, resetForm } = dashboardMedicalCard;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        changeMedicalCard();
    };

    const handleClose = (): void => {
        setModalIsOpen("update-medical-card", false);
        resetForm();
    };

    return (
        <DialogBase
            isOpen={getModalIsOpen("update-medical-card")}
            title="Изменение мед. карты"
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
