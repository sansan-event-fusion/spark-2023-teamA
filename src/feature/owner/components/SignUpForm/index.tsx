import { PlainButton } from "@/components/atoms/Button"
import { PlainInput } from "@/components/molecules/Input"
import { useForm } from "react-hook-form";

export const SignUpForm = () => {
  const { handleSubmit, register, formState: {errors}} = useForm();
  // リファクタ: 型を定義する。
  const onSubmit = (createData: any): void => {
    // 次のPRでロジックを作成 -> axios周りを記述する為PRが大きくなる
    console.log(createData)
  }
  
  return (
    <form className="flex flex-col w-md space-y-2" onSubmit={handleSubmit(onSubmit)}>
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
      <div className="flex space-x-2 w-full">
        <div className="w-1/2">
          <PlainInput
            label="苗字"
            register={register}
            registerValue="last_name"
            inputType="text"
          />
        </div>
        <div className="w-1/2">
          <PlainInput
            label="名前"
            register={register}
            registerValue="first_name"
            inputType="password"
          />
        </div>
      </div>
      <PlainInput
        label="電話番号"
        register={register}
        registerValue="phone_number"
        inputType="tel"
      />
      <PlainButton 
        innerText="新規登録"
        type="submit"
      />
    </form>
  )
}