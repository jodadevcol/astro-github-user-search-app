import { useStore } from '@nanostores/react';
import { configApp, searchGitHubUser } from '../../store';
import { useEffect } from 'react';
import { useGitHubUser } from '../../hooks/useGitHubUser';
import LocationIcon from '../icons/Location';
import TwitterIcon from '../icons/Twitter';
import BlogIcon from '../icons/Blog';
import CompanyIcon from '../icons/Company';

export function cx(...args: unknown[]) {
  return args
    .flat()
    .filter(x => typeof x === 'string')
    .join(' ')
    .trim()
}

function NotAvailableProperty({ property }: any) {
  return !property ? <span>Not available</span> : <span>{property}</span>
}

function LinkUserBox({ children, disabled }: any) {
  const boxClass = cx(
    'flex items-center justify-start gap-x-4 max-w-max',
    !disabled && 'aria-disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:select-none'
  )

  return (
    <div className={boxClass} aria-disabled={!disabled}>
      {children}
    </div>
  )

}

function GitHubStatsUser({ title, count }: any) {
  return (
    <div className='flex-auto'>
      <h3 className='text-sm font-normal'>{title}</h3>

      <span className='font-bold text-2xl'>{count}</span>
    </div>
  )
}

function ContainerIcon({ children }: any) {
  return (
    <div className='size-5 flex place-content-center'>
      {children}
    </div>
  )

}

function GitHubUserCard({ user }: any) {
  const { id, name, login, avatar, biography, joined, public_repos, followers, following, location, blog, twitter, company } = user
  const joinedDate = new Date(joined).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  const shortBlog = blog ? blog.replace('https://', '') : false

  return (
    <div className='w-full flex items-start justify-between gap-x-9' data-github-user={id}>
      <picture className='aspect-square w-full max-w-[120PX] rounded-full overflow-hidden'>
        <img className='size-full object-cover' src={avatar === '' ? '/octocat.png' : avatar} alt={`${name.toLo} `} />
      </picture>

      <div className='text-white'>
        <div className='mb-8'>
          <div className='flex items-center justify-between gap-x-4'>
            <h2 className='text-[26px] leading-none font-bold'>{name}</h2>

            <span className='text-base'>Joined {joinedDate}</span>
          </div>

          <span className='text-shared-100 text-base'>@{login}</span>

          {
            biography && (
              <div className='mt-5 text-base'>
                <p>{biography}</p>
              </div>
            )
          }
        </div>

        <div className='bg-dark-200 flex mb-9 items-center justify-start px-8 py-4 rounded-xl'>
          <GitHubStatsUser title='Repos' count={public_repos} />
          <GitHubStatsUser title='Followers' count={followers} />
          <GitHubStatsUser title='Following' count={following} />
        </div>

        <div className='grid grid-cols-2 gap-y-4 gap-x-6'>
          <LinkUserBox disabled={location}>
            <ContainerIcon>
              <LocationIcon />
            </ContainerIcon>

            <NotAvailableProperty property={location} />
          </LinkUserBox>

          <LinkUserBox disabled={twitter}>
            <ContainerIcon>
              <TwitterIcon />
            </ContainerIcon>

            <NotAvailableProperty property={twitter} />
          </LinkUserBox>

          <LinkUserBox disabled={blog}>
            <ContainerIcon>
              <BlogIcon />
            </ContainerIcon>

            <NotAvailableProperty property={shortBlog} />
          </LinkUserBox>

          <LinkUserBox disabled={company}>
            <ContainerIcon>
              <CompanyIcon />
            </ContainerIcon>

            <NotAvailableProperty property={company} />
          </LinkUserBox>
        </div>
      </div>
    </div>
  )
}

function GitHubAccount() {
  const username = useStore(searchGitHubUser)
  const { error, loading, userDetails, getGitHubUser } = useGitHubUser({ username })

  useEffect(() => {
    getGitHubUser({ username })
  }, [username])

  return (
    <article className='flex place-content-center bg-dark-300 overflow-hidden rounded-2xl px-12 py-12'>
      {
        error.status && !loading && <div className='w-full text-center'><span className='font-bold text-xl text-white'>{error.message}</span></div>
      }
      {
        !error.status && loading && <div className='w-full text-center'><span className='font-bold text-2xl text-white'>Loading...</span></div>
      }
      {
        !error.status && !loading && userDetails && <GitHubUserCard user={userDetails} />
      }
      {
        !error.status && !loading && !userDetails && <div className='w-full text-center'><span className='font-bold text-xl text-white'>Start the search in the search <br /> engine with the user's name</span></div>
      }
    </article>
  )
}

export default GitHubAccount;