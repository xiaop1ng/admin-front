import { request } from "@/utils/service"
import type * as Table from "./types/table"

/** 查报表数据 */
export function getTableDataApi(params: any) {
  console.info("params", params)
  return request({
    url: "/deviceStatistics/list",
    method: "post",
    params
  })
}

/** 查工单数据 */
export function getWorkTableDataApi(params: any) {
  console.info("params", params)
  return request({
    url: "/ticket/list",
    method: "post",
    params
  })
}