import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { useLoginMutation } from "../redux/api/authApi";
import { useSelector } from "react-redux";
const Login = () => {
    const { isAuthenticated } = useSelector((state) => state.auth);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();

    const [login, { isLoading, isSuccess, isError }] = useLoginMutation();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/users");
        }
    }, [isAuthenticated, navigate]);

    useEffect(() => {
        if (isError) {
            toast.error("Invalid credentials");
        }
        if (isSuccess) {
            navigate("/users");
        }
    }, [isError, isSuccess, navigate]);

    const handleLogin = (data) => {
        login(data);
    };
    return (
        <div className="bg-neutral-950 min-h-screen flex">
            <div className="hidden md:flex md:flex-col md:w-1/2 min-h-full relative">
                <img
                    className="w-full object-cover min-h-full"
                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1"
                />
                <div className="absolute bottom-10 left-10 space-y-5">
                    <h1 className="text-3xl text-white font-semibold">
                        Welcome Back. <br />
                    </h1>
                    <p className="text-neutral-300">Sign in to continue</p>
                </div>
            </div>

            <div className="w-full md:w-1/2 flex items-center justify-center p-4">
                <div className="w-full max-w-md p-5 rounded-lg">
                    <h1 className="text-4xl text-center text-white font-bold">
                        Sign in
                    </h1>

                    <form
                        className="flex flex-col gap-4 mt-5"
                        onSubmit={handleSubmit(handleLogin)}
                    >
                        {/* Email Input */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-neutral-400">
                                Email
                            </label>
                            <input
                                {...register("email", { required: true })}
                                id="email"
                                type="text"
                                className="border border-neutral-800 bg-neutral-900 rounded-md px-4 py-2 text-white hover:border-neutral-400 transition-colors"
                                placeholder="your@email.com"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm text-right">
                                    Email is required
                                </p>
                            )}
                        </div>

                        {/* Password Input */}
                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="password"
                                className="text-neutral-400"
                            >
                                Password
                            </label>
                            <input
                                {...register("password", { required: true })}
                                type="password"
                                className="border border-neutral-800 bg-neutral-900 rounded-md px-4 py-2 text-white hover:border-neutral-400 transition-colors"
                                placeholder="••••••••"
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm text-right">
                                    Password is required
                                </p>
                            )}
                        </div>

                        {/* Remember Me Checkbox */}
                        <div className="w-fit">
                            <label className="flex items-center gap-2 text-neutral-400 hover:underline cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="accent-neutral-500"
                                />
                                Remember me
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            disabled={isLoading}
                            type="submit"
                            className="px-4 py-2 bg-white rounded-md hover:bg-neutral-200 transition-colors text-black font-semibold cursor-pointer flex items-center gap-2 justify-center"
                        >
                            {isLoading ? (
                                <>
                                    <ClipLoader size={20} /> Logging in
                                </>
                            ) : (
                                "Login"
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Login;
