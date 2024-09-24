import { Octokit } from "@octokit/core"
import { TOKEN_AUTH_GITHUB } from "../../const"

const GETUserGitHub = async ({ username }: { username: string }) => {
	try {
		const OptionsOctokit = new Octokit({ auth: TOKEN_AUTH_GITHUB })
		return await OptionsOctokit.request("GET /users/{username}", {
			username: `${username}`,
			headers: {
				accept: "application/vnd.github+json",
			},
		}).then((userSchema) => {
			const dataUser = userSchema?.data

			if (userSchema.status !== 200) return null

			const {
				id,
				login,
				name,
				created_at,
				avatar_url,
				bio,
				email,
				company,
				blog,
				twitter_username,
				location,
				followers = 0,
				following = 0,
				public_repos = 0,
			} = dataUser
			const hasCompany = company !== null ? company : null
			const hasBlog = blog !== "" ? blog : null
			const hasTwitter = twitter_username !== null ? twitter_username : null
			const hasLocation = location !== null ? location : null

			return {
				id,
				login,
				name,
				joined: created_at,
				avatar: avatar_url,
				biography: bio,
				email,
				company: hasCompany,
				blog: hasBlog,
				twitter: hasTwitter,
				location: hasLocation,
				followers,
				following,
				public_repos,
			}
		})
	} catch (error) {
		console.error("Error:", error) // -> local testing
		throw new Error("Error in the request")
	}
}

export { GETUserGitHub }
