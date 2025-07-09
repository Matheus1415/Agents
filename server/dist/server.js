"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = require("fastify");
const fastify_type_provider_zod_1 = require("fastify-type-provider-zod");
const cors_1 = require("@fastify/cors");
const dotenv_1 = __importDefault(require("dotenv"));
const env_1 = require("./Schema/env");
dotenv_1.default.config();
const app = (0, fastify_1.fastify)().withTypeProvider();
app.register(cors_1.fastifyCors, {
    origin: 'http://localhost:5174'
});
app.setSerializerCompiler(fastify_type_provider_zod_1.serializerCompiler);
app.setValidatorCompiler(fastify_type_provider_zod_1.validatorCompiler);
app.get('/ok', () => {
    return 'OK';
});
app.listen({ port: env_1.env.PORT }).then(() => {
    console.log("HTTP server!!");
    console.log("Porta: " + env_1.env.PORT);
});
