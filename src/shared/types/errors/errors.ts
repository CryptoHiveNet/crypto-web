import { Severity } from "../components/NoticeMessage";

export type ErrorMessage = {
    severity: Severity;
    message: string;
};