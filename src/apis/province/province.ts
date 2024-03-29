import axios from "axios";
import { env } from "src/env/env";
export const getVietNamProvinceApi = async (depth: number | string) =>
  await axios.get(`${env.province_baseURL}${depth}`);
