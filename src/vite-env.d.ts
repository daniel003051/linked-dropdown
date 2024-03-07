/// <reference types="vite/client" />
declare namespace kintone.types {
  interface Fields {
    $id?: kintone.fieldTypes.Id
    $revision?: kintone.fieldTypes.Revision
    更新人?: kintone.fieldTypes.Modifier
    创建人?: kintone.fieldTypes.Creator
    更新时间?: kintone.fieldTypes.UpdatedTime
    创建时间?: kintone.fieldTypes.CreatedTime
    key?: kintone.fieldTypes.RecordNumber
    [key: string]: any;
  }

  interface cityItem extends Fields{
    city: kintone.fieldTypes.SingleLineText
    town: kintone.fieldTypes.SingleLineText
  }
}

declare namespace kintoneTypes {
  interface Test {
    city: kintone.fieldTypes.SingleLineText
  }
}
  
interface KintoneEvent {
  appId: number
  record: kintone.types.SavedFields
  type: string
}


interface ProcessEvent {
  action: {
    value: '開始處理' | '完成'
  }
  nextStatus: {
    value: '處理中' | '結束'
  }
  record: {
    orderId: {
      value: string
    }
  }
}
