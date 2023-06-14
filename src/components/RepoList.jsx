import PropTypes from "prop-types";
import RepoItem from "./RepoItem";
function RepoList({ repos }) {
  if (repos.length > 0) {
    return (
      <div className="rounded-1g shadow-md card bg-base-100">
        <div className="card-body">
          <h2 className="text-3x1 my-4 font-bold card-title">Repositories</h2>
          {repos.map((repo) => (
            <RepoItem key={repo.id} repo={repo} />
          ))}
        </div>
      </div>
    );
  } else {
    return <h3>No Repositories Found !!!</h3>;
  }
}
RepoList.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default RepoList;
