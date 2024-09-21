import GitHubSearch from "./GitHubSearch";
import GitHubAccount from "./GitHubAccount";

function GithubSearch() {
  return (
    <div className="flex flex-col gap-y-6">
      <GitHubSearch />

      <GitHubAccount />
    </div>
  );
}

export default GithubSearch;