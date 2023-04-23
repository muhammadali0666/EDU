import React, { useState } from 'react'
import { ArcElement, Chart, registerables } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Col, Row } from 'react-bootstrap';
import { Table } from './components';
import { ChartSpan, TabBg, TabsContainer } from './index.style';

Chart.register(...registerables);
Chart.register(ArcElement);
Chart.register(ChartDataLabels);

export default function Finance() {
  const [activeTab, setActiveTab] = useState("incomes");

  return (
    <div>
      <div className='d-flex justify-content-between'>
        <TabsContainer active="2">
          {tabs.map(tab => (
            <button
              style={{ color: activeTab === tab.name ? "#fff" : "#000" }}
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
            >{tab.label}</button>
          ))}
          <TabBg active={tabs.findIndex(tab => tab.name === activeTab)} />
        </TabsContainer>
      </div>
      <Row style={{ marginTop: "20px" }}>
        <Col md="5" className="position-relative">
          <div
            className="card border-0 py-3 px-2"
            style={{
              borderRadius: "12px",
              position: "relative",
            }}
            id="statisticsFinance"
          >
            <ChartSpan>
              500uzs
            </ChartSpan>
            <Doughnut data={data(activeTab)} options={options(activeTab)} />
          </div>
        </Col>
        <Col md="7" className="position-relative">
          <Table finance={finance[activeTab]} />
        </Col>
      </Row>
    </div>
  )
}

const finance = {
  incomes: {
    data: [
      {
        amount: 5e+30,
        color: "#1fea41",
        name: "o'quvchi to'ladi"
      }
    ],
    total: 5e+30
  },
  payments: {
    data: [
      {
        amount: 5e+10,
        color: "#ea371f",
        name: "xarajat"
      }
    ],
    total: 5e+10
  },
  vouchers: {
    data: [
      {
        amount: 5e+5,
        color: "#1f5cea",
        name: "for voucher"
      }
    ],
    total: 5e+5
  },
}

const data = (item) => ({
  labels: finance[item]?.data
    .filter((label) => {
      if (label.amount !== 0) {
        return label.amount;
      } else return false
    })
    .map((item) => item.name),
  datasets: [
    {
      data: finance[item]?.data
        .filter((label) => {
          if (label.amount !== 0) {
            return label.amount;
          } else return false
        })
        .map((item) => item.amount),
      backgroundColor: finance[item]?.data
        .filter((label) => {
          if (label.amount !== 0) {
            return label.color;
          } else return false
        })
        .map((item) => item.color),
      borderColor: "#ccc",
      borderWidth: 2,
      hoverOffset: 3,
      cutout: "70%",
    },
  ],
  text: "23%",
});

const options = item => ({
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        fontSize: 18,
        fontColor: "#ccc",
      },
      display: false,
    },
    datalabels: {
      formatter: (value) => {
        return ((value * 100) / finance[item]?.total).toFixed(2) + "%";
      },
      color: "#ccc",
      fontSize: "25px",
    },
    doughnutlabel: {
      labels: [
        {
          text: "The title",
          font: {
            size: "60",
          },
        },
      ],
    },
  },
  cutoutPercentage: 75,
  legend: {
    display: false,
  },
});

const tabs = [
  {
    label: "Kirim",
    name: "incomes"
  },
  {
    label: "Chiqim",
    name: "payments"
  },
  {
    label: "Vaucher",
    name: "vouchers"
  }
]
