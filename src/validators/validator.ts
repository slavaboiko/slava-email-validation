export type ValidationSuccess = {
    valid: true;
};

export type ValidationError = {
    valid: false;
    reason: string;
}

export type ValidationResult = ValidationSuccess | ValidationError;

export interface EmailValidator {
    validate(emailAddress: string): ValidationResult;
}