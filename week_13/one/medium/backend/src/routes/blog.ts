import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from 'hono/jwt'
import { updatePostInput, createPostInput} from '@deepak_singh18/common'

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    },
    Variables: {
        userId: string
    }
}>();

blogRouter.use('/*', async (c, next) => {
    const authHeader = c.req.header("authorization") || "";
    try {
        const user = await verify(authHeader, c.env.JWT_SECRET);
            if (user) {
                c.set("userId" , user.id as string);
                await next();
            } else {
                c.status(403);
                return c.json({
                message: "You are not logged in"
            });
    }
    } catch (error) {
        return c.json({
            message: "Error while authenticating"
        })
    }
})

blogRouter.post('/', async (c) => {
  const body = await c.req.json();
  const { success } = createPostInput.safeParse(body);
    if (!success) {
        c.status(411);
        return c.json({
            message: "Inputs not correct"
        })
    }

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());
  
  const authorId = c.get("userId");
  try {
    const post = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: authorId
        }
    });

    return c.json({
        id: post.id
    })
  } catch (error) {
    c.status(403);
    return c.json({
        message: "invalid"
    })
  }
});

blogRouter.put('/', async (c) => {
    const body = await c.req.json();
    const { success } = updatePostInput.safeParse(body);
    if (!success) {
        c.status(411);
        return c.json({
            message: "Inputs not correct"
        })
    }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());  

  try {
    const post = await prisma.post.update({
        where: {
            id: body.id
        },
        data: {
            title: body.title,
            content: body.content
        }
    });

    return c.json({
        id: post.id
    })
  } catch (error) {
    c.status(403);
    return c.json({
        message: "Error while updating the post"
    })
  }
});

blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
  
    try {
        console.log("before fetch posts call");
      const posts = await prisma.post.findMany({});
      console.log("posts ", posts);
      return c.json({
          posts: posts
      });
    } catch (error) {
        console.log(error)
      c.status(411);
      return c.json({
          message: "Error while fetching all the posts"
      })
    }
  });

blogRouter.get('/:id', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());
  const id = c.req.param('id');

  try {
    const post = await prisma.post.findFirst({
        where: {
            id: id
        }
    });
    
    return c.json({
        post: post
    });
  } catch (error) {
    c.status(411);
    return c.json({
        message: "Error while fetching the post"
    });
  }
});


