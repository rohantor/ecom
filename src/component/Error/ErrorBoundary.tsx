import { ErrorBoundary, FallbackProps } from 'react-error-boundary'

import React, { useState } from 'react'
let arr = ['Error']
export const ErrorFallback: React.ComponentType<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <div role='alert'>
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}
function ErrorComponent() {
  return (
    <>
      {arr.map((i) => {
        return <h1>{i}</h1>
      })}
    </>
  )
}
export default function ErrorBoundaryComponent() {
  return (
    <>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          arr = ['Solved']
        }}
      >
        <ErrorComponent />
      </ErrorBoundary>
    </>
  )
}
