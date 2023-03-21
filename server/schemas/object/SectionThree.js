export default {
    localize: true,
    name: 'sectionThree',
    title: 'Seccion 3',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Titulo de la seccion',
            type: 'array',
            of: [
              {
                type: 'block'
              }
            ]
        },
        {
            name: 'content',
            title: 'Contenido de la seccion 3',
            type: 'array',
            of: [
              {
                type: 'block'
              }
            ]
        },
        {
            name: 'imagen',
            title: 'Imagen de la seccion',
            type: 'image'
        }
    ]
}