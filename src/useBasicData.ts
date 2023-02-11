import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import MockAdaptor from 'axios-mock-adapter';
import { data, Data } from './basic-data';

var mock = new MockAdaptor(axios);
mock.onGet("api/basicData").reply(200, data
)

const getBasicData = async (query: BasicDataQuery) => {
  console.log(query);
  const { data } = await axios.get("api/basicData");
  return data;
}

export type BasicDataQuery = {}

export const useBasicData = (query: BasicDataQuery) => {
  return useQuery<Data[], Error>(['basicData', query], () => getBasicData(query))
}