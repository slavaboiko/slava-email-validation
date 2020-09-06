import {EmailValidator, validationError, ValidationResult, validationSuccess} from "./validator";
import {tldExists} from "tldjs";
import {getDomain} from "./utils";

export class DomainValidator implements EmailValidator {
    async validate(emailAddress: string): Promise<ValidationResult> {
        const domain = getDomain(emailAddress);
        if (domain === null) return validationError("INVALID_ADDRESS");

        const tldValid = tldExists(domain);
        return tldValid ? validationSuccess : validationError("INVALID_TLD");
    }
}