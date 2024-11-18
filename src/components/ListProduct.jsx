import React from "react";
import { formatMoney } from "../utils/formatData";
import ProductDetail from "./ProductDetail";

export default function ListProduct() {
  // Tạo mảng sản phẩm
  const products = [
    {
      id: 1,
      name: "Dưa hấu",
      price: 200000,
      quantity: 10,
    },
    {
      id: 2,
      name: "Dưa lê",
      price: 250000,
      quantity: 20,
    },
    {
      id: 3,
      name: "Táo",
      price: 30000,
      quantity: 15,
    },
    {
      id: 4,
      name: "Xoài",
      price: 40000,
      quantity: 25,
    },
  ];

  // Bước 1: Chuẩn bị dữ liệu trong component Cha
  const productName = "Nho xanh";
  const price = 35000;

  // Bước 2: Đặt tên props trong thẻ mở của Component Con kèm theo dữ liệu cần truyền

  // Bước 3: Tại component con, lấy dữ liệu từ props trong tham số của hàm
  return (
    <div>
      <h3
        style={{
          color: "#fff",
          backgroundColor: "green",
          fontWeight: 700,
        }}
        className="product-title"
      >
        Danh sách sản phẩm
      </h3>
      <table border={1}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Chức năng</th>
          </tr>
        </thead>

        <tbody>
          {/* Cách 1 */}
          {products.map((product, index) => {
            return (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.name}</td>
                <td>{formatMoney(product.price, "USD")}</td>

                <td>{product.quantity}</td>
                <td>
                  <button>Sửa</button>
                  <button>Xóa</button>
                </td>
              </tr>
            );
          })}
          -------------------------------
          {/* Cách 2 */}
          {products.map((product, index) => (
            <ProductDetail key={product?.id} product={product} index={index} />
          ))}
        </tbody>
      </table>

      <label htmlFor=""></label>
    </div>
  );
}
