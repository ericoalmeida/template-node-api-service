import { type Response } from '@presentation/protocols/responses/response.protocol'

interface Controller<TypeRequest = any, TypeData = any> {
  handle: (request: TypeRequest) => Promise<Response<TypeData>>
}

export type { Controller }
