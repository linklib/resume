import { objectType, extendType } from 'nexus'

export const Tech = objectType({
  name: 'Tech',
  description: 'Технология',
  sourceType: {
    module: '@prisma/client',
    export: 'Tech',
  },
  definition(t) {
    t.nonNull.string('id')
    t.nonNull.string('title')
    t.string('desc')
    t.string('link')
    t.string('image')
  },
})

export const TechExtendQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.teches({
      description: 'Список технологий',
      filtering: true,
      ordering: true,
    })

    t.crud.tech({
      description: 'Технология',
    })
  },
})
