interface APIResponse<T> {
  status: number | null;
  message: string | null;
  data: T;
}

interface ResponseImage {
  alt: string;
  src: string;
}
