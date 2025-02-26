import StockList from "../../../components/products/stock/StockList";
import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../../../config";

const Stock = () => {
  const [products, setProducts] = useState([]);
  const [rows, setRows] = useState([]);
  const [refresh, setRefresh] = useState(false);

  // Récupération des produits depuis le backend
  
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${config.apiUrl}/product/stock`);
        setProducts(response.data.products);

      } catch (error) {
        console.error(
          "Erreur lors de la récupération des produits :",
          error
        );
      }
    };
    fetchCategories();
  }, [refresh]);

  return (
    <div>
      {products && <StockList data = {products} rows={rows} setRows={setRows} refresh={refresh} setRefresh={setRefresh}/>}
    </div>
  );
};

export default Stock;
