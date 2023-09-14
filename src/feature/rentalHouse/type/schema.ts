import { REQUIRE_FIELD } from "@/constants/messages";
import * as z from "zod";

//SignUpのschema
export const CreateRentalHouseSchema = z.object({
  name: z.string().min(1, REQUIRE_FIELD),
  address: z.string().min(1, REQUIRE_FIELD),
  nearest_station: z.string().min(1, REQUIRE_FIELD),
  max_floor_number: z.coerce.number().min(1).max(100, REQUIRE_FIELD),
  building_age: z.coerce.number().min(1, REQUIRE_FIELD),
  structure_type_id: z.coerce.number().min(1).max(3, REQUIRE_FIELD),
  // rentalHousePhotos: z.array(z.unknown()).min(1, REQUIRE_FIELD),
  rental_house_photos: z.unknown(),
});
export type CreateRentalInput = z.infer<typeof CreateRentalHouseSchema>;
