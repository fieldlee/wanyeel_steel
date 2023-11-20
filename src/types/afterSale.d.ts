/** 订单售后 */
export type AfterSaleOrderItem = {
  uid?: string
  // 订单
  uidOrder: string
  // 售后类型 （退货退款、仅退款）
  afterSaleMode: string
  // 供应商（选择）
  supplyDept: string
  // 售后日期
  afterSaleDate: Date
  // 退款类型 (返利、质量异议、其他）
  backMode: string
  // 预计退款日期
  expectBackDate: Date
  // 应退金额
  expectBackAmount: number
  // 付款类型
  costCategory: string
  // 退款去向
  backWay: string
  // 备注
  mome: string
}
