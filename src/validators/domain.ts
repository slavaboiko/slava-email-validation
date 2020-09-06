import {EmailValidator, validationError, ValidationResult, validationSuccess} from "./validator";
import emailParser, {ParsedMailbox} from "email-addresses";
import {tldExists} from "tldjs";

export class DomainValidator implements EmailValidator {
    async validate(emailAddress: string): Promise<ValidationResult> {
        const domain = DomainValidator.getDomain(emailAddress);
        if (domain === null) return validationError("INVALID_ADDRESS");

        const tldValid = tldExists(domain);
        return tldValid ? validationSuccess : validationError("INVALID_TLD");
    }

    private static getDomain(emailAddress: string): string {
        const parsedAddress = emailParser.parseOneAddress(emailAddress);
        if (parsedAddress === null) {
            return null;
        }
        return (parsedAddress as ParsedMailbox).domain;
    }
}