import "https://deno.land/x/dotenv/load.ts";

const PORT = Deno.env.get('PORT') || 3333;
const DB_HOST = Deno.env.get('MONGO_URL') || "mongodb://localhost:27017";
const DB_NAME = Deno.env.get('DATABASE_NAME') || "denoapi";

export {
    PORT,
    DB_HOST,
    DB_NAME,
};