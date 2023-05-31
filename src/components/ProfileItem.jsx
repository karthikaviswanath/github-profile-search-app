import { Link } from "react-router-dom";

function ProfileItem({ profile: { login, avatar_url } }) {
  return (
    <div className="card-side shadow-1g compact bg-base-100">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14">
              <img src={avatar_url} alt="Profile Pic" />
            </div>
          </div>
        </div>
        <div>
          <div className="card-title"> {login} </div>
          <Link
            className="text-base-content text-opacity-40"
            to={`/profile/${login}`}
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfileItem;
