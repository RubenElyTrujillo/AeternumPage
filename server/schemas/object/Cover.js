export default {
    localize: true,
    name: 'cover',
    title: 'Cover',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Ttiulo principal',
            type: 'array',
            of: [
              {
                type: 'block'
              }
            ]
        },
        {
            name: 'subtitle',
            title: 'Subtitulo',
            type: 'array',
            of: [
              {
                type: 'block'
              }
            ]
        },
    ]
}