import { ActiveStudents, ArchivedStudents, Attendance, Finance, Home, Login, Marketing, NotFound, Order, StudentsList, StudentsParent } from 'pages'
import { Import } from 'pages/Marketing/pages'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

export default function RoutesWrapper() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/marketing" element={<Marketing />} />
      <Route path="/analytics/finance" element={<Finance />} />
      <Route path="/analytics/order" element={<Order />} />
      <Route path="/marketing" element={<Marketing />} />
      <Route path="/marketing/import" element={<Import />} />
      <Route path="/students/active" element={<ActiveStudents />} />
      <Route path="/students/archive" element={<ArchivedStudents />} />
      <Route path="/students/parent" element={<StudentsParent />} />
      <Route path="/students/list" element={<StudentsList />} />
      <Route path="/students/attendance" element={<Attendance />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
