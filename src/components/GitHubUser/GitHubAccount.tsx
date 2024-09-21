import { useStore } from '@nanostores/react';
import { searchGitHubUser } from '../../store';
import { Octokit } from "@octokit/core";
import { useEffect, useState } from 'react';
import type { GetResponseTypeFromEndpointMethod } from '@octokit/types';
import { TOKEN_AUTH_GITHUB } from '../../const';

function GitHubUserCard({ user }: any) {

  console.log(user);

  return (
    <div>
      <h1>GitHub Account {user.name}</h1>
      <div>
        login: {user?.login}
      </div>

      <div>
        url: {user?.html_url}
      </div>
    </div>
  )
}

function GitHubAccount() {
  const currentSearch = useStore(searchGitHubUser)
  const [userDetails, setUserDetails] = useState<GetResponseTypeFromEndpointMethod<any> | undefined>()
  const [error, setError] = useState<string | undefined>()
  const [loading, setLoading] = useState<boolean>(false)

  console.log("1 - " + currentSearch);

  useEffect(() => {
    console.log("2 - " + currentSearch);

    const GETUserDetails = async (username: string) => {
      console.log("5 - " + currentSearch);
      setLoading(true)
      setError('')

      try {
        const OptionsOctokit = new Octokit({ auth: TOKEN_AUTH_GITHUB })
        const ResponseOcto = await OptionsOctokit.request('GET /users/{username}', {
          username: `${username}`,
          headers: {
            accept: 'application/vnd.github+json'
          }
        })

        if (ResponseOcto.status === 200) setUserDetails(ResponseOcto.data)
        else setError('No results')

        setLoading(false)
      } catch (error: any) {
        setError(error.message)
        setLoading(false)
      }
    }
    console.log("3 - " + currentSearch);
    if (currentSearch === '' || currentSearch === undefined) return
    console.log("4 - " + currentSearch);
    GETUserDetails(currentSearch)
  }, [currentSearch])

  return (
    <div>
      <div>
        {
          loading && <div>Loading...</div>
        }
        {
          userDetails !== undefined && !loading && <GitHubUserCard user={userDetails} />
        }
      </div>
    </div>
  )
}

export default GitHubAccount;