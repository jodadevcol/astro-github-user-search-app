
import { StatsContainer } from "./Stats"
import { LinkBoxProperty, LinksContainer } from "./Links"
import { ContainerIcon } from "./Containers"

function NotAvailable({ property }: any) {
  return !property ? <span>Not available</span> : <span>{property}</span>
}

export { NotAvailable, ContainerIcon, LinkBoxProperty, LinksContainer, StatsContainer }