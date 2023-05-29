function About() {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/github-universe.jpg?itok=lwRZddXA"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">About Application</h1>
            <p className="py-6">
              This application is developed using ReactJS (v18.2.0), Tailwind
              CSS(v3.3.2) / Daisy UI templates and GitHub API. Users can search
              GitHub profiles and view individual profile details.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

{
  /* <h1 className="text-5xl font-bold">About Application</h1>
            <p className="py-6">
              This application is developed using ReactJS (v18.2.0), Tailwind
              CSS(v3.3.2) / Daisy UI templates and GitHub API. Users can search
              GitHub profiles and view individual profile details.
            </p> */
}
