import { useCallback, useState } from "react";
import { sendContact } from "src/api/contact";
import { IContactRequest } from "src/api/request"

type ContactState = {
  request: IContactRequest
  errorMessage?: string
  onChangeName: (name: string) => void
  onChangeEmail: (name: string) => void
  onChangeMessage: (name: string) => void
  onSubmit: () => void
}

const initialRequest: IContactRequest = {
  name: '',
  email: '',
  message: '',
}

export const useContact: () => ContactState = () => {
  const [request, setRequest] = useState(initialRequest)
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined)
  const onChangeName = useCallback((name: string) => {
    setRequest({
      ...request,
      name,
    })
  }, [request, setRequest])
  const onChangeEmail = useCallback((email: string) => {
    setRequest({
      ...request,
      email,
    })
  }, [request, setRequest])
  const onChangeMessage = useCallback((message: string) => {
    setRequest({
      ...request,
      message,
    })
  }, [request, setRequest])
  const onSubmit = useCallback(async () => {
    const result = await send(request)
    setErrorMessage(result.error)
    if (!result.error) {
      setRequest(initialRequest)
    }
  }, [request, setRequest, setErrorMessage])
  return {
    request,
    errorMessage,
    onChangeName,
    onChangeEmail,
    onChangeMessage,
    onSubmit,
  }
}

const send = async (request: IContactRequest) => {
  const {
    email,
    name,
    message
  } = request
  if (!email || !name || !message) {
    return {
      error: 'すべてのフォームを埋めてください。'
    }
  }
  try {
    await sendContact(request)
    return {}
  } catch (err) {
    return {
      error: '予期せぬエラーが発生しました。しばらくしてからもう一度お試しください。'
    }
  }
}
