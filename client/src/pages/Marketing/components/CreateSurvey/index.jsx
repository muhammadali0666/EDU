import React from 'react'
import { Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import Button from 'subcomponents/Button';

export default function CreateSurvey({ show, onHide }) {
  const { register, watch } = useForm();

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          So'rovnoma qo'shish
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Rasm qo'shish</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Form.Group controlId="title" className="mb-3">
          <Form.Label>Sarlavha</Form.Label>
          <Form.Control type="text" placeholder='Sarlavha' />
        </Form.Group>
        <Form.Group controlId="amount" className="mb-3">
          <Form.Label>Miqdor</Form.Label>
          <Form.Control type="number" placeholder='Miqdor' />
        </Form.Group>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Show"
        />
        <Form.Group controlId="branch" className='my-3'>
          <Form.Label>Filial</Form.Label>
          <Form.Select {...register("branch")}>
            <option>Tanlang</option>
            <option value="1">hello</option>
            <option value="2">how</option>
            <option value="3">cool</option>
          </Form.Select>
        </Form.Group>
        {watch("branch") ? (
          <Form.Group controlId="course" className='my-3'>
            <Form.Label>Kurs</Form.Label>
            <Form.Select {...register("course")}>
              <option>Tanlang</option>
              <option value="1">Math</option>
              <option value="2">English</option>
              <option value="3">Boring History</option>
            </Form.Select>
          </Form.Group>
        ) : null}
        {watch("course") ? (
          <Form.Group controlId="time" className='my-3'>
            <Form.Label>Vaqti</Form.Label>
            <Form.Select {...register("time")}>
              <option>Tanlang</option>
              <option value="1">20:00-10:30</option>
              <option value="2">20:00-10:30</option>
              <option value="3">20:00-10:30</option>
              <option value="4">20:00-10:30</option>
              <option value="5">20:00-10:30</option>
            </Form.Select>
          </Form.Group>
        ) : null}
      </Modal.Body>
      <Modal.Footer>
        <button onClick={onHide} className="mx-3">Orqaga</button>
        <Button
          text="Save"
        />
      </Modal.Footer>
    </Modal>
  )
}
