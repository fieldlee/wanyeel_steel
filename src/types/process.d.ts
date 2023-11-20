/** 一级分类项 */
export type ProcessTopItem = {
  /** 一级分类id */
  id: string
  /** 一级分类名称 */
  name: string
  /** 一级分类图片 */
  picture: string
  /** 背景图片 */
  bgPicture: string
  /** 是否选中 */
  isSelectd: boolean
  /** 背景颜色 */
  bgColor: string
  /** 文字颜色 */
  textColor: string
}

/** 协议产品 */
export type ProductItem = {
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

export type AgreeItem = {
  uid?: string
  // 协议类型
  agreeType?: string
  // 供应商
  supplyDept: string
  // 供货单位
  deliveryDept: string
  // 签订人
  agreePerson: string
  // 签订日期
  agreeDate: Date
  // 预付款比例
  prepayScale: number
  // 预付款金额
  prepayAmount: number
  // 协议单价（填写）
  unitPrice: number
  // 协议金额（计算）
  agreeAmount: number
  // 保证金金额
  depositAmount: number
  // 计息开始日期
  interestDate: Date
  // 计息年化利率
  interestRale: number
  // 产品列表
  productList: ProductItem[]
  // 备注
  mome: string
}
