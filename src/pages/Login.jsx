import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/api/AuthApi";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useIsAuthenticated from "../hooks/useIsAuthenticated";
const Login = () => {
    useIsAuthenticated();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();

    const [login, { isLoading, isSuccess, isError }] = useLoginMutation();

    useEffect(() => {
        if (isError) {
            toast.error("Invalid credentials");
        }
        if (isSuccess) {
            navigate("/users");
            toast.success("Login successful");
        }
    }, [isError, isSuccess, navigate]);

    const handleLogin = (data) => {
        login(data);
    };
    return (
        <section className="bg-black h-screen flex items-center justify-center p-4">
            <div className="border border-neutral-500 w-full sm:max-w-md p-5 rounded-lg">
                <h1 className="text-4xl text-white font-bold">Sign in</h1>
                <form
                    className="flex flex-col gap-4 mt-5"
                    onSubmit={handleSubmit(handleLogin)}
                >
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-neutral-400">
                            Email
                        </label>
                        <input
                            {...register("email", { required: true })}
                            id="email"
                            type="text"
                            className="border border-neutral-600 rounded-md px-4 py-2 text-white hover:border-neutral-400 transition-colors"
                            placeholder="your@email.com"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm text-right">
                                Email is required
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-neutral-400">
                            Password
                        </label>
                        <input
                            {...register("password", { required: true })}
                            type="password"
                            className="border border-neutral-600 rounded-md px-4 py-2 text-white hover:border-neutral-400 transition-colors"
                            placeholder="••••••••"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm text-right">
                                Password is required
                            </p>
                        )}
                    </div>
                    <div className="w-fit">
                        <label className="flex items-center gap-2 text-neutral-400 hover:underline cursor-pointer">
                            <input
                                type="checkbox"
                                className="accent-neutral-500"
                            />
                            Remember me
                        </label>
                    </div>
                    <button
                        disabled={isLoading}
                        type="submit"
                        className="px-4 py-2 bg-white rounded-md hover:bg-neutral-200 transition-colors text-black font-semibold cursor-pointer"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};
export default Login;
