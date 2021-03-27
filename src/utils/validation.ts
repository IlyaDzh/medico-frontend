import { differenceInYears } from "date-fns";

const IS_EMAIL_REGEXP = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const IS_PHONE_NUMBER_REGEXP = /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/;

const IS_ONLY_LETTERS_REGEXP = /^[a-zA-Zа-яА-ЯЁё]+$/;

export const isNumber = (value: string) => {
    if (Number(value) === 0) {
        return "Заполните поле";
    }

    if (!/^\d+$/.test(value)) {
        return "Неверный формат ввода";
    }
};

export const isNotEmpty = (value: string) => {
    if (value === "") {
        return "Заполните поле";
    }
};

export const isOnlyLetters = (value: string) => {
    if (value === "") {
        return "Заполните поле";
    }

    if (!IS_ONLY_LETTERS_REGEXP.test(value.trim())) {
        return "Поле содержит недопустимые символы";
    }
};

export const isEmail = (value: string) => {
    if (value === "") {
        return "Заполните поле";
    }

    if (!IS_EMAIL_REGEXP.test(value)) {
        return "Неверный E-mail";
    }
};

export const isPhoneNumber = (value: string) => {
    if (value === "") {
        return "Заполните поле";
    }

    if (!IS_PHONE_NUMBER_REGEXP.test(value)) {
        return "Неверный формат номера телефона";
    }
};

export const isAdult = (value: Date) => {
    if (value === null) {
        return "Заполните поле";
    }

    const diff = differenceInYears(new Date(), new Date(value));

    if (!diff) {
        return "Заполните поле";
    }

    if (diff < 18) {
        return "Необходимо достичь совершеннолетия для пользования сервисом";
    }
};

export const isPassword = (value: string) => {
    const result = {
        isLength: false,
        isUppercase: false,
        isLowercase: false,
        isNumber: false
    };

    if (value.length >= 8) {
        result.isLength = true;
    }

    if (value.match(/[A-Z]+/)) {
        result.isUppercase = true;
    }

    if (value.match(/[a-z]+/)) {
        result.isLowercase = true;
    }

    if (/\d/.test(value)) {
        result.isNumber = true;
    }

    return result;
};
