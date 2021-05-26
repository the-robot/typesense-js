import ApiCall from "./ApiCall";

const RESOURCEPATH = "/operations";

export default class Operations {
    constructor(private apiCall: ApiCall) {}

    perform(operationName: string, queryParameters: Record<string, any> = {}) {
        return this.apiCall.post(`${RESOURCEPATH}/${operationName}`, {}, queryParameters);
    }
}
