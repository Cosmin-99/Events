import { Comment } from "../server/models/comment";

export const getComments = async (url: string): Promise<Comment[]> => {
    const response: Response = await fetch(url, {
        method: "GET"
    });

    return response.json()
}

export const addComment =  async (comment: Comment): Promise<{ ok: boolean }> => {
    const response: Response = await fetch("/api/comments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(comment)
    });

    return response.json()
}