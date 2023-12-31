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
