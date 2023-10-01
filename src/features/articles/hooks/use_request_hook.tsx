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

/**
 * @description - Hook to fetch the data - This hook returns {isLoading, error and data component}
 * @param options - Options to fetch the data 
 * @returns {UseRequestReturnType<ResponseType>}
 */
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
      
      //Fetch does not return error for status code >=400 - Handling it manually
      if(data.status >= 400) {
        throw new Error();
      }
      const response = JSON.parse(await data.text()) as ResponseType;
      setIsLoading(false);
      setResponse(response);
    } catch (err) {
      console.log('here');
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
