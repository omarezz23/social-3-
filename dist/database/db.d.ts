import { Application } from "express";
import { PORT } from "../config/config.js";
declare const app: import("express-serve-static-core").Express;
export declare const connectDB: (app: Application, PORT: number) => Promise<void>;
export { app, PORT };
//# sourceMappingURL=db.d.ts.map