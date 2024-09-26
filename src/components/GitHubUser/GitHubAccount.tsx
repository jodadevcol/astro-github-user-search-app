import { useStore } from '@nanostores/react';
import { searchGitHubUser } from '../../store';
import { useEffect } from 'react';
import { useGitHubUser } from '../../hooks/useGitHubUser';
import UserCard from '../UserCard';

function GitHubAccount() {
  const username = useStore(searchGitHubUser)
  const { error, loading, userDetails, getGitHubUser } = useGitHubUser({ username })

  useEffect(() => {
    getGitHubUser({ username })
  }, [username])

  return (
    <article className='cards-user flex place-content-center px-12 py-12'>
      {
        error.status && !loading && <div className='w-full text-center'><span className='font-bold text-xl text-current'>{error.message}</span></div>
      }
      {
        !error.status && loading && <div className='w-full text-center'><span className='font-bold text-2xl text-current'>Loading...</span></div>
      }
      {
        !error.status && !loading && userDetails && <UserCard user={userDetails} />
      }
      {
        !error.status && !loading && !userDetails && <div className='w-full text-center'><span className='font-bold text-xl text-current'>Start the search in the search <br /> engine with the user's name</span></div>
      }
    </article>
  )
}

export default GitHubAccount;