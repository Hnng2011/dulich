interface APIResponse<T> {
  status: number | null;
  message: string | null;
  data: T;
}

interface ResponseImage {
  alt: string;
  src: string;
}

interface TourInfo {
  img : string,
  name : string,
  timeStart : Date,
  timeEnd : Date,
  transport : Array<string>,
  price : [number , "vnd" | "usd"],
  fixedPrice?: [number , "vnd" | "usd"],
  tag?: 'hot' |  'fav'
}