import { useCallback, useState } from "react";
import { IContactRequest } from "src/api/request"
type LoadState = 'init' | 'loading' | 'error' | 'success';

type ContactState = {
  request: IContactRequest
  state: LoadState
  errorMessage?: string
  onChange: (request: IContactRequest) => void
  onSubmit: () => void
}

export const useContact: () => ContactState = () => {
  const [request, setRequest] = useState<IContactRequest>({
    name: '',
    email: '',
    message: '',
  })
  const [state, setState] = useState<LoadState>('init')
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined)
  const onChange = setRequest
  const onSubmit = useCallback(() => {

  }, [])
  return {
    request,
    state,
    errorMessage,
    onChange,
    onSubmit,
  }
}
