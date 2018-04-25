import { Request, Response, Context } from "koa";


async function index(ctx: Context, next: Context) {
    await ctx.render("appdemo/index", {title: "Nodejs Index"})
}

module.exports = {index};
