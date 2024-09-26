"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { onSubmit } from "./onSubmit";

const Login = () => {
  return (
    <>
      <h2 className="mb-3">ログイン</h2>

      <div className="bg-white w-96 text-left p-6 rounded-md">
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label htmlFor="" className="text-sm">
              ユーザ名
            </label>
            <Input type="text" name="name" />
          </div>

          <div>
            <label htmlFor="" className="text-sm">
              パスワード
            </label>
            <Input type="password" name="password" />
          </div>
          <div className="text-center mt-6">
            <Button type="submit">ログイン</Button>
          </div>
        </form>
      </div>
      <p>aa</p>
    </>
  );
};
export default Login;
