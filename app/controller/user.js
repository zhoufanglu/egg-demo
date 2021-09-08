// eslint-disable-next-line strict
const Controller = require('egg').Controller;

class NewsController extends Controller { // 类名大写
  async list() { // async await 异步
    this.ctx.body = {
      code: 0,
      msg: 'success!',
      data: '123',
    };
  }

  async testA() { // async await 异步
    this.ctx.body = {
      code: 0,
      msg: 'success!',
      data: 'A',
    };
  }

  async testB() { // async await 异步
    this.ctx.body = {
      code: 0,
      msg: 'success!',
      data: 'B',
    };
  }

  async testC() { // async await 异步
    this.ctx.body = {
      code: 0,
      msg: 'success!',
      data: 'C',
    };
  }

  async getValById() { // async await 异步
    console.log(38, this.ctx.query.name);
    this.ctx.body = {
      code: 0,
      msg: 'success!',
      data: this.ctx.query.name,
    };
  }

}

module.exports = NewsController; // 别忘了导出类
