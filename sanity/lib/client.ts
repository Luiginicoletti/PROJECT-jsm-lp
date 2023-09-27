import { createClient } from "next-sanity";

import { token, apiVersion, dataset, projectId, useCdn } from "../env";

export const readClient = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

export const WriteClient = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token,
});
