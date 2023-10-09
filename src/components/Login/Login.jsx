import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Hook/AuthProvider";
import swal from "sweetalert";

const Login = () => {
  const { googleSignIN, signIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [error, setError] = useState("");

  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();

  // const from = location.state?.from?.pathname || "/";

  const handleGoogleLogIn = () => {
    googleSignIN().then((response) => {
      console.log(response.user);
      swal("Welcome", "Log in Successful", "success");
      navigate("/");
    });
  };

  const handleLogIn = () => {
    if (email && password) {
      signIn(email, password)
        .then((result) => {
          console.log(result.user);
          swal("Welcome", "Log in Successful", "success");
          navigate("/");
        })

        .catch((error) => {
          setError(error.message);
        });
    }
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <p>{error}</p>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body w-96">
              <div className="text-center">
                <p>Log in with </p>
                <button
                  onClick={handleGoogleLogIn}
                  className="btn btn-wide mt-4"
                >
                  Google
                </button>
              </div>
              <div className="divider">OR</div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  value={password}
                  onChange={(e) => setPass(e.target.value)}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6 p-0">
                <button onClick={handleLogIn} className="btn btn-neutral">
                  Login
                </button>
              </div>

              <label className="label">
                New here?{" "}
                <Link to="/register" className="label-text-alt link link-hover">
                  Create an account
                </Link>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
