import React, { useRef } from "react";
import { configApp, searchGitHubUser } from "../../store";
import { useStore } from "@nanostores/react";
import { cx } from "@tools/index";
import { SearchIcon } from "../icons";
import Button from "../ui/Button";

function GitHubSearch() {
  const submitForm = useRef(null)
  const { error } = useStore(configApp)

  const handleSubmitSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.target as HTMLFormElement
    const formData = new FormData(form)

    const username = formData.get('search-github') as string
    searchGitHubUser.set(username)

    form.reset()
  }

  return (
    <div className="cards-user px-3 py-3 ">
      <form onSubmit={handleSubmitSearch} className="flex items-center justify-between gap-x-6">
        <div className="flex items-center justify-start w-full ml-5">
          <span className="block mr-6 size-6 text-shared-100">
            <SearchIcon />
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

        <Button props={{ ref: submitForm }}>        
          <span>Search</span>
        </Button>
      </form>
    </div>
  )
}

export default GitHubSearch;