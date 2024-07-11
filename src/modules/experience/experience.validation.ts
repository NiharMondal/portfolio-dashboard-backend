import { z } from "zod";

const createExperience = z.object({
    position:         z.string({required_error:"Position must be required"}).trim(),
  company   :       z.string({required_error:"Company name must be required"}).trim(),
  start_date:       z.string({required_error:"Start date must be required"}),
  end_date  :       z.string({}).optional(),
  responsibilities: z.string({required_error:"Write about your work responsibilities"})
})

export const experienceValidation = {createExperience}