import { cx } from "@tools/index"
import { ContainerIcon, NotAvailable } from "."

function LinksContainer({ links }: { links: Array<{ icon: any, property: string, hyperlink: boolean, hyperlink_value?: string }> }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 md:gap-y-4 md:gap-x-6'>
      {
        links.map(({ icon: IconComp, property, hyperlink, hyperlink_value }, index) => {
          return (
            <LinkBoxProperty key={index} disabled={property} hyperlink={hyperlink} hyperlink_value={hyperlink_value}>
              <ContainerIcon>
                <IconComp />
              </ContainerIcon>

              <NotAvailable property={property} />
            </LinkBoxProperty>
          )
        })
      }
    </div>
  )
}

function LinkBoxProperty({ children, disabled, hyperlink, hyperlink_value }: any) {
  const boxClass = cx(
    'relative',
    !disabled && 'aria-disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:select-none',
    hyperlink && 'hover:underline'
  )

  return (
    <div className={boxClass} aria-disabled={!disabled}>
      {
        hyperlink_value
          ? (
            <a className="flex items-center justify-start gap-x-4 max-w-max" href={hyperlink_value} target='_blank'  >
              {children}
            </a>
          ) : (
            <div className="flex items-center justify-start gap-x-4 max-w-max" >
              {children}
            </div>
          )
      }
    </div>
  )
}



export { LinkBoxProperty, LinksContainer }