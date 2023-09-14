import { PlainButton } from "@/components/atoms/Button";
import { PlainInput } from "@/components/molecules/Input"
import { PlainSelectInput } from "@/components/molecules/SelectInput";
import { FileField } from "@/components/organisms/FileField";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CreateRentalHouseSchema } from "../../type/schema";

export const AddRentalHouse = () => {
  const { handleSubmit, register, formState: {errors, isSubmitting}, control, watch} = useForm({
    resolver: zodResolver(CreateRentalHouseSchema)
  });
  const onsubmit = (data: any) => {
    //　ロジックの実装
    console.log('確認',data)
  } 

  return (
    <div className="flex flex-col w-full items-center  min-h-screen h-full space-y-10 bg-gray-50">
      <div className="flex flex-col w-full sm:w-1/2 min-h-screen h-full items-center bg-white space-y-8 pb-16">
        <div className="mt-8 font-semibold text-center">物件の登録</div>
        <form action="" className="w-full sm:w-4/5 space-y-4" onSubmit={handleSubmit(onsubmit)}>
          <PlainInput
            label="マンション名"
            register={register}
            registerValue="name"
            inputType="text"
            placeholder="建物名をご記入ください"
            error={errors.name?.message as string}
          />
          <PlainInput
            label="住所"
            register={register}
            registerValue="address"
            inputType="text"
            placeholder="住所をご記入ください"
            error={errors.address?.message as string}
          />
          <PlainInput
            label="最寄駅"
            register={register}
            registerValue="nearest_station"
            inputType="text"
            placeholder="最寄駅をご記入ください"
            error={errors.nearest_station?.message as string}
          />
          <div className="flex ">
            <PlainInput
              label="何階建"
              register={register}
              registerValue="max_floor_number"
              inputType="number"
              placeholder="何階建の建物ですか？"
              error={errors.max_floor_number?.message as string}
            />
            <PlainInput
              label="築年数"
              register={register}
              registerValue="building_age"
              inputType="number"
              placeholder="築年数をご記入ください"
              error={errors.building_age?.message as string}
            />
          </div>
          <PlainSelectInput 
            labelText="建築構造"
            registerValue="structure_type_id"
            register={register}
            error={errors.nearest_station?.message as string}
          >
            <option value="1">木造</option>
            <option value="2">S造・鉄骨造</option>
            <option value="3">RC造・鉄筋コンクリート造</option>
          </PlainSelectInput>

          <FileField
            labelText="物件写真の選択"
            control={control}
            error={errors.rental_house_photos?.message as string}
            registerValue="rental_house_photos"
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