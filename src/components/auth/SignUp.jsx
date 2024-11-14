import { useForm } from "react-hook-form";
import Field from "../common/Field";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const submitForm = async (formData) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/register`,
        formData
      );

      if (response.status === 201) {
        navigate("/login");
      }
      if (response.status === 500) {
        console.log("hello");
      }
    } catch (error) {
      console.log(error.message);
      setError("root.random", {
        value: "random",
        message: `Account already exists`,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
    >
      <Field label="First Name" error={errors.firstName}>
        <input
          {...register("firstName", { required: "First Name is required" })}
          className={`auth-input ${
            errors.email ? "border-red-500" : "border-gray-200"
          }`}
          type="firstName"
          name="firstName"
          id="firstName"
        />
      </Field>
      <Field label="Last name" error={errors.lastName}>
        <input
          {...register("lastName")}
          className={`auth-input ${
            errors.email ? "border-red-500" : "border-gray-200"
          }`}
          type="lastName"
          name="lastName"
          id="lastName"
        />
      </Field>
      <Field label="Email" error={errors.email}>
        <input
          {...register("email", { required: "Email is required" })}
          className={`auth-input ${
            errors.email ? "border-red-500" : "border-gray-200"
          }`}
          type="email"
          name="email"
          id="email"
        />
      </Field>
      <Field label="Password" error={errors.password}>
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at 8 characters",
            },
          })}
          className={`auth-input ${
            errors.password ? "border-red-500" : "border-gray-200"
          }`}
          type="password"
          name="password"
          id="password"
        />
      </Field>

      <p className="text-sm text-red-500 my-4">
        {errors?.root?.random?.message}
      </p>
      <Field>
        <button
          className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
          type="submit"
        >
          Register
        </button>
      </Field>
    </form>
  );
};

export default SignUp;
