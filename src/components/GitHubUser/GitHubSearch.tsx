import React, { useEffect, useRef } from "react";
import { configApp, searchGitHubUser } from "../../store";
import { useStore } from "@nanostores/react";
import { cx } from "./GitHubAccount";

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
    <div className="bg-dark-300 overflow-hidden rounded-2xl px-3 py-3">
      <form onSubmit={handleSubmitSearch} className="flex items-center justify-between gap-x-6">
        <div className="flex items-center justify-start w-full ml-5">
          <span className="block mr-6 size-6 text-shared-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </span>

          <label htmlFor="search-github" className="text-white w-full">
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