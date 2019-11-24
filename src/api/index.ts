import { CORS_BASE, BAD_THREADS } from "../config";

export const fetchThreads = async (board: string) => {

    const BASE = `${CORS_BASE}/https://one.karasique.io/0/${board}`;
    const theads_info = await fetch(BASE)
        .then(x => x.json())
        .then(x => x.hasOwnProperty("error") ? [] : x);

    return await Promise.all(
        theads_info
            .filter((thread: any) =>
                BAD_THREADS
                    .every(x => !thread.content.includes(x))
            )
            .map((thread: any) =>
                fetch(`${BASE}/${thread.id}`)
                    .then(x => x.json())
                    .then(x => x.hasOwnProperty("error") ? { posts: [] } : x)
            )
    );

}