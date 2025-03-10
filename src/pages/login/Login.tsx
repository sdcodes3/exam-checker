import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import toast, { Toaster } from "react-hot-toast";

const Login: React.FC = () => {
  const navigate = useNavigate();
  if (localStorage.getItem("id")) {
    navigate("/");
  }

  const [form, setForm] = useState<{ id: string; password: string }>({
    id: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await api.post("/login", form);
      if (response.data.status === "success") {
        localStorage.setItem("id", response.data.id);
        toast.success("Login Successfull");
        navigate("/");
      }
    } catch (error: any) {
      toast.error(error.response.data.error);
      console.error(error);
    }
  };

  return (
    <div className="h-full w-full flex items-center justify-center bg-gray-100 p-6">
      <div className="rounded-lg shadow-lg p-6 bg-white w-2xl max-w-full">
        <div className="text-xl font-bold text-center pb-6">Faculty Login</div>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="flex flex-col gap-5"
        >
          <div className="flex flex-col gap-1">
            <div className="text-gray-600 text-sm">Email : </div>
            <input
              type="email"
              value={form.id}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, id: e.target.value }))
              }
              className="border border-gray-300 rounded-lg p-1 px-2 w-full outline-0"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-gray-600 text-sm">Password : </div>
            <input
              type="password"
              value={form.password}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, password: e.target.value }))
              }
              className="border border-gray-300 rounded-lg p-1 px-2 w-full outline-0"
              placeholder="Enter your password"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="hover:bg-green-300 bg-green-200 w-full p-1 rounded-full cursor-pointer font-semibold"
            >
              Login
            </button>
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
