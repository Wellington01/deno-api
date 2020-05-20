import { Router } from "https://deno.land/x/oak/mod.ts";
import {
  getUsers,
} from "./controller/user.ts";

const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = "Hello Deno!";
});

router.get("/users", getUsers);

export default router;
