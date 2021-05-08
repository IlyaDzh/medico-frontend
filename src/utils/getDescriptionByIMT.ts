export const getDescriptionByIMT = (imt: number): string => {
    if (imt < 16) {
        return "Дефицит массы тела";
    } else if (imt >= 16 && imt < 18.5) {
        return "Недостаточная масса тела";
    } else if (imt >= 18.5 && imt < 25) {
        return "Ваш ИМТ в норме";
    } else if (imt >= 25 && imt < 30) {
        return "Избыточная масса тела";
    } else if (imt >= 30 && imt < 35) {
        return "Ожирение первой степени";
    } else if (imt >= 35 && imt < 40) {
        return "Ожирение второй степени";
    } else {
        return "Ожирение третьей степени";
    }
};
