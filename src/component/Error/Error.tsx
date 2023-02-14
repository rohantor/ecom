import { AxiosError } from 'axios'
import React from 'react'
import { ToastContentProps } from 'react-toastify'

export default function Error(data:{message:string}) {
  return <div>{String(data?.message)}</div>
}
