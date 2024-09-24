import { atom, map } from "nanostores"

interface ConfigApp {
	error: boolean
	error_message: string
}

const searchGitHubUser = atom("")

const configApp = map<ConfigApp>({
	error: false,
	error_message: "",
})

export { searchGitHubUser, configApp }
