import React, { useContext, useState, useEffect, useMemo } from "react";
import { apiContext } from "./DashboardMain";
import { myStockCollectionContext } from "./DashboardMain";
import { categoryContext } from "./DashboardMain";

const CollectionStock = () => {
  const apiValues = useContext(apiContext);
  const myStockCollection = useContext(myStockCollectionContext);
  const { category, setCategory } = useContext(categoryContext);

  // 取得 API to results;
  const [results, setResults] = useState(myStockCollection);

  useEffect(() => {
    search(apiValues);
  }, []);

  const search = async (url) => {
    const dataFetch = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    let parsedData = await dataFetch.json();
    setResults(parsedData.msgArray);
  };

  // 結合 API results 與 collection
  const [originData, setOriginData] = useState(myStockCollection);

  useEffect(() => {
    if (results !== []) {
      const mapTwoValue = myStockCollection.map((e) => {
        const temp = results.find((ele) => e.stockKey === ele.c);
        if (temp !== undefined) {
          e.stockInfo = Number(temp.b.split("_")[0]).toFixed(2);
          e.yesterdayValue = Number(temp.y).toFixed(2);
        }
        return e;
      });
      setOriginData(mapTwoValue);
      return;
    }
  }, [results]);

  useEffect(() => {
    setShowData(dataMap());
  }, [originData]);

  const dataMap = () =>
    originData.map((originData) => {
      if (Number(originData.stockInfo) > Number(originData.yesterdayValue)) {
        return (
          <tbody key={originData.key}>
            <tr
              onClick={() => {
                setCategory(originData.stockName);
              }}
            >
              <td>
                <svg
                  className="collection"
                  width="20"
                  height="26"
                  viewBox="0 0 20 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="collectionBackground"
                    d="M2.85714 0H17.1429C18.7143 0 20 1.3 20 2.88889V26L10 21.6667L0 26L0.014286 2.88889C0.014286 1.3 1.28571 0 2.85714 0Z"
                  />
                  <path
                    className="collectionBorder"
                    d="M17.1429 0H2.85714C1.28571 0 0.014286 1.3 0.014286 2.88889L0 26L10 21.6667L20 26V2.88889C20 1.3 18.7143 0 17.1429 0ZM17.1429 21.6667L10 18.5178L2.85714 21.6667V2.88889H17.1429V21.6667Z"
                    fill="#E23965"
                  />
                </svg>
              </td>
              <td>
                <p>{originData.stockName} </p>
                <h6>{originData.stockKey}</h6>
              </td>
              <td>
                <p style={{ color: "#e23965" }}>{originData.stockInfo}</p>
              </td>
            </tr>
          </tbody>
        );
      }
      if (Number(originData.stockInfo) < Number(originData.yesterdayValue)) {
        return (
          <tbody key={originData.key}>
            <tr
              onClick={() => {
                setCategory(originData.stockName);
              }}
            >
              <td>
                <svg
                  className="collection"
                  width="20"
                  height="26"
                  viewBox="0 0 20 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="collectionBackground"
                    d="M2.85714 0H17.1429C18.7143 0 20 1.3 20 2.88889V26L10 21.6667L0 26L0.014286 2.88889C0.014286 1.3 1.28571 0 2.85714 0Z"
                  />
                  <path
                    className="collectionBorder"
                    d="M17.1429 0H2.85714C1.28571 0 0.014286 1.3 0.014286 2.88889L0 26L10 21.6667L20 26V2.88889C20 1.3 18.7143 0 17.1429 0ZM17.1429 21.6667L10 18.5178L2.85714 21.6667V2.88889H17.1429V21.6667Z"
                    fill="#E23965"
                  />
                </svg>
              </td>
              <td>
                <p>{originData.stockName} </p>
                <h6>{originData.stockKey}</h6>
              </td>
              <td>
                <p style={{ color: "#38e54d" }}>{originData.stockInfo}</p>
              </td>
            </tr>
          </tbody>
        );
      }
      if (Number(originData.stockInfo) === Number(originData.yesterdayValue)) {
        return (
          <tbody key={originData.key}>
            <tr
              onClick={() => {
                setCategory(originData.stockName);
              }}
            >
              <td>
                <svg
                  className="collection"
                  width="20"
                  height="26"
                  viewBox="0 0 20 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="collectionBackground"
                    d="M2.85714 0H17.1429C18.7143 0 20 1.3 20 2.88889V26L10 21.6667L0 26L0.014286 2.88889C0.014286 1.3 1.28571 0 2.85714 0Z"
                  />
                  <path
                    className="collectionBorder"
                    d="M17.1429 0H2.85714C1.28571 0 0.014286 1.3 0.014286 2.88889L0 26L10 21.6667L20 26V2.88889C20 1.3 18.7143 0 17.1429 0ZM17.1429 21.6667L10 18.5178L2.85714 21.6667V2.88889H17.1429V21.6667Z"
                    fill="#E23965"
                  />
                </svg>
              </td>
              <td>
                <p>{originData.stockName} </p>
                <h6>{originData.stockKey}</h6>
              </td>
              <td>
                <p style={{ color: "#ffffff" }}>{originData.stockInfo}</p>
              </td>
            </tr>
          </tbody>
        );
      }
    });

  const [showData, setShowData] = useState(dataMap());

  return (
    <div className="collectionStock">
      <div className="collectionStockTitle">
        <svg
          className="collection"
          width="20"
          height="26"
          viewBox="0 0 20 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="collectionBackground"
            d="M2.85714 0H17.1429C18.7143 0 20 1.3 20 2.88889V26L10 21.6667L0 26L0.014286 2.88889C0.014286 1.3 1.28571 0 2.85714 0Z"
          />
          <path
            className="collectionBorder"
            d="M17.1429 0H2.85714C1.28571 0 0.014286 1.3 0.014286 2.88889L0 26L10 21.6667L20 26V2.88889C20 1.3 18.7143 0 17.1429 0ZM17.1429 21.6667L10 18.5178L2.85714 21.6667V2.88889H17.1429V21.6667Z"
            fill="#E23965"
          />
        </svg>
        <input type="text" />
      </div>
      <div className="collectionStockListBox">
        <table>{showData}</table>
      </div>
    </div>
  );
};

export default CollectionStock;
