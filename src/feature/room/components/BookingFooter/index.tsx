import { PlainButton } from "@/components/atoms/Button";
import { ErrorText } from "@/components/atoms/ErrorText";
import { PlainLink } from "@/components/atoms/Link";

type Props = {
  stayFee: number
}
export const BookingFooter = ({stayFee}: Props): JSX.Element => (
  <div className="fixed bottom-0 w-full flex justify-between p-4 shadow-lg bg-white">
    <div>
      <p className="text-xs">1泊料金</p>
      <p className="font-semibold">¥{stayFee}</p>
      <ErrorText errorText="*契約しなかった場合のみ" />
    </div>
    {/* MVP: GoogleFormに飛ばす(固定値) */}
    <PlainLink innerText="予約する" path='https://calendar.app.google/Zce3gPC5gnkPsdYQA' />
  </div>
)