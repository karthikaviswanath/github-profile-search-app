import { useParams, Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import SearchContext from "../context/search/SearchContext";
import { HashLoader } from "react-spinners";
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import RepoList from "./RepoList";

function Profile() {
  const { loading, profile, repos, getProfile, getRepos } =
    useContext(SearchContext);
  const params = useParams();
  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = profile;

  useEffect(() => {
    getProfile(params.login);
    getRepos(params.login);
  }, []);

  const websiteUrl = blog?.startsWith("http") ? blog : "https://" + blog;
  if (loading) {
    return (
      <div>
        <HashLoader
          color="#a991f7"
          loading={loading}
          size={150}
          className="mx-auto"
        />
      </div>
    );
  }

  return (
    <>
      <div className="w-full mx-auto 1g:w-10/12">
        <div className="mb-4">
          <br />
          <Link to="/" className="btn btn-md btn-outline hover:bg-primary">
            Back to search
          </Link>
        </div>
        <div className="grid grid-cols-1 x1:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md: gap-8">
          <div className="custom-card-image mb-6 md: mb-0">
            <div className="rounded-1g shadow-x1 card image-full">
              <figure>
                <img src={avatar_url} alt="" />
              </figure>
              <div className="card-body justify-end">
                <h2 className="card-title mb-0">{name}</h2>
                <p className="flex-grow-0">{login}</p>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="text-3x1 card-title">
                {name}
                <div className="m1-2 mr-1 badge badge-info">{type}</div>

                {hireable && (
                  <div className="mx-1 badge badge-success">Hireable</div>
                )}
              </h1>
              <p>{bio}</p>
              <div className="mt-4 card-actions">
                <a
                  href={html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline btn-sm hover:bg-primary"
                >
                  Visit Github Profile
                </a>
              </div>
            </div>
            <div className="w-full rounded-1g shadow-md bg-base-200 stats">
              {location && (
                <div className="stat">
                  <div className="stat-title text-md">Location</div>
                  <div className="text-lg stat-value">{location}</div>
                </div>
              )}
              {blog && (
                <div className="stat">
                  <div className="stat-title text-md">Website</div>

                  <div className="text-lg stat-value">
                    {" "}
                    <a href={websiteUrl} target="_blank" rel="noreferrer">
                      {websiteUrl}
                    </a>
                  </div>
                </div>
              )}
              {twitter_username && (
                <div className="stat">
                  <div className="stat-title text-md">Twitter</div>
                  <div className="text-lg stat-value">
                    <a
                      href={`https://twitter.com/$[twitter_username}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {twitter_username}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-full py-5 mb-6 rounded-1g shadow-md bg-base-100 stats">
          <div className="grid grid-cols-1 md: grid-cols-4">
            <div className="stat">
              <div className="stat-figure text-red-300">
                <FaUsers className="text-3x1 md:text-5x1" />
              </div>
              <div className="stat-title pr-5">Followers</div>
              {followers}
              <div className="stat-value pr-5 text-3x1 md:text-4x1"></div>
            </div>
            <div className="stat">
              <div className="stat-figure text-red-300">
                <FaUserFriends className="text-3x1 md:text-5x1" />
              </div>
              <div className="stat-title pr-5">Following</div>
              <div className="stat-value pr-5 text-3x1 md:text-4x1">
                {following}
              </div>
            </div>
            <div className="stat">
              <div className="stat-figure text-red-300">
                <FaCodepen className="text-3x1 md:text-5x1" />
              </div>
              <div className="stat-title pr-5">Public Repos</div>
              <div className="stat-value pr-5 text-3x1 md:text-4x1">
                {public_repos}
              </div>
            </div>
            <div className="stat">
              <div className="stat-figure text-red-300">
                <FaStore className="text-3x1 md:text-5x1" />
              </div>
              <div className="stat-title pr-5">Public Gists</div>
              <div className="stat-value pr-5 text-3x1 md:text-4x1">
                {public_gists}
              </div>
            </div>
          </div>
        </div>
        <RepoList repos={repos} />
      </div>
    </>
  );
}

export default Profile;
