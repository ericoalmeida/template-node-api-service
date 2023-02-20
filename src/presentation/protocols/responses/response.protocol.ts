interface ResponseProtocol<TypeData = any> {
  statusCode: number
  body?: {
    data?: TypeData
    error?: any
  }
}

export type { ResponseProtocol }
