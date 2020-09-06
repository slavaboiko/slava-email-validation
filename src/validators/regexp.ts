import {EmailValidator, ValidationResult} from "./validator";

export class RegexpValidator implements EmailValidator {
    // regex from https://emailregex.com/
    regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    async validate(emailAddress: string): Promise<ValidationResult> {
        return this.regex.test(emailAddress) ? {valid: true} : {
            valid: false,
            reason: "REGEX_MISMATCH"
        };
    }
}