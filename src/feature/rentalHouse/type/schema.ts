import { EIGHT_CHARACTERS_OR_MORE, REQUIRE_FIELD } from "@/constants/messages";
import * as z from "zod";

//SignUpのschema
export const CreateRentalHouseSchema = z.object({
  name: z.string().min(1, REQUIRE_FIELD),
  address: z.string().min(8, EIGHT_CHARACTERS_OR_MORE),
  nearestStation: z.string().min(1, REQUIRE_FIELD),
  maxFloorNumber: z.coerce.number().max(100, REQUIRE_FIELD),
  buildingAge: z.coerce.number().min(1, REQUIRE_FIELD),
  structure_type: z.coerce.number().max(3, REQUIRE_FIELD),
  // rentalHousePhotos: 
});
export type CreateRentalInput = z.infer<typeof CreateRentalHouseSchema>;
