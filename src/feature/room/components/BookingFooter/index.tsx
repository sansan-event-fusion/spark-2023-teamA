import { ErrorText } from "@/components/atoms/ErrorText";
import { PlainLink } from "@/components/atoms/Link";

type Props = {
  stayFee: number
  reserve_url: string
}
export const BookingFooter = ({ stayFee, reserve_url }: Props): JSX.Element => (
  <div className="fixed bottom-0 w-full flex justify-between p-4 shadow-lg bg-white">
    <div>
      <p className="text-xs">1泊料金</p>
      <p className="font-semibold">¥{stayFee}</p>
      <ErrorText errorText="*契約しなかった場合のみ" />
    </div>
    {/* MVP: GoogleFormに飛ばす(固定値) */}
    <div className="w-40">
      <PlainLink target='_blank' innerText="予約する" path={reserve_url} />
    </div>
  </div>
)