import z from "zod";
import { signup } from "../auth.validation.js";
export type SignupDTO = z.infer<ReturnType<typeof signup>>;
//# sourceMappingURL=auth.dto.d.ts.map