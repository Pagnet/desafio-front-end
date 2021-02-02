import { getLastSegment } from "../url";

describe("getLastSegment", () => {
  it("returns last segment of given url", () => {
    const url1 = "http://www.loremipsum.com/lorem";
    const url2 = "http://www.loremipsum.com/lorem/ipsum";
    const url3 = "http://www.loremipsum.com/0";
    const url4 = "http://www.loremipsum.com/false";

    expect(getLastSegment(url1)).toEqual("lorem");
    expect(getLastSegment(url2)).toEqual("ipsum");
    expect(getLastSegment(url3)).toEqual("0");
    expect(getLastSegment(url4)).toEqual("false");
  });

  it("returns last segment of given url when there are trailing slash", () => {
    const url1 = "http://www.loremipsum.com/lorem/";
    const url2 = "http://www.loremipsum.com/lorem/ipsum/";
    const url3 = "http://www.loremipsum.com/0/";
    const url4 = "http://www.loremipsum.com/false/";

    expect(getLastSegment(url1)).toEqual("lorem");
    expect(getLastSegment(url2)).toEqual("ipsum");
    expect(getLastSegment(url3)).toEqual("0");
    expect(getLastSegment(url4)).toEqual("false");
  });
});
