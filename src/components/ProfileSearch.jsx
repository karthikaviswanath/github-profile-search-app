import { useContext, useState } from "react";
import SearchContext from "../context/search/SearchContext";

function ProfileSearch() {
  const [text, setText] = useState("");
  const { profiles, searchProfiles, clearProfiles } = useContext(SearchContext);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (text === "") {
      console.log("Text is empty!");
    } else {
      searchProfiles(text);
      setText("");
    }
  };

  return (
    <>
      <div>
        <div className="hero-content"></div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative flex justify-center">
              <input
                type="text"
                placeholder="Enter a GitHub profile name to search"
                className="input input-bordered input-primary w-full max-w-xs"
                value={text}
                onChange={handleChange}
              />
              <button type="submit" className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              {profiles != null && profiles.length > 0 && (
                <div>
                  <button
                    onClick={clearProfiles}
                    className="bg-secondary hover:bg-accent text-white font-bold py-2 px-4 rounded-full"
                  >
                    Clear
                  </button>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ProfileSearch;
