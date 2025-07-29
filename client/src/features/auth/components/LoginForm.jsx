// src/features/auth/components/LoginForm.jsx
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../authSlice";
import "./LoginForm.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(login(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
      <h2>Login</h2>

      <div className="form-group">
        <label>Email</label>
        <input {...register("email", { required: "Email is required" })} />
        {errors.email && <p className="error">{errors.email.message}</p>}
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && <p className="error">{errors.password.message}</p>}
      </div>

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
