import { cx } from "@tools/index"
import { ContainerIcon, NotAvailable } from "."

function LinksContainer({ links }: { links: Array<{ icon: any, property: string, hyperlink: boolean }> }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4 md:gap-y-4 md:gap-x-6'>
      {
        links.map(({ icon: IconComp, property, hyperlink }, index) => {
          return (
            <LinkBoxProperty key={index} disabled={property} hyperlink={hyperlink} hyperlink_value={property}>
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
      <a className="flex items-center justify-start gap-x-4 max-w-max" href={hyperlink ? hyperlink_value : ''}  >
        {children}
      </a>
    </div>
  )
}



export { LinkBoxProperty, LinksContainer }