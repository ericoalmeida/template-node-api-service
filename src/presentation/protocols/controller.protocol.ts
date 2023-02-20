import { type ResponseProtocol } from '@presentation/protocols/responses/response.protocol'

interface ControllerProtocol<TypeRequest = any, TypeData = any> {
  handle: (request: TypeRequest) => Promise<ResponseProtocol<TypeData>>
}

export type { ControllerProtocol }
