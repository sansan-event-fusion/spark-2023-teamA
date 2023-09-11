import { PlainButton } from "@/components/atoms/Button";
import { PlainInput } from "@/components/molecules/Input";
import { useForm } from "react-hook-form";

export const SignInForm = (): JSX.Element => {
  const { handleSubmit, register, formState: {errors}} = useForm();
  // リファクタ: 型を定義する。
  const onSubmit = (createData: any): void => {
    // 次のPRでロジックを作成 -> axios周りを記述する為PRが大きくなる
    console.log(createData)
  }
  
  return (
    <form className="flex flex-col w-md space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="font-bold text-xl text-center mb-2">Fill Home</h2>
      <PlainInput
        label="メールアドレス"
        register={register}
        registerValue="email"
        inputType="email"
      />
      <PlainInput
        label="パスワード"
        register={register}
        registerValue="password"
        inputType="password"
      />
      <PlainButton
        innerText="ログイン"
        type="submit"
      />
    </form>
  )
}