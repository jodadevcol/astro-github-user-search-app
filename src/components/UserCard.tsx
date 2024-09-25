import { BlogIcon, CompanyIcon, LocationIcon, XTwitterIcon } from "./icons"
import { ContainerIcon, LinkBoxProperty, NotAvailable, StatsBox } from "./ui"
import UserPicture from "./UserPicture"

function UserCard({ user }: any) {
  const { id, name, login, avatar, biography, joined, public_repos, followers, following, location, blog, twitter, company } = user
  const joinedDate = new Date(joined).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  const shortBlog = blog ? blog.replace('https://', '') : false

  return (
    <div className='w-full flex items-start justify-between gap-x-9' data-github-user={id}>
      <UserPicture avatar={avatar} alt={name.toLowerCase} />

      <div className='text-light-200 dark:text-dark-100'>
        <div className='mb-8'>
          <div className='flex items-center justify-between gap-x-4'>
            <h2 className='text-[26px] leading-none font-bold text-light-300 dark:text-current'>{name}</h2>

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

        <div className='bg-light-400 dark:bg-dark-200 flex mb-9 items-center justify-start px-8 py-4 rounded-xl'>
          <StatsBox title='Repos' count={public_repos} />
          <StatsBox title='Followers' count={followers} />
          <StatsBox title='Following' count={following} />
        </div>

        <div className='grid grid-cols-2 gap-y-4 gap-x-6'>
          <LinkBoxProperty disabled={location}>
            <ContainerIcon>
              <LocationIcon />
            </ContainerIcon>

            <NotAvailable property={location} />
          </LinkBoxProperty>

          <LinkBoxProperty disabled={twitter}>
            <ContainerIcon>
              <XTwitterIcon />
            </ContainerIcon>

            <NotAvailable property={twitter} />
          </LinkBoxProperty>

          <LinkBoxProperty disabled={blog}>
            <ContainerIcon>
              <BlogIcon />
            </ContainerIcon>

            <NotAvailable property={shortBlog} />
          </LinkBoxProperty>

          <LinkBoxProperty disabled={company}>
            <ContainerIcon>
              <CompanyIcon />
            </ContainerIcon>

            <NotAvailable property={company} />
          </LinkBoxProperty>
        </div>
      </div>
    </div>
  )
}

export default UserCard