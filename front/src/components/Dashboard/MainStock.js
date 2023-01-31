import React, { useContext, useState, useEffect } from "react";
import { apiContext } from "./DashboardMain";
import { myStockCollectionContext } from "./DashboardMain";
import { categoryContext } from "./DashboardMain";
import { Chart } from "react-google-charts";

import {reqAddStock,reqStock} from '../../api/index'

export const data = [
  ["Day", "", "", "", ""],
  ["Mon", 20, 28, 38, 45],
  ["Tue", 31, 38, 55, 66],
  ["Wed", 50, 55, 77, 80],
  ["Thu", 77, 77, 66, 50],
  ["Fri", 68, 66, 22, 15],
];

export const options = {
  legend: "none",
  backgroundColor: "black",
  bar: { groupWidth: "100%" }, // Remove space between bars.
  candlestick: {
    fallingColor: { strokeWidth: 0, fill: "#a52714" }, // red
    risingColor: { strokeWidth: 0, fill: "#0f9d58" }, // green
  },
};

const MainStock = () => {
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
    parsedData.msgArray.map(async(item)=>{
      const {b,c,y,h,l} = item
      const result = await reqAddStock({b,c,y,h,l})
      if(result.status === 0){
        console.log('正常')
      }else{
        console.log(result.msg)
      }
    })
    
    // reqAddStock()
    setResults(parsedData.msgArray);
  };

  useEffect(() => {
    setOriginData(results);
  }, [results]);

  const [originData, setOriginData] = useState(myStockCollection);
  const [displayKChart, setDisplayKChart] = useState("block");
  const [displayInfo, setDisplayInfo] = useState("none");
  const [KChartBorder, setKChartBorder] = useState("0px 4px #e23965");
  const [InfoBorder, setInfoBorder] = useState("none");

  useEffect(() => {
    setShowData(dataMap());
  }, [originData, category, displayKChart, displayInfo]);

  const seeDisplayKChart = () => {
    setDisplayKChart("block");
    setDisplayInfo("none");
    setKChartBorder("0px 4px #e23965");
    setInfoBorder("none");
  };

  const seeDisplayInfo = () => {
    setDisplayKChart("none");
    setDisplayInfo("block");
    setKChartBorder("none");
    setInfoBorder("0px 4px #e23965");
  };

  const dataMap = () =>
    originData.map((originData) => {
      if (category === originData.n) {
        return (
          <div className="mainStock">
            <h1>
              {originData.n}
              <span>{originData.c}</span>
            </h1>
            <div className="stockInfoContainer">
              <div className="stockInfoBox">
                <h2>
                  {Number(originData.b.split("_")[0]).toFixed(2)}
                  <span>
                    {Number(originData.y - originData.b.split("_")[0]).toFixed(
                      2
                    )}
                  </span>
                  <span>
                    {"(" +
                      (
                        (Number(originData.y - originData.b.split("_")[0]) /
                          Number(originData.b.split("_")[0])) *
                        100
                      ).toFixed(2) +
                      "%)"}
                  </span>
                </h2>
                <h3>成交量：{originData.ps}</h3>
                <h6>最後更新時間：{originData.t}</h6>
              </div>
              <table>
                <tbody>
                  <tr>
                    <td>成交價</td>
                    <td>{Number(originData.b.split("_")[0]).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>開盤價</td>
                    <td>{Number(originData.o).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>漲跌</td>
                    <td>
                      {Number(
                        originData.y - originData.b.split("_")[0]
                      ).toFixed(2)}
                    </td>
                  </tr>
                </tbody>
              </table>
              <table>
                <tbody>
                  <tr>
                    <td>最高價</td>
                    <td>{Number(originData.h).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>最低價</td>
                    <td>{Number(originData.l).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>昨收</td>
                    <td>{Number(originData.y).toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
              <table>
                <tbody>
                  <tr>
                    <td>買價</td>
                    <td>{Number(originData.b.split("_")[0]).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>賣價</td>
                    <td>{Number(originData.b.split("_")[4]).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>總量</td>
                    <td>{originData.v}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="stockTab">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <h2
                        onClick={seeDisplayKChart}
                        style={{ boxShadow: `${KChartBorder}` }}
                      >
                        K線圖
                      </h2>
                    </td>
                    <td></td>
                    <td>
                      <h2
                        onClick={seeDisplayInfo}
                        style={{ boxShadow: `${InfoBorder}` }}
                      >
                        基本資訊
                      </h2>
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
              <div
                className="tabKChart"
                style={{ display: `${displayKChart}` }}
              >
                <Chart
                  chartType="CandlestickChart"
                  width="780px"
                  height="312px"
                  data={data}
                  options={options}
                  className="googleChart"
                />
                <table className="nowPrice">
                  <tbody>
                    <tr>
                      <td>
                        <p>量</p>
                      </td>
                      <td>
                        <p>委買價</p>
                      </td>
                      <td>
                        <p>委賣價</p>
                      </td>
                      <td>
                        <p>量</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>45</p>
                      </td>
                      <td>
                        <p>114.60</p>
                      </td>
                      <td>
                        <p>114.65</p>
                      </td>
                      <td>
                        <p>50</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>45</p>
                      </td>
                      <td>
                        <p>114.55</p>
                      </td>
                      <td>
                        <p>114.70</p>
                      </td>
                      <td>
                        <p>82</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>299</p>
                      </td>
                      <td>
                        <p>114.50</p>
                      </td>
                      <td>
                        <p>114.75</p>
                      </td>
                      <td>
                        <p>36</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>35</p>
                      </td>
                      <td>
                        <p>114.45</p>
                      </td>
                      <td>
                        <p>114.80</p>
                      </td>
                      <td>
                        <p>71</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>59</p>
                      </td>
                      <td>
                        <p>114.40</p>
                      </td>
                      <td>
                        <p>114.85</p>
                      </td>
                      <td>
                        <p>52</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>586</p>
                      </td>
                      <td>
                        <p>小計</p>
                      </td>
                      <td>
                        <p>小計</p>
                      </td>
                      <td>
                        <p>483</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="tabInfo" style={{ display: `${displayInfo}` }}>
                基本資訊有這些
              </div>
            </div>
          </div>
        );
      }
    });

  const [showData, setShowData] = useState(dataMap());

  const stockData = async()=>{
    const result = await reqStock();
    console.log(result.data)
  }
  
  stockData();
  return <div className="mainStock">{showData}</div>;
};

export default MainStock;
