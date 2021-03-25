export const isNumber = (value: string) => {
    if (Number(value) === 0) {
        return "Заполните поле";
    }

    if (!/^\d+$/.test(value)) {
        return "Неверный формат ввода";
    }
};

export const isNotEmpty = (value: string) => {
    if (!/\S+/.test(value)) {
        return "Заполните поле";
    }
};
