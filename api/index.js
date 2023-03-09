//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
//const {getApi} = require ("./src/controllers/country.js")
// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(3001,  () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
    //await getApi()
  });
});

//Llamo a GetApi antes que todas las funciones para que sea lo primero que se ejecute
//Y asi llenar la base de datos; Luego cambio el force a false para que 
//no se borre y se actualice la base de datos cada vez que se actualiza el navegadpr.
//(Si no no se guardarian los post del usuario)
