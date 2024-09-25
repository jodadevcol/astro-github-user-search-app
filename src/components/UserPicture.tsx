function UserPicture({ avatar, alt }: { avatar: string, alt: string }) {
  return (
    <picture className='aspect-square w-full max-w-[120PX] rounded-full overflow-hidden'>
      <img className='size-full object-cover' src={avatar === '' ? '/octocat.png' : avatar} alt={`${alt}'s profile picture on GitHub`} />
    </picture>
  )
}

export default UserPicture;