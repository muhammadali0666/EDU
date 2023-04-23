import React, { useState } from 'react'
import { useMemo } from 'react'
import { Col, Row } from 'react-bootstrap'
import { FunnelGraphComponent, Table } from './components'
import FunnelGraphByCourse from './components/FunnelGraphByCourse'
import FunnelGraphTabs from './components/FunnelGraphTabs'
import { FunnelGraphConteiner } from './index.style'

export default function Order() {
  const [activeState, setActiveState] = useState("student");

  const funnelGraphLabels = useMemo(() => {
    return [
      "Barcha buyurtmalar soni",
      "Sinov darsiga yozilganlar",
      "Sinov darsiga kelganlar",
      "Birinchi to‘lovni qilganlar",
    ];
  }, []);
  const studentData = useMemo(() => ({
    labels: funnelGraphLabels,
    values: [
      finance.totalOrders,
      finance.orderCome,
      finance.firstJoined,
      finance.firstPayment,
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [finance]);
  const courseData = useMemo(() => ({
    labels: funnelGraphLabels,
    values: [
      finance.totalOrdersByCourse,
      finance.orderComeByCourse,
      finance.firstJoinedByCourse,
      finance.firstPaymentByCourse,
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [finance]);

  const renderFunnelGraph = useMemo(() => {
    return (
      <span className="w-100">
        {activeState === "student" ? (
          <FunnelGraphComponent
            data={studentData || {}}
          />
        ) : (
          <FunnelGraphByCourse
            data={courseData || {}}
          />
        )}
      </span>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeState]);

  return (
    <div>
      <Row className="pt-5">
        <Col md="5" className="position-relative">
          <Table />
        </Col>
        <Col md="7" className="position-relative">
          <FunnelGraphTabs
            activeState={activeState}
            setActiveState={setActiveState}
          />
          <FunnelGraphConteiner
            className=" d-flex align-items-start justify-content-center px-2"
            style={{ borderRadius: 0 }}
          >
            {renderFunnelGraph}
          </FunnelGraphConteiner>
        </Col>
      </Row>
    </div>
  )
}

const finance = {
  totalOrders: 10,
  orderCome: 20,
  firstJoined: 12,
  firstPayment: 40,
  totalOrdersByCourse: 120,
  orderComeByCourse: 40,
  firstPaymentByCourse: 123,
  firstJoinedByCourse: 32
}

