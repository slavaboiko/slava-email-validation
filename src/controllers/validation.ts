"use strict";

import {Request, Response} from "express";
import {RegexpValidator} from "../validators/regexp";
import {DomainValidator} from "../validators/domain";
import {SMTPValidator} from "../validators/smtp";
import {ValidationResult} from "../validators/validator";

type ValidatorsResults = {
    [key: string]: ValidationResult;
}

const validators = [
    {name: "regexp", validator: new RegexpValidator()},
    {name: "domain", validator: new DomainValidator()},
    {name: "smtp", validator: new SMTPValidator()}
];

export const emailValidation = async (req: Request, res: Response) => {
    if (req.body.email === null || req.body.email === undefined) return res.status(400).json({error: "email is not specified"});
    if (req.body.email === "") return res.status(400).json({error: "email cannot be empty string"});

    let valid = true;
    const promises = validators.map(entry => {
        return entry.validator.validate(req.body.email).then(result => {
            valid = valid && result.valid;
            return {name: entry.name, result};
        });
    });
    const entries = await Promise.all(promises);
    const results: ValidatorsResults = {};
    entries.forEach(entry => {
        results[entry.name] = entry.result;
    });

    return res.json({
        valid: valid,
        validators: results
    });
};