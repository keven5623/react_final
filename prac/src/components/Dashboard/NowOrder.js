import React from "react";
import { useState, useEffect, useMemo } from "react";

let sortStatus = {
  orderStyle: true,
  stockKey: true,
  value: true,
  orderPrice: true,
};

const NowOrder = () => {
  let nowOrderData = [
    {
      key: 1,
      orderStyle: "買進",
      stockName: "元大台灣50反1",
      stockKey: "00632R",
      value: 8787,
      orderPrice: 6987.87,
    },
    {
      key: 2,
      orderStyle: "買進",
      stockName: "陽明",
      stockKey: "2609",
      value: 7878,
      orderPrice: 4987.87,
    },
    {
      key: 3,
      orderStyle: "賣出",
      stockName: "南光",
      stockKey: "2615",
      value: 87878,
      orderPrice: 7.87,
    },
    {
      key: 4,
      orderStyle: "買進",
      stockName: "寶齡富錦",
      stockKey: "6443",
      value: 7,
      orderPrice: 87.87,
    },
    {
      key: 5,
      orderStyle: "買進",
      stockName: "元大滬深300正2",
      stockKey: "1605",
      value: 325,
      orderPrice: 227.87,
    },
    {
      key: 6,
      orderStyle: "賣出",
      stockName: "萬海",
      stockKey: "2618",
      value: 907,
      orderPrice: 987.87,
    },
    {
      key: 7,
      orderStyle: "賣出",
      stockName: "元晶",
      stockKey: "2610",
      value: 8787,
      orderPrice: 117.87,
    },
  ];

  const [orderStyleButtonColor, setOrderStyleButtonColor] = useState("#6F717B");
  const [orderStyleButtonRotate, setOrderStyleButtonRotate] =
    useState("scaleY(1)");
  const [stockKeyButtonColor, setStockKeyButtonColor] = useState("#6F717B");
  const [stockKeyButtonRotate, setStockKeyButtonRotate] = useState("scaleY(1)");
  const [orderValueButtonColor, setOrderValueButtonColor] = useState("#6F717B");
  const [orderValueButtonRotate, setOrderValueButtonRotate] =
    useState("scaleY(1)");
  const [orderPriceButtonColor, setOrderPriceButtonColor] = useState("#6F717B");
  const [orderPriceButtonRotate, setOrderPriceButtonRotate] =
    useState("scaleY(1)");

  const [originData, setOriginData] = useState(nowOrderData);

  const dataMap = () =>
    originData.map((v) => {
      if (v.orderStyle == "賣出") {
        return (
          <tbody key={v.key}>
            <tr>
              <td>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cancelButton"
                  onClick={() => remove(v.key)}
                >
                  <path d="M12 0C5.364 0 0 5.364 0 12C0 18.636 5.364 24 12 24C18.636 24 24 18.636 24 12C24 5.364 18.636 0 12 0ZM18 16.308L16.308 18L12 13.692L7.692 18L6 16.308L10.308 12L6 7.692L7.692 6L12 10.308L16.308 6L18 7.692L13.692 12L18 16.308Z" />
                </svg>
              </td>
              <td>
                <p style={{ color: "#38e54d" }}>{v.orderStyle}</p>
              </td>
              <td>
                <p>{v.stockName} </p>
                <br />
                <span>{v.stockKey}</span>
              </td>
              <td>
                <p>{v.value + " 股"}</p>
              </td>
              <td>
                <p>{v.orderPrice}</p>
              </td>
            </tr>
          </tbody>
        );
      } else if (v.orderStyle == "買進") {
        return (
          <tbody key={v.key}>
            <tr>
              <td>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cancelButton"
                  onClick={() => remove(v.key)}
                >
                  <path d="M12 0C5.364 0 0 5.364 0 12C0 18.636 5.364 24 12 24C18.636 24 24 18.636 24 12C24 5.364 18.636 0 12 0ZM18 16.308L16.308 18L12 13.692L7.692 18L6 16.308L10.308 12L6 7.692L7.692 6L12 10.308L16.308 6L18 7.692L13.692 12L18 16.308Z" />
                </svg>
              </td>
              <td>
                <p style={{ color: "#e23965" }}>{v.orderStyle}</p>
              </td>
              <td>
                <p>{v.stockName} </p>
                <br />
                <span>{v.stockKey}</span>
              </td>
              <td>
                <p>{v.value + " 股"}</p>
              </td>
              <td>
                <p>{v.orderPrice}</p>
              </td>
            </tr>
          </tbody>
        );
      }
    });

  const [showData, setShowData] = useState(dataMap());

  const remove = (m) => {
    const filterData = originData.filter((originData) => originData.key !== m);
    setOriginData(filterData);
  };

  useEffect(() => {
    setShowData(dataMap());
  }, [originData]);

  const sortOrderStyle = () => {
    setOrderStyleButtonColor("#4967ff");
    setStockKeyButtonColor("#6F717B");
    setOrderValueButtonColor("#6F717B");
    setOrderPriceButtonColor("#6F717B");
    if (sortStatus.orderStyle == true) {
      setOriginData(
        originData.sort((a, b) =>
          a.orderStyle.localeCompare(b.orderStyle, "zh-TW")
        )
      );
      setShowData(dataMap());
      setOrderStyleButtonRotate("scaleY(-1)");
      sortStatus.orderStyle = false;
      return;
    }
    if (sortStatus.orderStyle !== true) {
      setOriginData(
        originData.sort((a, b) =>
          b.orderStyle.localeCompare(a.orderStyle, "zh-TW")
        )
      );
      setShowData(dataMap());
      setOrderStyleButtonRotate("scaleY(1)");
      sortStatus.orderStyle = true;
    }
  };
  const sortStockKey = () => {
    setOrderStyleButtonColor("#6F717B");
    setStockKeyButtonColor("#4967ff");
    setOrderValueButtonColor("#6F717B");
    setOrderPriceButtonColor("#6F717B");
    if (sortStatus.stockKey == true) {
      setOriginData(originData.sort((a, b) => a.stockKey[0] - b.stockKey[0]));
      setShowData(dataMap());
      setStockKeyButtonRotate("scaleY(-1)");
      sortStatus.stockKey = false;
      return;
    }
    if (sortStatus.stockKey !== true) {
      setOriginData(originData.sort((a, b) => b.stockKey[0] - a.stockKey[0]));
      setShowData(dataMap());
      setStockKeyButtonRotate("scaleY(1)");
      sortStatus.stockKey = true;
    }
  };
  const sortOrderValue = () => {
    setOrderStyleButtonColor("#6F717B");
    setStockKeyButtonColor("#6F717B");
    setOrderValueButtonColor("#4967ff");
    setOrderPriceButtonColor("#6F717B");
    if (sortStatus.value == true) {
      setOriginData(originData.sort((a, b) => a.value - b.value));
      setShowData(dataMap());
      setOrderValueButtonRotate("scaleY(-1)");
      sortStatus.value = false;
      return;
    }
    if (sortStatus.value !== true) {
      setOriginData(originData.sort((a, b) => b.value - a.value));
      setShowData(dataMap());
      setOrderValueButtonRotate("scaleY(1)");
      sortStatus.value = true;
    }
  };

  const sortOrderPrice = () => {
    setOrderStyleButtonColor("#6F717B");
    setStockKeyButtonColor("#6F717B");
    setOrderValueButtonColor("#6F717B");
    setOrderPriceButtonColor("#4967ff");
    if (sortStatus.orderPrice == true) {
      setOriginData(originData.sort((a, b) => a.orderPrice - b.orderPrice));
      setShowData(dataMap());
      setOrderPriceButtonRotate("scaleY(-1)");
      sortStatus.orderPrice = false;
      return;
    }
    if (sortStatus.orderPrice !== true) {
      setOriginData(originData.sort((a, b) => b.orderPrice - a.orderPrice));
      setShowData(dataMap());
      setOrderPriceButtonRotate("scaleY(1)");
      sortStatus.orderPrice = true;
    }
  };

  return (
    <div className="nowOrder">
      <div className="titleBox">
        <h3>當前委託</h3>
      </div>
      <table className="nowOrderTitle">
        <thead>
          <tr>
            <th colSpan="2">
              <p>交易類型</p>
              <svg
                width="18"
                height="11"
                viewBox="0 0 18 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={sortOrderStyle}
                style={{
                  transform: `${orderStyleButtonRotate}`,
                  cursor: "pointer",
                }}
              >
                <path
                  d="M18 1.90735e-06L9 11L-9.45698e-07 3.33738e-07L18 1.90735e-06Z"
                  fill={orderStyleButtonColor}
                />
              </svg>
            </th>
            <th>
              <p>股票別</p>
              <svg
                width="18"
                height="11"
                viewBox="0 0 18 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={sortStockKey}
                style={{
                  transform: `${stockKeyButtonRotate}`,
                  cursor: "pointer",
                }}
              >
                <path
                  d="M18 1.90735e-06L9 11L-9.45698e-07 3.33738e-07L18 1.90735e-06Z"
                  fill={stockKeyButtonColor}
                />
              </svg>
            </th>
            <th>
              <p>單位</p>
              <svg
                width="18"
                height="11"
                viewBox="0 0 18 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={sortOrderValue}
                style={{
                  transform: `${orderValueButtonRotate}`,
                  cursor: "pointer",
                }}
              >
                <path
                  d="M18 1.90735e-06L9 11L-9.45698e-07 3.33738e-07L18 1.90735e-06Z"
                  fill={orderValueButtonColor}
                />
              </svg>
            </th>
            <th>
              <p>委託價</p>
              <svg
                width="18"
                height="11"
                viewBox="0 0 18 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={sortOrderPrice}
                style={{
                  transform: `${orderPriceButtonRotate}`,
                  cursor: "pointer",
                }}
              >
                <path
                  d="M18 1.90735e-06L9 11L-9.45698e-07 3.33738e-07L18 1.90735e-06Z"
                  fill={orderPriceButtonColor}
                />
              </svg>
            </th>
          </tr>
        </thead>
      </table>
      <div className="nowOrderListBox">
        <table className="nowOrderList">{showData}</table>
      </div>
    </div>
  );
};

export default NowOrder;
