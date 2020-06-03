import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./router.ts";
import { PORT } from './config.ts';

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Running in localhost:${PORT}`);

await app.listen(`localhost:${PORT}`);
