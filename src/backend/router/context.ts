import * as trpc from "@trpc/server"
import * as trpcNext from "@trpc/server/adapters/next"


export async function createContext(opts?: trpcNext.CreateNextContextOptions) {
    console.log(opts?.req.cookies["poll-token"])

    return { token: opts?.req.cookies["poll-token"] }

}

type Context = trpc.inferAsyncReturnType<typeof createContext>;


export function createRouter() {
    return trpc.router<Context>();
}



