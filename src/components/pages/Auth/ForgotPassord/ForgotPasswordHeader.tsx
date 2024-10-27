import Logo from "@/components/ui/Header/Logo";
import { useAuth } from "../_store/AuthContext"; // Import useAuth
import Link from "next/link";

export default function ForgotPasswordHeader() {
  const { setForgotPassword } = useAuth();

  return (
    <div className="flex flex-col items-center">
      <Link href="/">
        <Logo textColor="text-black" />
      </Link>
      <h4 className="mt-2 text-h4 font-semibold">Quên mật khẩu</h4>
      <div className="text-center text-[12px]">
        <button
          className="text-gray-400 underline"
          onClick={() => setForgotPassword(false)} // Set SignUp to true when clicked
        >
          quay về đăng nhập
        </button>
      </div>
    </div>
  );
}