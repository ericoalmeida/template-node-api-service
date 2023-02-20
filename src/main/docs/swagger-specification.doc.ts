import swaggerJSDoc, { type Options } from 'swagger-jsdoc'

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Template Service',
    description: 'Template service description',
    version: '0.0.0'
  }
}

const options: Options = {
  swaggerDefinition,
  apis: []
}

const swaggerSpecificationDoc = swaggerJSDoc(options)

export { swaggerSpecificationDoc }
