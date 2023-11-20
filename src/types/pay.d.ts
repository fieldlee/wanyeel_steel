/** 订单支付 */
export type OrderPayItem = {
  uid?: string
  // 订单号
  uidOrder: string
  // 采购数量
  orderNumber: number
  // 入库数量
  storageNumber: number
  //采购重量、
  buyWeight: number
  //入库重量、
  storageWeight: number
  //结算重量、
  payWeight: number
  //采购金额
  buyAmount: number
  //托盘利息、
  agreeRate: number
  // 结算数量
  payNumber: number
  //结算金额（含税）、
  payAmount: number
  //税额、
  rateAmount: number
  //已核销金额、
  payedAmount: number
  //待补退金额、
  backAmount: number
  //资金流向
  moneyWay: string
  // 结算日期
  payDate: Date
  // 结算人
  payPerson: string
  // 备注
  mome: string
}
