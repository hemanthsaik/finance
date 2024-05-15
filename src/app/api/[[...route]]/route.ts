import { Hono } from "hono";
import { handle } from "hono/vercel";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app
  .get("/hello", (c) => {
    return c.json({
      message: "Hello Next.js!",
    });
  })
  .get(
    "/users/:id",
    zValidator(
      "param",
      z.object({
        id: z.string().length(5, { message: "id must be 5 characters" }),
      })
    ),
    (c) => {
      const { id } = c.req.valid("param");
      return c.json({
        user: {
          id: id,
          name: "John Doe",
        },
      });
    }
  )
  .get("/users", (c) => {
    return c.json({
      users: [
        {
          id: 1,
          name: "John Doe",
        },
        {
          id: 2,
          name: "Jane Doe",
        },
      ],
    });
  });

export const GET = handle(app);
export const POST = handle(app);
