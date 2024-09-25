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
    <article className='flex place-content-center bg-light-500 dark:bg-dark-300 overflow-hidden rounded-2xl px-12 py-12 shadow-[0px_16px_30px_-10px_rgba(70,96,187,0.20)] text-light-200 dark:text-dark-100 dark:shadow-none'>
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