import { PlainButton } from "@/components/atoms/Button";
import { PlainInput } from "@/components/molecules/Input"
import { PlainSelectInput } from "@/components/molecules/SelectInput";
import { FileField } from "@/components/organisms/FileField";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CreateRoomSchema } from "../../type/schema";

export const AdminAddRentalRoom = () => {
  const { handleSubmit, register, formState: {errors, isSubmitting}, control, watch} = useForm({
    resolver: zodResolver(CreateRoomSchema)
  });
  const onsubmit = (data: any) => {
    //　ロジックの実装
    console.log('確認',data)
  } 

  return (
    <div className="flex flex-col w-full items-center  min-h-screen h-full space-y-10 bg-gray-50">
      <div className="flex flex-col w-full md:w-4/5 lg:w-2/3 xl:w-1/2 min-h-screen h-full items-center bg-white space-y-8 pb-16">
        <div className="mt-8 font-semibold text-center">ルームの登録</div>
        <form action="" className="w-full sm:w-4/5 space-y-4" onSubmit={handleSubmit(onsubmit)}>
          <PlainInput
            label="部屋名(部屋番号)"
            register={register}
            registerValue="name"
            inputType="text"
            placeholder="部屋名をご記入ください"
            error={errors.name?.message as string}
          />
          <PlainInput
            label="宿泊費(キャンセル料)"
            register={register}
            registerValue="stayFee"
            inputType="number"
            placeholder="料金をご記入ください"
            error={errors.stayFee?.message as string}
          />
          <PlainInput
            label="家賃"
            register={register}
            registerValue="rent"
            inputType="text"
            placeholder="家賃をご記入ください"
            error={errors.rent?.message as string}
          />
          <div className="flex ">
            <PlainInput
              label="礼金"
              register={register}
              registerValue="thanksMoney"
              inputType="number"
              placeholder="礼金をご入力ください"
              error={errors.thanksMoney?.message as string}
            />
            <PlainInput
              label="敷金"
              register={register}
              registerValue="securityDeposit"
              inputType="number"
              placeholder="敷金をご記入ください"
              error={errors.securityDeposit?.message as string}
            />
          </div>
          <div className="flex ">
            <PlainInput
              label="契約期間"
              register={register}
              registerValue="contractDuration"
              inputType="text"
              placeholder="契約期間をご入力ください"
              error={errors.contractDuration?.message as string}
            />
            <PlainInput
              label="階層"
              register={register}
              registerValue="floorDeposit"
              inputType="number"
              placeholder="階数をご記入ください"
              error={errors.floorDeposit?.message as string}
            />
          </div>

          {/* リファクタ */}
          <PlainSelectInput 
            labelText="間取り"
            registerValue="layout"
            register={register}
            error={errors.layout?.message as string}
          >
            <option value="1R">1R</option>
            <option value="1K">1K</option>
            <option value="1DK">1DK</option>
            <option value="1LDK">1LDK</option>
            <option value="2K">2K</option>
            <option value="2DK">2DK</option>
            <option value="2LDK">2LDK</option>
            <option value="3DK">3DK</option>
            <option value="3LDK">3LDK</option>
            <option value="4DK">4DK</option>
            <option value="4LDK">4LDK</option>
            <option value="その他">その他</option>
          </PlainSelectInput>

          <FileField
            labelText="部屋写真の選択"
            control={control}
            error={errors.image?.message as string}
            registerValue="image"
            register={register}
            watch={watch}
          />
          <div className="flex justify-center">
            <PlainButton
              innerText="登録する"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  )
}