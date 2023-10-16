import { BACKEND_DB_ROUTE } from '@env'

const PRIMARY_URL = BACKEND_DB_ROUTE;

export const API_URLS = {
  PRIMARY_URL,
  TEST: PRIMARY_URL + 'test/',
  INFO: PRIMARY_URL + 'info/',
};
