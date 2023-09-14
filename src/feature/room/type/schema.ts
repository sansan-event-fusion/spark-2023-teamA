import { REQUIRE_FIELD } from "@/constants/messages";
import * as z from "zod";

//SignUpのschema
export const CreateRoomSchema = z.object({
  name: z.string().min(1, REQUIRE_FIELD),
  stay_fee: z.coerce.number().min(1, REQUIRE_FIELD),
  rent: z.coerce.number().min(1, REQUIRE_FIELD),
  thanks_money: z.coerce.number().min(1, REQUIRE_FIELD),
  security_deposit: z.coerce.number().min(1, REQUIRE_FIELD),
  contract_duration: z.string().min(1, REQUIRE_FIELD),
  floor_number: z.string().min(1, REQUIRE_FIELD),
  layout: z.string().min(1, REQUIRE_FIELD),
  maintenance_fee: z.string().min(1, REQUIRE_FIELD),
  mansion_room_photos: z.unknown(),
  reserve_url: z.string().min(1, REQUIRE_FIELD),
});
export type CreateRoomInput = z.infer<typeof CreateRoomSchema>;

      // const rental_house = {
       //   name: name,
        //   layout: layout,
        //   thanks_money: thanks_money,
        //   security_deposit: security_deposit,
        //   floor_number: floor_number,
        //   stay_fee: stay_fee,
        //   rent: rent,
      //   maintenance_fee: maintenance_fee,
       //   contract_duration: contract_duration,
      //   mansion_room_photos:
    // }