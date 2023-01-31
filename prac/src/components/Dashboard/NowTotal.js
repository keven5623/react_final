import React from "react";
import { useState, useEffect, useMemo } from "react";

let sortStatus = {
  mineStockKey: true,
  nowValue: true,
  nowUpDown: true,
  upDownPercent: true,
};

const totalUpDown = "- $ 3,177";

const NowTotal = () => {
  let nowTotalData = [
    {
      key: 1,
      mineStockKey: "00632R",
      mineStock: "元大台灣50反1",
      nowValue: 5184,
      nowUpDown: "- $ 33891",
      upDownPercent: "- 23.1",
    },
    {
      key: 2,
      mineStockKey: "2609",
      mineStock: "陽明",
      nowValue: 6637,
      nowUpDown: "- $ 5489",
      upDownPercent: "- 9.6",
    },
    {
      key: 3,
      mineStockKey: "2615",
      mineStock: "南光",
      nowValue: 822,
      nowUpDown: "+ $ 0",
      upDownPercent: "+ 0.0",
    },
    {
      key: 4,
      mineStockKey: "6443",
      mineStock: "寶齡富錦",
      nowValue: 20,
      nowUpDown: "- $ 3487",
      upDownPercent: "- 6.1",
    },
    {
      key: 5,
      mineStockKey: "1605",
      mineStock: "元大滬深300正2",
      nowValue: 13898,
      nowUpDown: "- $ 511",
      upDownPercent: "- 3.1",
    },
    {
      key: 6,
      mineStockKey: "00632R",
      mineStock: "元大台灣50反1",
      nowValue: 36585,
      nowUpDown: "+ $ 1331",
      upDownPercent: "+ 2291.1",
    },
  ];

  const dataMap = () =>
    originData.map((v) => {
      if (v.nowUpDown[0] === "+" && Number(v.nowUpDown.split(" ")[2]) == "0") {
        return (
          <tbody key={v.key}>
            <tr>
              <td>
                <p>{v.mineStock} </p>
                <br />
                <span>{v.mineStockKey}</span>
              </td>
              <td>
                <p>{"$ " + v.nowValue}</p>
              </td>
              <td>
                <p style={{ color: "#ffffff" }}>{v.nowUpDown}</p>
              </td>
              <td>
                <p style={{ color: "#ffffff" }}>{v.upDownPercent + " %"}</p>
              </td>
            </tr>
          </tbody>
        );
      }
      if (v.nowUpDown[0] === "+") {
        return (
          <tbody key={v.key}>
            <tr>
              <td>
                <p>{v.mineStock} </p>
                <br />
                <span>{v.mineStockKey}</span>
              </td>
              <td>
                <p>{"$ " + v.nowValue}</p>
              </td>
              <td>
                <p style={{ color: "#e23965" }}>{v.nowUpDown}</p>
              </td>
              <td>
                <p style={{ color: "#e23965" }}>{v.upDownPercent + " %"}</p>
              </td>
            </tr>
          </tbody>
        );
      } else if (v.nowUpDown[0] === "-") {
        return (
          <tbody key={v.key}>
            <tr>
              <td>
                <p>{v.mineStock} </p>
                <br />
                <span>{v.mineStockKey}</span>
              </td>
              <td>
                <p>{"$ " + v.nowValue}</p>
              </td>
              <td>
                <p style={{ color: "#38e54d" }}>{v.nowUpDown}</p>
              </td>
              <td>
                <p style={{ color: "#38e54d" }}>{v.upDownPercent + " %"}</p>
              </td>
            </tr>
          </tbody>
        );
      }
    });

  const [mineStockKeyButtonColor, setMineStockKeyButtonColor] =
    useState("#6F717B");
  const [mineStockKeyButtonRotate, setMineStockKeyButtonRotate] =
    useState("scaleY(1)");
  const [nowValueButtonColor, setNowValueButtonColor] = useState("#6F717B");
  const [nowValueButtonRotate, setNowValueButtonRotate] = useState("scaleY(1)");
  const [nowUpDownButtonColor, setNowUpDownButtonColor] = useState("#6F717B");
  const [nowUpDownButtonRotate, setNowUpDownButtonRotate] =
    useState("scaleY(1)");
  const [upDownPercentButtonColor, setUpDownPercentButtonColor] =
    useState("#6F717B");
  const [upDownPercentButtonRotate, setUpDownPercentButtonRotate] =
    useState("scaleY(1)");

  const [totalBoxColor, setTotalBoxColor] = useState("");
  const [originData, setOriginData] = useState(nowTotalData);
  const [showData, setShowData] = useState(dataMap());

  const colorTotalBox = () => {
    if (totalUpDown[0] === "-") {
      setTotalBoxColor("#38e54d");
      return;
    }
    if (totalUpDown[0] === "+" && totalUpDown[4] === "0") {
      setTotalBoxColor("#9d9faa");
      return;
    } else if (totalUpDown[0] === "+") {
      setTotalBoxColor("#e23965");
      return;
    }
  };

  useEffect(() => {
    colorTotalBox();
  }, []);

  const sortMineStockKey = () => {
    setMineStockKeyButtonColor("#4967ff");
    setNowValueButtonColor("#6F717B");
    setNowUpDownButtonColor("#6F717B");
    setUpDownPercentButtonColor("#6F717B");
    if (sortStatus.mineStockKey == true) {
      setOriginData(
        originData.sort((a, b) => a.mineStockKey[0] - b.mineStockKey[0])
      );
      setShowData(dataMap());
      setMineStockKeyButtonRotate("scaleY(-1)");
      sortStatus.mineStockKey = false;
      return;
    }
    if (sortStatus.mineStockKey !== true) {
      setOriginData(
        originData.sort((a, b) => b.mineStockKey[0] - a.mineStockKey[0])
      );
      setShowData(dataMap());
      setMineStockKeyButtonRotate("scaleY(1)");
      sortStatus.mineStockKey = true;
    }
  };

  const sortNowValue = () => {
    setMineStockKeyButtonColor("#6F717B");
    setNowValueButtonColor("#4967ff");
    setNowUpDownButtonColor("#6F717B");
    setUpDownPercentButtonColor("#6F717B");
    if (sortStatus.nowValue == true) {
      setOriginData(originData.sort((a, b) => a.nowValue - b.nowValue));
      setShowData(dataMap());
      setNowValueButtonRotate("scaleY(-1)");
      sortStatus.nowValue = false;
      return;
    }
    if (sortStatus.nowValue !== true) {
      setOriginData(originData.sort((a, b) => b.nowValue - a.nowValue));
      setShowData(dataMap());
      setNowValueButtonRotate("scaleY(1)");
      sortStatus.nowValue = true;
    }
  };

  const sortNowUpDown = () => {
    setMineStockKeyButtonColor("#6F717B");
    setNowValueButtonColor("#6F717B");
    setNowUpDownButtonColor("#4967ff");
    setUpDownPercentButtonColor("#6F717B");
    if (sortStatus.nowUpDown == true) {
      setOriginData(
        originData.sort(
          (a, b) =>
            Number(
              a.nowUpDown.split(" $ ")[0].concat(a.nowUpDown.split(" $ ")[1])
            ) -
            Number(
              b.nowUpDown.split(" $ ")[0].concat(b.nowUpDown.split(" $ ")[1])
            )
        )
      );
      setShowData(dataMap());
      setNowUpDownButtonRotate("scaleY(-1)");
      sortStatus.nowUpDown = false;
      return;
    }
    if (sortStatus.nowUpDown !== true) {
      setOriginData(
        originData.sort(
          (a, b) =>
            Number(
              b.nowUpDown.split(" $ ")[0].concat(b.nowUpDown.split(" $ ")[1])
            ) -
            Number(
              a.nowUpDown.split(" $ ")[0].concat(a.nowUpDown.split(" $ ")[1])
            )
        )
      );
      setShowData(dataMap());
      setNowUpDownButtonRotate("scaleY(1)");
      sortStatus.nowUpDown = true;
    }
  };

  const sortUpDownPercent = () => {
    setMineStockKeyButtonColor("#6F717B");
    setNowValueButtonColor("#6F717B");
    setNowUpDownButtonColor("#6F717B");
    setUpDownPercentButtonColor("#4967ff");
    if (sortStatus.upDownPercent == true) {
      setOriginData(
        originData.sort(
          (a, b) =>
            Number(
              a.upDownPercent
                .split(" ")[0]
                .concat(a.upDownPercent.split(" ")[1])
            ) -
            Number(
              b.upDownPercent
                .split(" ")[0]
                .concat(b.upDownPercent.split(" ")[1])
            )
        )
      );
      setShowData(dataMap());
      setUpDownPercentButtonRotate("scaleY(-1)");
      sortStatus.upDownPercent = false;
      return;
    }
    if (sortStatus.upDownPercent !== true) {
      setOriginData(
        originData.sort(
          (a, b) =>
            Number(
              b.upDownPercent
                .split(" ")[0]
                .concat(b.upDownPercent.split(" ")[1])
            ) -
            Number(
              a.upDownPercent
                .split(" ")[0]
                .concat(a.upDownPercent.split(" ")[1])
            )
        )
      );
      setShowData(dataMap());
      setUpDownPercentButtonRotate("scaleY(1)");
      sortStatus.upDownPercent = true;
    }
  };

  return (
    <div className="nowTotal">
      <div className="titleBox">
        <h3>庫存總值</h3>
      </div>
      <div className="totalBox">
        <h4>參考總現值：$910,081</h4>
        <h5
          style={{
            color: `${totalBoxColor}`,
          }}
        >
          {totalUpDown}
          <br />
          <span>- 3.34 %</span>
        </h5>
      </div>

      <table className="nowTotalTitle">
        <thead>
          <tr>
            <th>
              <p>持有股票</p>
              <svg
                width="18"
                height="11"
                viewBox="0 0 18 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={sortMineStockKey}
                style={{
                  transform: `${mineStockKeyButtonRotate}`,
                  cursor: "pointer",
                }}
              >
                <path
                  d="M18 1.90735e-06L9 11L-9.45698e-07 3.33738e-07L18 1.90735e-06Z"
                  fill={mineStockKeyButtonColor}
                />
              </svg>
            </th>
            <th>
              <p>參考總值</p>
              <svg
                width="18"
                height="11"
                viewBox="0 0 18 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={sortNowValue}
                style={{
                  transform: `${nowValueButtonRotate}`,
                  cursor: "pointer",
                }}
              >
                <path
                  d="M18 1.90735e-06L9 11L-9.45698e-07 3.33738e-07L18 1.90735e-06Z"
                  fill={nowValueButtonColor}
                />
              </svg>
            </th>
            <th>
              <p>參考損益</p>
              <svg
                width="18"
                height="11"
                viewBox="0 0 18 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={sortNowUpDown}
                style={{
                  transform: `${nowUpDownButtonRotate}`,
                  cursor: "pointer",
                }}
              >
                <path
                  d="M18 1.90735e-06L9 11L-9.45698e-07 3.33738e-07L18 1.90735e-06Z"
                  fill={nowUpDownButtonColor}
                />
              </svg>
            </th>
            <th>
              <p>百分比</p>
              <svg
                width="18"
                height="11"
                viewBox="0 0 18 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={sortUpDownPercent}
                style={{
                  transform: `${upDownPercentButtonRotate}`,
                  cursor: "pointer",
                }}
              >
                <path
                  d="M18 1.90735e-06L9 11L-9.45698e-07 3.33738e-07L18 1.90735e-06Z"
                  fill={upDownPercentButtonColor}
                />
              </svg>
            </th>
          </tr>
        </thead>
      </table>
      <div className="nowTotalListBox">
        <table className="nowTotalList">{showData}</table>
      </div>
    </div>
  );
};

export default NowTotal;
