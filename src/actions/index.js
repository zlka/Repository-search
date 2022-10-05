import { request } from "@octokit/request";

async function fetchData(username) {

    const result = await request(`GET /users/${username}/repos`, {
        headers: {
            authorization: "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",
        },
        org: "octokit",
        type: "private",
    });
    console.log(result)
    return(
        result
    )
}

export default fetchData
