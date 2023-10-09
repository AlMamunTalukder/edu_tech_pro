import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Hook/AuthProvider";
import swal from "sweetalert";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [error, setError] = useState("");

  const { signUp } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegisterAuth = (e) => {
    e.preventDefault();

    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
      swal(
        "Error",
        "Minimum Six character, at least one Letter and one Number",
        "success"
      );
      setError("");
    } else {
      setError("");
      if (email) {
        signUp(email, password).then((result) => {
          console.log(result);
          swal("Welcome", "Account Create Successfully ", "success");
          navigate("/");
        });
      }
    }
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p>{error.message}</p>
          <div className="card flex-shrink-0 w-[420px] max-w-sm shadow-2xl bg-base-100">
            <form className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Full name"
                  className="input input-bordered"
                  name="name"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image Url</span>
                </label>
                <input
                  type="text"
                  placeholder="image url"
                  className="input input-bordered"
                  name="img"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text " required>
                    Password
                  </span>
                </label>
                <input
                  onChange={(e) => setPass(e.target.value)}
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                />
              </div>
              <div className="form-control mt-6 p-0">
                <button
                  onClick={handleRegisterAuth}
                  className="btn btn-neutral"
                  type="submit"
                >
                  Register
                </button>
              </div>
              <label className="label">
                Have an account?
                <Link to="/login" className="label-text-alt link link-hover">
                  Please Login
                </Link>
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
