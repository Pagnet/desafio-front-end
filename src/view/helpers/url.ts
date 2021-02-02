export const getLastSegment = (url: string): string | undefined =>
  url
    .split("/")
    .filter((e) => Boolean(e))
    .pop();
