import {EmailValidator, validationError, ValidationResult, validationSuccess} from "./validator";
import mxConnect, {MxError} from "mx-connect";
import {getDomain} from "./utils";

export class SMTPValidator implements EmailValidator {
    async validate(emailAddress: string): Promise<ValidationResult> {
        const domain = getDomain(emailAddress);
        if (domain === null) return validationError("INVALID_ADDRESS");

        return new Promise((resolve) => {
            mxConnect(domain, (err: MxError) => {
                resolve(err ? validationError(err.message) : validationSuccess);
            });
        });
    }
}