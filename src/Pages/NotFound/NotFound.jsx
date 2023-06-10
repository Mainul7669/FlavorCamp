import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex justify-center m-10 gap-5">
            <h1>404 Page Coming Soon</h1>
            <Link to="/" className="btn btn-error">Go Back</Link>
        </div>
    );
};

export default NotFound;