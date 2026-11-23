
// export interface ISignupDto{
//     email:string,
//     username:string,
//     passeord:string,
//     phone:string
// }

import z from "zod";
import { signup } from "../auth.validation.js";

export type SignupDTO = z.infer<ReturnType<typeof signup>>;