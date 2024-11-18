/**
 * Hàm định dạng tiền tệ Việt Nam
 * @param {*} money Chuỗi tiền tệ cần định dạng
 * @returns Chuỗi tiền tệ đã định dạng
 * Auth: NVQUY (18/11/2024)
 */
export const formatMoney = (money, type = "VND") => {
  return money.toLocaleString("it-IT", { style: "currency", currency: type });
};
