import RequestError from "./reques-error";

const request = async function (url: string) {
  try {
    const response = await fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new RequestError(res);
        }
      })
      .then((data) => data);

    return response;
  } catch (e) {
    throw e;
  }
};

export default request;
