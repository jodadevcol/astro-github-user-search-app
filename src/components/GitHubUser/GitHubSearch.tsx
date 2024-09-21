import { useStore } from "@nanostores/react";
import React, { useRef, useState } from "react";
import { searchGitHubUser } from "../../store";

function Filter() {
  const [currentSearch, setCurrentSearch] = useState('')
  const submitForm = useRef(null)

  // const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const search = event.target.value

  //   if (search === currentSearch) return

  //   setCurrentSearch(search)
  //   searchGitHubUser.set(search)
  // }

  const handleSubmitSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.target as HTMLFormElement
    const formData = new FormData(form)

    const username = formData.get('search-github') as string

    // if (username === currentSearch) return

    // setCurrentSearch(username)
    searchGitHubUser.set(username)
  }

  return (
    <div>
      <form onSubmit={handleSubmitSearch}>
        <div>
          <span></span>

          <label htmlFor="search-github">
            {/* onChange={handleChangeSearch}  */}
            <input type="text" name="search-github" id="search-github" placeholder="Search GitHub username…" />
          </label>
        </div>

        <button ref={submitForm}>
          <span>Search</span>
        </button>
      </form>
    </div>
  )
}

export default Filter;