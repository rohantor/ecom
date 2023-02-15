import { AxiosError, AxiosResponse } from "axios"
import { toast } from "react-toastify"
import Error from '../Error/Error'
export const  notify = (
    POSTPromise: Promise<AxiosResponse<any>>,
    pending: string,
    success: string
  ) => {
    toast.promise(POSTPromise, {
      pending: pending,
      success: success,
      error: {
        render({ data }) {
          let error: AxiosError = data as AxiosError
          
          return <Error message={error.message} />
        },
      },
    })
  }