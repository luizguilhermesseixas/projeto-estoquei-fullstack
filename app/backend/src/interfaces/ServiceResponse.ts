export type ServiceMessage = {
  message: string;
}

export type ServiceResponseErrorType =
'NOT_FOUND' | 'UNAUTHORIZED' | 'INVALID_DATA' | 'UNPROCESSABLE';

export type ServiceResponseSuccesType = 'SUCCESSFUL' | 'CREATED';

export type ServiceResponseError = {
  status: ServiceResponseErrorType;
  data: ServiceMessage;
}

export type ServiceResponseSuccess<T> = {
  status: ServiceResponseSuccesType,
  data: T
};

export type ServiceResponse<T> = ServiceResponseError | ServiceResponseSuccess<T>;
