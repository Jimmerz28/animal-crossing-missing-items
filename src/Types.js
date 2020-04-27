// @flow

export type FishBased = {
  name: string,
  imageLink: URL,
  price: number,
  location: string,
  shadowSize: string,
  time: string,
  jan: boolean,
  feb: boolean,
  mar: boolean,
  apr: boolean,
  may: boolean,
  jun: boolean,
  jul: boolean,
  aug: boolean,
  sep: boolean,
  oct: boolean,
  nov: boolean,
  dec: boolean
};

export type FishWithFound = FishBased & {
  found: Boolean
}

export type Item = FishWithFound;
