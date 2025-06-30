import { postRepository } from "@/repositories/post";
import { cache } from "react";

export const findAllPublicPost = cache(
  async () => await postRepository.findAllPublic(),
)
