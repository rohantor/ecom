import React from 'react'
import { ToastContentProps } from 'react-toastify'

export default function Error(data: any) {
  return <div>{String(data.message.response.data)}</div>
}
