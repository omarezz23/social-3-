import { Request } from "express";

export interface Ivalidation extends Request {
    validate:object
}