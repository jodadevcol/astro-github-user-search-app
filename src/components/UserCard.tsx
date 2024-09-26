import { cleanHyperlink, formatDate, restructureHyperlink } from "@/tools"
import { BlogIcon, CompanyIcon, LocationIcon, XTwitterIcon } from "./icons"
import { StatsContainer, LinksContainer } from "./ui"
import UserPicture from "./UserPicture"
import { UserData } from "./User"

function UserCard({ user }: any) {
  const { id, name, login, github, avatar, biography, joined, public_repos, followers, following, location, blog = '', twitter, company } = user
  const joinedDate = formatDate(joined)

  const StastUser = [
    { title: 'Repos', count: public_repos },
    { title: 'Followers', count: followers },
    { title: 'Following', count: following }
  ]

  const LinksUser = [
    { icon: LocationIcon, property: location, hyperlink: false },
    { icon: XTwitterIcon, property: twitter, hyperlink: true, hyperlink_value: restructureHyperlink(twitter, 'https://x.com/') },
    { icon: BlogIcon, property: cleanHyperlink(blog), hyperlink: true, hyperlink_value: restructureHyperlink(blog) },
    { icon: CompanyIcon, property: company, hyperlink: false }
  ]

  return (
    <div className='w-full flex items-start justify-between gap-x-9' data-github-user={id}>
      <UserPicture avatar={avatar} alt={name.toLowerCase} />

      <div className='w-full text-light-200 dark:text-dark-100'>
        <UserData name={name} login={login} github={github} joinedDate={joinedDate} biography={biography} />

        <StatsContainer stats={StastUser} />

        <LinksContainer links={LinksUser} />
      </div>
    </div>
  )
}

export default UserCard