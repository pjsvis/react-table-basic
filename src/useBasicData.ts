import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import MockAdaptor from 'axios-mock-adapter';
import { basicData, Data } from './basic-data';

const url = "https://swapi.dev/api/people/1"

const isMock = false;
if (isMock) {
  var mock = new MockAdaptor(axios);
  mock.onGet("https://swapi.dev/api/people/1").reply(200, {stuff: "nothing yet"});
  mock.onGet("api/basicData").reply(200, basicData);
}

const getBasicData = async (query: BasicDataQuery): Promise<Data[]> => {
  const { data } = await axios.get("api/basicData");
  console.log('data', data);
  return data;
}

export type BasicDataQuery = {}

export const useBasicData = (query: BasicDataQuery) => {
  return useQuery(['api/basicData', query], () => getBasicData(query))
}

const getSwapiData = async (): Promise<any> => {
  const { data } = await axios.get(url);
  return data;
}

export const useSwapiQuery = () => {
  return useQuery(['swapiData'], () => getSwapiData())
}