import { Specialty } from "stores/interfaces/ISpecialtiesStore";

export const formatSpecialties = (specialties: Specialty[]): string =>
    specialties
        .map((item, index) =>
            index < specialties.length - 1 ? `${item.name}, ` : item.name
        )
        .join("");
