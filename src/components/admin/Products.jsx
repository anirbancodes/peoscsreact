import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  const [mode, setMode] = useState("");

  useEffect(() => {
    fetch("http://localhost:5454/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div
      className="d-f fd-c g-10 "
      style={{
        padding: "20px",
        // background: "linear-gradient(135deg, #1b2b60, #461d55)",
        // color: "white",
      }}
    >
      <button
        onClick={() => {
          mode == "" ? setMode("create") : setMode("");
        }}
      >
        {!mode && <>Create new product</>}
        {mode && <>Cancel</>}
      </button>

      {mode && <CreateProduct />}
      {!mode &&
        products?.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                display: "flex",
                gap: "20px",
                border: "1px solid lightgray",
                padding: "5px 10px",
                borderRadius: "6px",
              }}
            >
              <img src="" alt="photo" />
              <div className="d-f fd-c" style={{ lineHeight: "0px" }}>
                <div className="d-f g-10">
                  <p>{item.productName}</p>
                  <p>₹{item.price}</p>
                  <p>CatID: {item.categoryId}</p>
                </div>
                <p>{item.description}</p>
                <div className="d-f g-10">
                  <p>Rating: {item.rating || 0}</p>
                  <p>Stock: {item.stockQuantity}</p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Products;

function CreateProduct() {
  const [details, setDetails] = useState({
    productName: "",
    description: "",
    categoryId: 0,
    rating: "",
    price: 0,
    stockQuantity: 0,
    img: "",
  });
  function handleAddProduct() {
    // e.preventDefault();
    console.log(details);
    fetch("http://localhost:5454/api/products", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: details,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <input
        onChange={(e) =>
          setDetails({ ...details, productName: e.target.value })
        }
        style={{ width: "420px" }}
        type="text"
        placeholder="Product Name"
      />
      <input
        onChange={(e) =>
          setDetails({ ...details, categoryId: Number(e.target.value) })
        }
        type="text"
        placeholder="Category ID"
      />
      <input
        onChange={(e) =>
          setDetails({ ...details, price: Number(e.target.value) })
        }
        type="text"
        placeholder="Price"
      />
      <input
        onChange={(e) => setDetails({ ...details, rating: e.target.value })}
        type="text"
        placeholder="Rating"
      />
      <input
        onChange={(e) =>
          setDetails({ ...details, description: e.target.value })
        }
        style={{ width: "420px" }}
        type="text"
        placeholder="Description"
      />
      <input
        onChange={(e) => setDetails({ ...details, img: e.target.value })}
        style={{ width: "420px" }}
        type="text"
        placeholder="img src uri"
      />
      <input
        onChange={(e) =>
          setDetails({ ...details, stockQuantity: Number(e.target.value) })
        }
        type="text"
        placeholder="Stock Qty"
      />
      <button
        style={{
          width: "180px",
          height: "45px",
        }}
        onClick={handleAddProduct}
      >
        Add Product
      </button>
    </div>
  );
}
