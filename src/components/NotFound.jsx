import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const buttonClickHandler = () => {
    navigate("/");
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-9xl font-bold">400</h1>
            <h1 className="text-5xl font-bold">oops! Page not found!</h1>
            <p className="py-6">
              The page you are looking for does not exist. It might have been
              moved or deleted.
            </p>
            <button className="btn btn-primary" onClick={buttonClickHandler}>
              BACK TO HOME
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
