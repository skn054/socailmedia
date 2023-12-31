import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginHandler } from "../authSlice";

import TwitterIcon from "@mui/icons-material/Twitter";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.auth);
  const { token } = useSelector((state) => state.auth);

  const [login, setLogin] = useState({
    input: {},
    error: "",
    hide: { pwd: true },
  });

  const loginInputHandler = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, input: { ...login.input, [name]: value } });
  };

  useEffect(() => {
    if (token) {
      navigate("/", { replace: true });
    }
  }, [token]);

  return (
    <div className="grow grid grid-cols-1 p-4">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="w-80 bg-darkSecondary m-auto p-4 rounded-lg border-light border shadow-darkSecondary shadow-xl">
          <div className="p-4">
            <div className=" flex items-center mx-auto justify-center ">
              <TwitterIcon color="primary" className="h-6 w-6 mr-2" />
              <h1 className="font-extrabold text-center text-grey">Twitter</h1>
            </div>
          </div>

          <div className="m-auto text-center text-3xl font-medium">Log In</div>
          {login.error && (
            <div className="text-center text-red pb-2">
              Error: {login.error}
            </div>
          )}

          <div className="p-2">
            <form
              className="flex flex-col gap-2.5"
              autoComplete="off"
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(loginHandler({ login, setLogin }));
              }}
            >
              <div className="flex flex-col gap-0.5">
                <label className="text-sm text-grey">
                  Username<span className="text-red">*</span>
                </label>
                <input
                  className="bg-inherit py-1 px-2 rounded border-lightGrey border outline-none focus:border-primary"
                  autoFocus
                  type="text"
                  name="username"
                  value={login.input.username || ""}
                  onChange={loginInputHandler}
                  required
                />
              </div>

              <div className="flex flex-col gap-0.5">
                <label className="text-sm text-grey">
                  Password<span className="text-red">*</span>
                </label>
                <div className="relative flex items-center">
                  <input
                    className="w-full bg-inherit py-1 px-2 rounded border-lightGrey border outline-none focus:border-primary"
                    type={`${login.hide.pwd ? "password" : "text"}`}
                    name="password"
                    value={login.input.password || ""}
                    onChange={loginInputHandler}
                    required
                  />
                  <i
                    className={`absolute right-3 z-10 text-light cursor-pointer fa-solid ${
                      login.hide.pwd ? "fa-eye" : "fa-eye-slash"
                    }`}
                    onClick={() =>
                      setLogin({
                        ...login,
                        hide: { pwd: !login.hide.pwd },
                      })
                    }
                  ></i>
                </div>
              </div>

              <button
                className="bg-primary rounded-full p-1 mt-4"
                type="submit"
              >
                Log In
              </button>
              <button
                className="border-primary border rounded-full p-1"
                type="submit"
                onClick={() =>
                  setLogin({
                    ...login,
                    input: {
                      username: "chandraa",
                      password: "123",
                    },
                  })
                }
              >
                Guest Mode
              </button>
            </form>
          </div>

          <div className="text-center text-sm py-1">
            <span>Don't have an account? </span>
            <Link to="/signup" className="text-primary">
              Signup
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
