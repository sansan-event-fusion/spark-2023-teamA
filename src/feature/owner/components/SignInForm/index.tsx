import { PlainButton } from "@/components/atoms/Button";
import { PlainInput } from "@/components/molecules/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signInInputSchema } from "../../type/schema";
import { useToast } from "@/hooks/useToast";
import { useCertainOwner } from "@/hooks/useCertainOwner";
import { authRepository } from "../../modules/auth/auth.repository";
import { ToastResult } from "@/type/toast";

export const SignInForm = (): JSX.Element => {
  const { handleSubmit, register, formState: {errors}} = useForm({
    resolver: zodResolver(signInInputSchema)
  });

  const { showToast, hideToast } = useToast();
  const { setOwner, owner } = useCertainOwner();

  const onSubmit = (createData: any): void => {
    authRepository.signIn(createData)
      .then(({ data, style, message }: ToastResult) => {

        showToast({ message, style });
        setTimeout(() => {
          hideToast();
          if (style === 'success') {
            setOwner(data);
            // TODO: メインページに飛ばす。
            // return router.push("/")
          }
        }, 3000)
      });
  }

  return (
    <form className="flex flex-col w-md space-y-4" onSubmit={handleSubmit(onSubmit)}>
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
      <PlainButton
        innerText="ログイン"
        type="submit"
      />
    </form>
  )
}