import { REQUIRE_FIELD } from "@/constants/messages";
import * as z from "zod";

//SignUpのschema
export const CreateRoomSchema = z.object({
  name: z.string().min(1, REQUIRE_FIELD),
  stayFee: z.coerce.number().min(1, REQUIRE_FIELD),
  rent: z.coerce.number().min(1, REQUIRE_FIELD),
  thanksMoney: z.coerce.number().min(1, REQUIRE_FIELD),
  securityDeposit: z.coerce.number().min(1, REQUIRE_FIELD),
  contractDuration: z.string().min(1, REQUIRE_FIELD),
  floorDeposit: z.string().min(1, REQUIRE_FIELD),
  layout: z.string().min(1, REQUIRE_FIELD),
  rentalHousePhotos: z.unknown(),
});
export type CreateRoomInput = z.infer<typeof CreateRoomSchema>;
