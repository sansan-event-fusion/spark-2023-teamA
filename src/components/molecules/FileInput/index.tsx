import { Control, Controller, FieldValues } from "react-hook-form";

type Props = {
  labelText: string;
  control: Control<FieldValues, any>;
  error: string;
  registerValue: string;
  handle: (e: any) => void 
}

export const FileInput = ({ labelText, control, error, registerValue, handle }: Props): JSX.Element => (
  <div className="flex flex-col gap-1 mb-4 w-full">
    <label>{labelText}</label>
    <div className="relative border-2 border-dashed border-gray-300 rounded-md p-6">
      <Controller
        name={registerValue}
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type="file"
            accept=".jpg, .png, .jpeg"
            multiple
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            // onChange={(e) => handleFileChange(e.target.files!)}
            onChange={handle}
          />
        )}
      />
      <div className="text-center">
        <p className="text-sm text-gray-500">
          ファイルをドラッグ＆ドロップするか、ここをクリックしてファイルをアップロードしてください。
        </p>
      </div>
    </div>
  </div>
)