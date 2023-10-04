import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [totalProduct, setTotalProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemPerPage, setItemPerPage] = useState(6);
  const totalPages = Math.ceil(totalProduct / itemPerPage);
  //   for (let i = 0; i < totalPages; i++) {
  //     pageNumbers.push(i)
  //   }
  const pageNumbers = [...Array(totalPages).keys()];

  // useEffect(() => {
  //   fetch("http://localhost:5000/products")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data);
  //       setProducts(data);
  //     });
  // }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://localhost:5000/products?page=${currentPage}&limit=${itemPerPage}}`
      );
      const data = await response.json();
      setProducts(data);
    }
    fetchData();
  }, [currentPage, itemPerPage]);

  useEffect(() => {
    fetch("http://localhost:5000/totalProduct")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.totalProduct);
        setTotalProduct(data.totalProduct);
      });
  }, []);

  const options = [5, 10, 15, 20, 30];
  function handleSelectChange(event) {
    setItemPerPage(parseInt(event.target.value));
    setCurrentPage(0);
  }
  return (
    <div>
      <SectionTitle
        subTitle={"Popular Products"}
        title={"Browse Our Products"}
        decs={
          "the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. "
        }
      ></SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      {/* <div className="text-center mt-6">
        <button className="btn btn-outline text-[#ff3811] border-2 border-[#ff3811] font-semibold mb-8">
          More Services
        </button>
      </div> */}
      <div className="text-center mb-16 mt-12">
        {/* <h2 className="font-semibold mb-3">
          Current Page: {currentPage} And Per Page: {itemPerPage}
        </h2> */}
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={
              currentPage === number
                ? "selected btn btn-sm mr-2"
                : "btn btn-sm mr-2"
            }
          >
            {number}
          </button>
        ))}
        <select value={itemPerPage} onChange={handleSelectChange}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Products;
