/** 订单 */
export type OrderItem = {
  uid?: string
  // 采购模式（选择）（现货采购、期货采购、获取转移、托盘采购、预售采购）
  buyMode: string
  // 供应商（选择）
  supplyDept: string
  // 采购日期
  buyDate: Date
  // 协议号（选择）
  agreeId?: string
  // 货源单位（选择）
  deliveryDept: string
  // 是否直接入库（仅入库，仅开单后续手工入库，入库并结算，采购付款后直接入库）
  storageMode: string
  // 预付款信息
  prepayScale: number
  // 付款信息（预计付款日期、付款账号）
  payDate: Date
  //付款账号
  payAccount: string
  //预付款账号
  payAmount: number
  // 总付款金额
  allPayAmount: number
  // 产品明细
  orderProductList: OrderProductItem[]
  // 运输杂费
  transCost: TranCost[]
  // 备注
  mome: string
}

export type OrderProductItem = {
  uid?: string
  // 品种（选择）
  variety: string
  // 产地（选择待补充）
  origin: string
  // 牌号（选择待补充）
  shopSign: string
  // 规格（规格提示）
  spec: string
  // 计重方式（选择）
  caclMode: string
  // 采购数量（输入）
  buyNumber: number
  // 件重（计算待输入）
  oneWeight: number
  // 采购重量（输入）
  buyWeight: number
  // 仓库（选择待输入）
  warehouse: string
  // 协议单价（填写）
  agreeUnitprice: number
  // 协议金额（计算）
  agreeAmout: number
  // 税率（默认13 待修改）
  taxRate: number
  // 钢厂资源号（）
  resourceNumber: string
  // 钢厂合同号
  contractNumber: string
  // 备注
  mome: string
}

export type TranCost = {
  uid?: string
  // 外来单位
  supplyDept: string
  // 收支方向
  inOut: string
  // 收付款方式
  costWay: string
  // 费用日期
  costDate: Date
  // 费用类型（装卸费、仓储费、运费、杂费、托盘利息）
  costCategory: string
  // 计件方式（整单、重量、数量）
  unitCategory: string
  // 费用单价
  unitPrice: number
  // 税率
  costRate: number
  // 总额
  costAmount: number
  // 备注）
  mome: string
}
