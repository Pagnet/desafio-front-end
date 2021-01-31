export default class RequestError {
  message: string;
  status: number;
  constructor(response) {
    this.message = response.statusText;
    this.status = response.status;
  }
}
