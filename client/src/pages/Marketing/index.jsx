import React, { useState } from 'react'
import styled from 'styled-components'
import Button from 'subcomponents/Button'
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FiArrowDownCircle, FiArrowUpCircle } from "react-icons/fi";
import { CreateSurvey, Links } from './components';
import { useNavigate } from 'react-router-dom';

const BtnsContainer = styled.div`
  padding-bottom: 16px;
  display: flex;
  gap: 16px;
`

export default function Marketing() {
  const [showCreateSurvey, setShowCreateSurvey] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <BtnsContainer>
        <Button
          onClick={() => setShowCreateSurvey(true)}
          Icon={AiOutlinePlusCircle}
          text="Create survey"
        />
        <Button
          onClick={() => navigate("/marketing/import")}
          Icon={FiArrowDownCircle}
          text="Import"
        />
        <Button
          Icon={FiArrowUpCircle}
          text="Export"
        />
      </BtnsContainer>
      <CreateSurvey
        show={showCreateSurvey}
        onHide={() => setShowCreateSurvey(false)}
      />
      <Links />
    </div>
  )
}
