import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'eCommerce',
        description: "Nuestra plataforma de eCommerce ofrece una amplia selección de productos de diversas categorías, desde electrónica hasta moda y hogar. Con una interfaz fácil de usar y un proceso de compra seguro, nuestros clientes pueden explorar y adquirir productos con total confianza. Además, contamos con un sistema de gestión de pedidos eficiente que garantiza entregas rápidas y un servicio al cliente excepcional.",
        tools: ['Express', 'MongoDB', 'Angular', 'Node Mailer', 'JWT'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'VicMovies',
        description: 'Este proyecto es una aplicación web fullstack que proporciona información sobre películas.',
        tools: ['JavaScript', 'CSS', 'HTML'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'App Huarachería',
        description: 'Desarrollo de una aplicación de escritorio con el objetivo de optimizar la administración de una huarachería.',
        tools: ['Java', 'MySQL'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },