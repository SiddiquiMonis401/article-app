import { useEffect, useState } from "react";

type UseRequest = {
  endpoint: string;
  queryParams?: string;
  requestOption: RequestInit;
};

type UseRequestReturnType<ResponseType = any> = {
  isLoading: boolean;
  isError: boolean;
  response?: ResponseType;
};

export default function useRequest<ResponseType = any>({
  endpoint,
  requestOption,
  queryParams,
}: UseRequest): UseRequestReturnType<ResponseType> {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [response, setResponse] = useState<ResponseType | undefined>();

  async function fetchData() {
    try {
      setIsLoading(true);
      const data = await fetch(`${endpoint}?${queryParams}`, requestOption);
      const response = JSON.parse(await data.text()) as ResponseType;
      setIsLoading(false);
      setResponse(response);
    } catch (err) {
      setIsError(true);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endpoint, queryParams]);
  return { isLoading, isError, response };
}
