import 'whatwg-fetch';

import 'setimmediate';

require('dotenv').config({
    path: 'env.test',
});

// En caso de necesitar la implementación del FetchAPI
// yarn add -D whatwg-fetch
// import 'whatwg-fetch';

// En caso de encontrar paquetes que lo requieran
// yarn add -D setimmediate
// import 'setimmediate';

// Realizar el mock completo de las variables de entorno
jest.mock('./src/helpers/getEnvVariables', () => ({
    getEnvVariables: () => ({ ...process.env })
}));
