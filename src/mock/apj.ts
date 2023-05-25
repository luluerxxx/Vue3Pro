// 这里存放mock使用的各种接口
import { fetch } from "./request";

/*表格查询接口*/
export function tableList(url: any, params?: any) {
    return fetch(url, params);
}
