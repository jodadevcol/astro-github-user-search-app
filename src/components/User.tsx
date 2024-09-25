function UserData({
  name,
  login,
  joinedDate,
  biography
}: {
  name: string,
  login: string,
  joinedDate: string,
  biography?: string
}) {
  return (
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
  )
}

export { UserData }