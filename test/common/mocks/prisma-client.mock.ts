import { type PrismaClient } from '@prisma/client'
import { mockDeep, mockReset, type DeepMockProxy } from 'jest-mock-extended'

import databaseClient from '@test-common/mocks/database-client.mock'

jest.mock('@test-common/mocks/database-client.mock', () => {
  return {
    __esModule: true,
    default: mockDeep<PrismaClient>()
  }
})

beforeEach(() => {
  mockReset(databaseClientMock)
})

const databaseClientMock = databaseClient as unknown as DeepMockProxy<PrismaClient>

export { databaseClientMock }
