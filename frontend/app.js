const render = require('./lib/render');
const logger = require('koa-logger');
const router = require('koa-router')();
const koaBody = require('koa-body');
const Koa = require('koa');
const app = module.exports = new Koa();
// "database"
const scenarios = [];
// middleware
app.use(logger());
app.use(render);
app.use(koaBody());

// route definitions

router.get('/', list)
  .get('/scenario/new', add)
  .get('/scenario/:id', show)
  .post('/scenario', create);

app.use(router.routes());


/**
 * Post listing.
 */

async function list(ctx) {
    await ctx.render('scenario/list', { scenarios: scenarios });
  }
  
  /**
   * Show creation form.
   */
  
  async function add(ctx) {
    await ctx.render('scenario/new');
  }
  
  /**
   * Show post :id.
   */
  
  async function show(ctx) {
    const id = ctx.params.id;
    const scenario = scenarios[id];
    if (!scenario) ctx.throw(404, 'invalid post id');
    await ctx.render('scenario/show', { scenario: scenario });
  }
  
  /**
   * Create a post.
   */
  
  async function create(ctx) {
    const scenario = ctx.request.body;
    const id = scenarios.push(scenario) - 1;
    scenario.created_at = new Date();
    scenario.id = id;
    ctx.redirect('/');
  }
  
  // listen
  
  if (!module.parent) app.listen(8080);
