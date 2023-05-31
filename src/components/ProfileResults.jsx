import { useContext } from "react";
import SearchContext from "../context/search/SearchContext";
import { HashLoader } from "react-spinners";
import ProfileItem from "./ProfileItem";

function ProfileResults() {
  const { profiles, loading } = useContext(SearchContext);
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

  if (!loading) {
    return (
      <>
        <br />
        <br />
        <div className="grid grid-cols-4 gap-4">
          {profiles.map((p) => (
            <ProfileItem key={p.id} profile={p} />
          ))}
        </div>
      </>
    );
  }
}

export default ProfileResults;
