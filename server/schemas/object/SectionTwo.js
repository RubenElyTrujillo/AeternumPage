export default {
    localize: true,
    name: 'sectionTwo',
    title: 'Seccion 2',
    type: 'object',
    fields: [
      {
        name: 'sectionTwoContentPartOne',
        title: 'Contenido de la seccion 2 parte 1',
        type: 'array',
        of: [
          {
            type: 'block'
          }
        ]
      },
      {
        name: 'sectionTwoContentPartTwo',
        title: 'Contenido de la seccion 2 parte 2',
        type: 'array',
        of: [
          {
            type: 'block'
          }
        ]
      },
    ]
}