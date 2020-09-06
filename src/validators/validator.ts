export type ValidationSuccess = {
    valid: true;
};

export type ValidationError = {
    valid: false;
    reason: string;
}

export type ValidationResult = ValidationSuccess | ValidationError;

export interface EmailValidator {
    validate(emailAddress: string): Promise<ValidationResult>;
}

export const validationSuccess: ValidationSuccess = {valid: true};

export const validationError = (reason: string): ValidationError => {
    return {
        valid: false,
        reason: reason
    };
};