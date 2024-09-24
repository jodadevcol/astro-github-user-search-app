import type { GetResponseTypeFromEndpointMethod } from "@octokit/types"
import { useCallback, useRef, useState } from "react"
import { GETUserGitHub } from "../components/services/githubuser"
import { useStore } from "@nanostores/react"
import { configApp } from "../store"

export function useGitHubUser({ username }: { username: string }) {
	const [userDetails, setUserDetails] = useState<GetResponseTypeFromEndpointMethod<any>>()
	const globalApp = useStore(configApp)
	const [loading, setLoading] = useState<boolean>(false)
	const prevSearch = useRef(username)

	const getGitHubUser = useCallback(async ({ username }: { username: string }) => {
		if (username === prevSearch.current) return

		try {
			setLoading(true)
			configApp.setKey("error", false)
			prevSearch.current === username

			const newUser = await GETUserGitHub({ username })
			setUserDetails(newUser)
		} catch (error: any) {
			configApp.setKey("error", true)
			configApp.setKey("error_message", "User not found in search")

			setLoading(false)
			throw new Error("User not found in search")
		} finally {
			setLoading(false)
		}
	}, [])

	return {
		error: {
			status: globalApp.error,
			message: globalApp.error_message,
		},
		loading,
		userDetails,
		getGitHubUser,
	}
}
