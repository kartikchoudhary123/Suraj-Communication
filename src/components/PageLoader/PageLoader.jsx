import "./PageLoader.css";

function PageLoader() {
  return (
    <div className="page-loader">
      <div className="loader-content">
        <div className="loader-logo">S</div>

        <h1>Suraj Communication</h1>

        <div className="loader-line">
          <div className="loader-progress"></div>
        </div>
      </div>
    </div>
  );
}

export default PageLoader;