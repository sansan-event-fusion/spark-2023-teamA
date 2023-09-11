import { PlainButton } from "@/components/atoms/Button"
import { PlainInput } from "@/components/molecules/Input"
import { useForm } from "react-hook-form";
import { authRepository } from "../../modules/auth/auth.repository";
import { ToastResult } from "@/type/toast";
import { useToast } from "@/hooks/useToast";
import { useRouter } from "next/router";
import { useCertainOwner } from "@/hooks/useCertainOwner";
import { signUpInputSchema } from "../../type/schema";
import { zodResolver } from "@hookform/resolvers/zod";

export const SignUpForm = () => {
  const router = useRouter();
  const { handleSubmit, register, formState: {errors}} = useForm({
    resolver: zodResolver(signUpInputSchema)
  });

  const { showToast, hideToast } = useToast();
  const { setOwner, owner } = useCertainOwner();

  const onSubmit = (createData: any): void => {
    authRepository.signUp(createData)
      .then(({ data, style, message }: ToastResult) => {
        console.log(data, style, message)
        showToast({ message, style });
        setTimeout(() => {
          hideToast();
          if (style === 'success') {
            setOwner(data);
            // return router.push("/")
          }
        }, 3000)
      })
  };
  
  return (
    <form className="flex flex-col w-md space-y-2" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="font-bold text-xl text-center mb-2">Fill Home</h2>
      <PlainInput
        label="メールアドレス"
        register={register}
        registerValue="email"
        id="email"
        inputType="email"
        error={errors.email?.message as string}
      />
      <PlainInput
        label="パスワード"
        {...register('password')}
        register={register}
        registerValue="password"
        id="password"
        inputType="password"
        error={errors.password?.message as string}
      />
      <div className="flex space-x-2 w-full">
        <div className="w-1/2">
          <PlainInput
            register={register}
            id="last_name"
            label="苗字"
            registerValue="last_name"
            inputType="text"
            error={errors.last_name?.message as string}
          />
        </div>
        <div className="w-1/2">
          <PlainInput
            id="first_name"
            register={register}
            label="名前"
            registerValue="first_name"
            inputType="text"
            error={errors.first_name?.message as string}
          />
        </div>
      </div>
      <PlainInput
        label="電話番号"
        register={register}
        registerValue="phone_number"
        id="phone_number"
        inputType="tel"
        error={errors?.phone_number?.message as string}
      />
      <PlainButton 
        innerText="新規登録"
        type="submit"
      />
    </form>
  )
}