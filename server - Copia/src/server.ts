import { fastify } from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from "fastify-type-provider-zod";
import { fastifyCors } from "@fastify/cors";
import dotenv from 'dotenv';
import { env } from "./Schema/env.ts";
import { sql } from "./db/connection.ts";
import { getRoomsRoute } from "./http/routes/get-rooms.ts";
dotenv.config();

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
    origin:'http://localhost:5174'
});

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);
app.register(getRoomsRoute);
app.listen({ port:env.PORT }) 
