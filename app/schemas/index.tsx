import { z } from "zod";
import "dotenv/config";

const envSchema = z.object({
  DB_PORT: z
    .string()
    .refine((val) => !isNaN(Number(val)), {
      message: "DB_PORT debe ser un número válido.",
    })
    .transform((val) => Number(val)),
  DB_HOST: z.string().min(1, "DB_HOST es obligatorio."),
  DB_USER: z.string().min(1, "DB_USER es obligatorio."),
  DB_BASE: z.string().min(1, "DB_BASE es obligatorio."),
  DB_PASS: z.string().min(1, "DB_PASS es obligatorio."),
  PORT: z
    .string()
    .refine((val) => !isNaN(Number(val)), {
      message: "PORT debe ser un número válido.",
    })
    .transform((val) => Number(val)),
  JWT_SECRET: z.string().min(1, "JWT_SECRET es obligatorio."),
});

const env = envSchema.parse(process.env);

export default env;
