import React from "react";
import { useState, useEffect, useMemo } from "react";

const OrderHistory = () => {
  let orderHistoryData = [
    {
      key: 1,
      mineHistoryStockKey: "00632R",
      mineHistoryStock: "元大台灣50反1",
      finishDate: "2022-11-03 06:37:51",
      value: 33891,
      historyUpDown: "- $ 723.1",
    },
    {
      key: 2,
      mineHistoryStockKey: "2609",
      mineHistoryStock: "陽明",
      finishDate: "委託已取消",
      value: 5489,
      historyUpDown: "+ $ 0",
    },
    {
      key: 3,
      mineHistoryStockKey: "2615",
      mineHistoryStock: "南光",
      finishDate: "2022-09-01 09:41:33",
      value: 40,
      historyUpDown: "+ $ 0.0",
    },
    {
      key: 4,
      mineHistoryStockKey: "6443",
      mineHistoryStock: "寶齡富錦",
      finishDate: "2022-11-11 11:11:33",
      value: 3487,
      historyUpDown: "- $ 9996.1",
    },
    {
      key: 5,
      mineHistoryStockKey: "1605",
      mineHistoryStock: "元大滬深300正2",
      finishDate: "委託已取消",
      value: 511,
      historyUpDown: "+ $ 0",
    },
    {
      key: 6,
      mineHistoryStockKey: "00632R",
      mineHistoryStock: "元大台灣50反1",
      finishDate: "2022-10-27 09:51:33",
      value: 1331,
      historyUpDown: "+ $ 2291.1",
    },
  ];

  const dataMap = () =>
    originData.map((v) => {
      if (v.finishDate === "委託已取消") {
        return (
          <tbody key={v.key}>
            <tr>
              <td>
                <p style={{ color: "#e23965" }}>{v.finishDate}</p>
              </td>
              <td>
                <p>{v.mineHistoryStock} </p>
                <br />
                <span>{v.mineHistoryStockKey}</span>
              </td>
              <td>
                <p>{v.value + " 股"}</p>
              </td>
              <td>
                <p>{v.historyUpDown}</p>
              </td>
            </tr>
          </tbody>
        );
      }
      if (
        v.historyUpDown[0] === "+" &&
        Number(v.historyUpDown.split(" ")[2]) === "0"
      ) {
        return (
          <tbody key={v.key}>
            <tr>
              <td>
                <p style={{ color: "#ffffff" }}>{v.finishDate.split(" ")[0]}</p>
                <br />
                <p style={{ color: "#ffffff" }}>{v.finishDate.split(" ")[1]}</p>
              </td>
              <td>
                <p>{v.mineHistoryStock} </p>
                <br />
                <span>{v.mineHistoryStockKey}</span>
              </td>
              <td>
                <p>{v.value + " 股"}</p>
              </td>
              <td>
                <p style={{ color: "#ffffff" }}>{v.historyUpDown}</p>
              </td>
            </tr>
          </tbody>
        );
      }
      if (v.historyUpDown[0] === "+") {
        return (
          <tbody key={v.key}>
            <tr>
              <td>
                <p style={{ color: "#ffffff" }}>{v.finishDate.split(" ")[0]}</p>
                <br />
                <p style={{ color: "#ffffff" }}>{v.finishDate.split(" ")[1]}</p>
              </td>
              <td>
                <p>{v.mineHistoryStock} </p>
                <br />
                <span>{v.mineHistoryStockKey}</span>
              </td>
              <td>
                <p>{v.value + " 股"}</p>
              </td>
              <td>
                <p style={{ color: "#e23965" }}>{v.historyUpDown}</p>
              </td>
            </tr>
          </tbody>
        );
      }
      if (v.historyUpDown[0] === "-") {
        return (
          <tbody key={v.key}>
            <tr>
              <td>
                <p style={{ color: "#ffffff" }}>{v.finishDate.split(" ")[0]}</p>
                <br />
                <p style={{ color: "#ffffff" }}>{v.finishDate.split(" ")[1]}</p>
              </td>
              <td>
                <p>{v.mineHistoryStock} </p>
                <br />
                <span>{v.mineHistoryStockKey}</span>
              </td>
              <td>
                <p>{v.value + " 股"}</p>
              </td>
              <td>
                <p style={{ color: "#38e54d" }}>{v.historyUpDown}</p>
              </td>
            </tr>
          </tbody>
        );
      }
    });

  const [originData, setOriginData] = useState(orderHistoryData);
  const [showData, setShowData] = useState(dataMap());
  // const [search, setSearch] = useState("");

  const doSearch = (e) => {
    const filterData = orderHistoryData.filter(
      (orderHistoryData) =>
        orderHistoryData.mineHistoryStockKey.includes(e.target.value) ||
        orderHistoryData.mineHistoryStock.includes(e.target.value)
    );
    setOriginData(filterData);
  };

  useEffect(() => {
    setShowData(dataMap());
  }, [originData]);

  return (
    <div className="orderHistory">
      <div className="titleBox">
        <h3>歷史委託記錄</h3>
      </div>
      <div className="orderHistoryBox">
        <label htmlFor="orderTime">
          <p className="pr12">查詢區間</p>
          <select name="orderTime" id="orderTime">
            <option value="">請選擇查詢區間</option>
            <option value="">30天內成交</option>
            <option value="">60天內成交</option>
            <option value="">90天內成交</option>
            <option value="">已取消委託</option>
          </select>
        </label>
        <label htmlFor="stockName">
          <p className="pr12">股票名稱</p>
          <input
            type="text"
            name="stockName"
            id="stockName"
            autoComplete="off"
            onChange={doSearch}
          />
        </label>
      </div>
      <table className="orderHistoryTitle">
        <thead>
          <tr>
            <th>
              <p>完成時間</p>
            </th>
            <th>
              <p>股票別</p>
            </th>
            <th>
              <p>單位</p>
            </th>
            <th>
              <p>損益</p>
            </th>
          </tr>
        </thead>
      </table>
      <div className="orderHistoryListBox">
        <table className="orderHistoryList">{showData}</table>
      </div>
    </div>
  );
};

export default OrderHistory;
