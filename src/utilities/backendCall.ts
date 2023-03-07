import axios from './backendService';

export const request = async (url: string) => {
  const res = await axios.get(url);
  if (res.status === 200) {
    return res.data;
  } else {
    throw res;
  }
};
