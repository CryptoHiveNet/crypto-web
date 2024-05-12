import { GenderType } from "../../types/user/userProfile";

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*(?:\.[a-zA-Z0-9-]{2,})+$/;

export const DATE_PATTERN =
    '(?:(?:0[1-9]|1[0-9]|2[0-9]).(?:0[1-9]|1[0-2])|(?:(?:30).(?!02)(?:0[1-9]|1[0-2]))|(?:31.(?:0[13578]|1[02]))).(?:19|20)[0-9]{2}'; // dd.mm.yyyy

export const MAX_PHONE_NUMBER_VALID_CHARS = 15;

export const today = new Date().toISOString().split('T')[0];
export const currentYear = new Date().getFullYear();
export const minYear = currentYear - 99;
export const maxYear = currentYear - 18;
export const minDateOfBirth = today.replace(currentYear.toString(), minYear.toString());
export const maxDateOfBirth = today.replace(currentYear.toString(), maxYear.toString());

export const GENERAL_TEXT_REGEX = /^[A-zÀ-ž0-9(),.#&/ -|#&/ -]+$/;
export const HOUSE_NUMBER_REGEX = /^[0-9].*/;
export const INSURANCE_NUMBER_REGEX = /^[A-Z]\d{9}$/;
export const ONLY_TIME_AND_NUMBER_REGEX = /\b(?:[1-9]|[1-9][0-9]{0,2}|[1-9][1-9])\s*(?:wochen?|tage?|monate?|stunden?|jahre?)\b/i;

export const getMinCharRegex = (number: number) => {
    const regexString = `^[A-zÀ-ž0-9(),.#&/ -|#&/ -]{${number},}$`;

    return new RegExp(regexString);
};
export const isNotEmpty = (value?: string) => {
    if (typeof value !== 'string') return false;

    return value.trim().length > 0;
};

export const isInputValid = (validationRegex: RegExp, value?: string) => {
    if (typeof value !== 'string') return false;

    return validationRegex.test(value);
};

export const isValidEmailAddress = (value?: string) => {
    if (typeof value !== 'string') return false;

    return EMAIL_REGEX.test(value);
};

export const isValidDateOfBirth = (value?: string) => {
    if (!value) return false;
    const valueParsed = Date.parse(value);

    return valueParsed >= Date.parse(minDateOfBirth) && valueParsed <= Date.parse(maxDateOfBirth);
};

export const isValidDate = (value?: string, minDate = `${minYear}-01-01`, maxDate = `${maxYear}-12-31`) => {
    if (!value) return false;

    const valueTimestamp = new Date(value).valueOf();
    const minDateTimestamp = new Date(minDate).valueOf();
    const maxDateTimestamp = new Date(maxDate).valueOf();

    return valueTimestamp >= minDateTimestamp && valueTimestamp <= maxDateTimestamp;
};

export const isValidZipCode = (value?: string) => {
    if (typeof value !== 'string') {
        return false;
    }
    const zipcodeRegex = /^[0-9]{5}$/;

    return zipcodeRegex.test(value);
};

const isIBANFormatValid = (value?: string) => {
    return typeof value === 'string';
};

export const isIBANInputValid = (value?: string) => isNotEmpty(value) && isIBANFormatValid(value);

export const isPhoneNumberValid = (value?: string) => {
    if (typeof value !== 'string') return false;

    const validator = new RegExp(`^[+]?[\\d]{8,${MAX_PHONE_NUMBER_VALID_CHARS}}$`);

    return validator.test(value);
};

export const isGenderSelectValid = (value?: string) => {
    return value === GenderType.Female || value === GenderType.Male;
};

// Password validation
const withIsString = (fn: (password: string) => boolean) => (password?: string) => {
    if (typeof password === 'string') {
        return fn(password);
    }

    return false;
};

export const hasMinLengthOf8 = withIsString((password: string) => password.length >= 8);

export const hasMaxLengthOf13 = withIsString((password: string) => password.length >= 8 && password.length <= 13);

export const hasMinLengthOf14 = withIsString((password: string) => password.length >= 14);

const hasNumbersRegexp = /^.*\d+.*$/;

export const hasNumbers = withIsString(hasNumbersRegexp.test.bind(hasNumbersRegexp));

const hasSpecialCharsRegexp = /^.*[^A-Za-z0-9\söüäÖÜÄßẞ]+.*$/;

export const hasSpecialChars = withIsString(hasSpecialCharsRegexp.test.bind(hasSpecialCharsRegexp));

const hasLowerAndUppercaseLettersRegexp = /^(?=.*[a-zöüäß])(?=.*[A-ZÖÜÄẞ]).*$/;

export const hasLowerAndUppercaseLetters = withIsString(hasLowerAndUppercaseLettersRegexp.test.bind(hasLowerAndUppercaseLettersRegexp));

const arePasswordRequirementsFullfilled = (password?: string) => {
    return hasMinLengthOf8(password) && hasNumbers(password) && hasSpecialChars(password) && hasLowerAndUppercaseLetters(password);
};

export const isPasswordValid = (value?: string) => (arePasswordRequirementsFullfilled(value) ? true : false);
