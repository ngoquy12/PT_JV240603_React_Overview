import React from "react";

// Cách 1
// export default function ProductDetail(props) {
//   console.log("Props: ", props.productNameProp);

//   const propsValue = props.productNameProp;

//   return (
//     <div>
//       <h3>Product: {propsValue}</h3>
//     </div>
//   );
// }

// Cách 2
// export default function ProductDetail(props) {
//   const { productNameProp, priceProps } = props;

//   return (
//     <div>
//       <h3>Product: {productNameProp}</h3>
//       <h3>Price: {priceProps}</h3>
//     </div>
//   );
// }

// Cách 3
// export default function ProductDetail({ productNameProp, priceProps }) {
//   return (
//     <div>
//       <h3>Product: {productNameProp}</h3>
//       <h3>Price: {priceProps}</h3>
//     </div>
//   );
// }

export default function ProductDetail({ product, index }) {
  // ?. => optional chain (nếu data khác null hoặc undefined)

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{product?.name}</td>
      <td>{product?.price}</td>
      <td>{product?.quantity}</td>
      <td>
        <button>Sửa</button>
        <button>Xóa</button>
      </td>
    </tr>
  );
}
