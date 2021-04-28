import { differenceInYears } from "date-fns";

const EMAIL_REGEXP = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const PHONE_NUMBER_REGEXP = /^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$/;

const ONLY_LETTERS_REGEXP = /^[a-zA-Zа-яА-ЯЁё]+$/;

export const isNumber = (value: string) => {
    if (Number(value) === 0) {
        return "Заполните поле";
    }

    if (!/^\d+$/.test(value)) {
        return "Неверный формат ввода";
    }
};

export const isNotEmpty = (value: any) => {
    if (value === "" || value === null) {
        return "Заполните поле";
    }
};

export const isLength = (value: string, length: number) => {
    if (value === "") {
        return "Заполните поле";
    }

    if (value.length < length) {
        return `Поле должно содержать не менее ${length} символов`;
    }
};

export const isOnlyLetters = (value: string) => {
    if (value === "") {
        return "Заполните поле";
    }

    if (!ONLY_LETTERS_REGEXP.test(value.trim())) {
        return "Поле содержит недопустимые символы";
    }
};

export const isEmail = (value: string) => {
    if (value === "") {
        return "Заполните поле";
    }

    if (!EMAIL_REGEXP.test(value)) {
        return "Неверный E-mail";
    }
};

export const isPhoneNumber = (value: string) => {
    if (value === "") {
        return "Заполните поле";
    }

    if (!PHONE_NUMBER_REGEXP.test(value)) {
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

export const isIIN = (value: string) => {
    if (value === "") {
        return "Заполните поле";
    }

    if (value.length !== 12) {
        return "Неверный формат ввода";
    }
};
