import { FileInput } from "@/components/molecules/FileInput"
import { useState } from "react";
import { Control, Controller, FieldValues } from "react-hook-form";

type Props = {
  labelText: string;
  control: Control<FieldValues, any>;
  error: string;
  registerValue: string;
}

type ImageObj = {
  image: string
}

export const FileField = ({ labelText, control, error, registerValue }: Props) => {
  const [filePreviews, setFilePreviews] = useState<ImageObj[]>([]);

  const handleFileChange = (selectedFiles: FileList) => {
    // 選択されたファイルをプレビューに設定
    const filePreviews: ImageObj[] = [];
    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      filePreviews.push({image: URL.createObjectURL(file)});
    }
    setFilePreviews(filePreviews);
  };
  return (
    <>
      {/* リファクタ: PlainFileInputとしてmoleculeに切り分けたい */}
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
                onChange={(e) => handleFileChange(e.target.files!)}
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

      <div className="flex flex-col gap-1 mb-4 w-full">
        <label htmlFor="sx">選択した写真</label>
        <ul className="break-all flex-row flex flex-wrap">
          {filePreviews.map((preview, index) => (
            <li key={index}>
              <img src={preview.image} alt={`プレビュー${index}`} className="w-32 h-32 object-cover" />
            </li>
          ))}
        </ul>
      </div>         
    </>
  )
}