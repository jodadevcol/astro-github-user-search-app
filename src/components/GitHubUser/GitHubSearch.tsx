import React, { useEffect, useRef } from "react";
import { configApp, searchGitHubUser } from "../../store";
import { useStore } from "@nanostores/react";
import { cx } from "@tools/index";

function GitHubSearch() {
  const submitForm = useRef(null)
  const { error } = useStore(configApp)

  const handleSubmitSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.target as HTMLFormElement
    const formData = new FormData(form)

    const username = formData.get('search-github') as string
    searchGitHubUser.set(username)
  }

  return (
    <div className="bg-light-500 dark:bg-dark-300 overflow-hidden rounded-2xl px-3 py-3 shadow-[0px_16px_30px_-10px_rgba(70,96,187,0.20)] dark:shadow-none">
      <form onSubmit={handleSubmitSearch} className="flex items-center justify-between gap-x-6">
        <div className="flex items-center justify-start w-full ml-5">
          <span className="block mr-6 size-6 text-shared-100">
            <svg xmlns="http://www.w3.org/2000/svg" width={25} height={24} >
              <path
                fill="currentColor"
                d="M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 0 1-1.227 1.233l-5.118-5.093a10.58 10.58 0 0 1-6.848 2.505C4.759 21.16 0 16.413 0 10.58S4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 0 0 6.213-2.537l.04-.047a.881.881 0 0 1 .058-.053 8.786 8.786 0 0 0 2.558-6.203c0-4.875-3.979-8.84-8.87-8.84z"
              />
            </svg>
          </span>

          <label htmlFor="search-github" className="text-light-300 dark:text-white w-full">
            <input className="appearance-none text-lg bg-transparent w-full placeholder:text-current focus:outline-none caret-shared-100" type="text" name="search-github" id="search-github" placeholder="Search GitHub username…" />
          </label>
        </div>

        <div className={cx(
          'text-shared-200',
          error ? 'opacity-100' : 'opacity-0'
        )}>
          <span className="font-bold text-base whitespace-nowrap">No results</span>
        </div>

        <button className="bg-shared-100 rounded-lg text-white px-6 py-3 text-base font-bold" ref={submitForm}>
          <span>Search</span>
        </button>
      </form>
    </div>
  )
}

export default GitHubSearch;