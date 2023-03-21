export default {
    localize: true,
    name: 'sectionFive',
    title: 'Seccion 5',
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
            name: 'subtitle',
            title: 'Subtitulo de la seccion',
            type: 'array',
            of: [
              {
                type: 'block'
              }
            ]
        },
        {
            name: 'content',
            title: 'Contenido de la seccion 5',
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