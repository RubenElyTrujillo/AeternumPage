export default {
    name: 'home',
    title: 'Inicio',
    type: 'document',
    __experimental_actions: [
        'create', 'update', 'delete', 'publish'
    ],
    fields: [
        {
            name: 'section1',
            title: 'Contendio de la seccion principal',
            type: 'cover'
        },
        {
            name: 'section2',
            title: 'Contenido de la seccion 2',
            type: 'sectionTwo'
        },
        {
            name: 'section3',
            title: 'Contenido de la seccion 3',
            type: 'sectionThree'
        },
        {
            name: 'section4',
            title: 'Contenido de la seccion 4',
            type: 'sectionFour'
        },
        {
            name: 'section5',
            title: 'Contenido de la seccion 5',
            type: 'array',
            of: [{ type: 'sectionFive' }]
        }
    ]
}