import { Router } from "https://deno.land/x/oak/mod.ts";
import {
  getUsers,
  getUser,
  addUser,
} from "./controller/user.ts";

const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = "Hello Deno!";
});

router.get("/users", getUsers);
router.get("/user/:id", getUser);
router.post("/user", addUser);

export default router;
