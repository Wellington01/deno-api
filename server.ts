import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./router.ts";

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen("localhost:3333");
