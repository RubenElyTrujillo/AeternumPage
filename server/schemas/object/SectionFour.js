export default {
    localize: true,
    name: 'sectionFour',
    title: 'Seccion 4',
    type: 'object',
    fields: [
        {
            name: 'content',
            title: 'Contenido de la seccion 4',
            type: 'array',
            of: [
              {
                type: 'block'
              }
            ]
        }
    ]
}