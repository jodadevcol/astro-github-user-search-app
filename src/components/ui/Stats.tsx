function StatsContainer({ stats }: { stats: Array<{ title: string, count: number }> }) {
  return (
    <div className='bg-light-400 dark:bg-dark-200 flex mb-9 items-center justify-start px-8 py-4 rounded-xl'>
      {
        stats.map((stat, index) => {
          return (
            <StatsBox key={index} title={stat.title} count={stat.count} />
          )
        })
      }
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

export { StatsContainer }