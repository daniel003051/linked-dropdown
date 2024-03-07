import { KintoneRestAPIClient } from "@kintone/rest-api-client";

// 
// const request = new KintoneRestAPIClient({
//   auth: { apiToken: 'ZF72HmlDTJVmDAiOTPEqLGZ285eOWIsbPSZJYPFi' },
// })

// 縣市資料
const requestByData = new KintoneRestAPIClient({
  auth: { apiToken: 'bLbmomW4zE8rK598U2n0tVkXLyrXpg9HmU4HbWZR' },
})

export const getCitysData = () => requestByData.record.getRecords<kintone.types.cityItem>({
  app: '41',
  fields: ['city', 'town']
})
