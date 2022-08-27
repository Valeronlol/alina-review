require('dotenv').config();
const Koa = require('koa');
const router = require('./router');
const bodyParser = require('koa-bodyparser');
const { sequelize } = require('./services/db');

const app = new Koa();
const port = 4000;

app.use(bodyParser());
app.use(router.routes());

async function main (){
  await sequelize.sync({ force: process.env.NODE_ENV === 'development' });
  app.listen(port, () => {
    console.log(`Koa app listening on port ${port}`);
  });
}

main();
