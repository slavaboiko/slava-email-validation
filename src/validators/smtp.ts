import {EmailValidator, validationError, ValidationResult, validationSuccess} from "./validator";
import mxConnect, {MxError} from "mx-connect";
import {getDomain} from "./utils";

export class SMTPValidator implements EmailValidator {
    async validate(emailAddress: string): Promise<ValidationResult> {
        const domain = getDomain(emailAddress);
        if (domain === null) return validationError("INVALID_ADDRESS");

        const connectToMx: Promise<ValidationResult> = new Promise((resolve) => {
            mxConnect(domain, (err: MxError) => {
                resolve(err ? validationError(err.message) : validationSuccess);
            });
        });
        const failAfterTimeout: Promise<ValidationResult> = new Promise(((resolve) => {
            setTimeout(() => {
                resolve(validationError("CONNECTION_TIMEOUT"));
            }, 1000);
        }));
        return Promise.race([connectToMx, failAfterTimeout]);
    }
}