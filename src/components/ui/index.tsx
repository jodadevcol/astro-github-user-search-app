import { cx } from "@tools/index"

function NotAvailable({ property }: any) {
  return !property ? <span>Not available</span> : <span>{property}</span>
}

function ContainerIcon({ children }: any) {
  return (
    <div className='size-5 flex place-content-center'>
      {children}
    </div>
  )
}

function LinkBoxProperty({ children, disabled }: any) {
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

function StatsBox({ title, count }: any) {
  return (
    <div className='flex-auto'>
      <h3 className='text-sm font-normal'>{title}</h3>

      <span className='font-bold text-2xl text-light-300 dark:text-current'>{count}</span>
    </div>
  )
}

export { NotAvailable, ContainerIcon, LinkBoxProperty, StatsBox }