function UserData({
  name,
  login,
  github,
  joinedDate,
  biography
}: {
  name: string,
  login: string,
    github: string,
  joinedDate: string,
  biography?: string
}) {
  return (
    <div className='mb-8'>
      <div className='flex items-center justify-between gap-x-4'>
        <h2 className='text-[26px] leading-none font-bold text-light-300 dark:text-current'>{name}</h2>

        <span className='text-base'>Joined {joinedDate}</span>
      </div>

      <a className="text-shared-100 text-base" href={github} target="_blank">
        <span className=''>@{login}</span>
      </a>

      {
        biography && (
          <div className='mt-5 text-base'>
            <p>{biography}</p>
          </div>
        )
      }
    </div>
  )
}

export { UserData }