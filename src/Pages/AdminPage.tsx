import React from 'react'
import Form from '../component/Form'
import ErrorBoundary from '../component/ErrorBoundary'

export default function AdminPage() {
  return (<>
  <ErrorBoundary></ErrorBoundary>
  <Form></Form>
  </>
  )
}
