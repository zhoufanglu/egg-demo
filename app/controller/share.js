// eslint-disable-next-line strict
const Controller = require('egg').Controller;

const utils = require('../public/util.js');
//const formatDate = require('../public/util.js');

class Share extends Controller { // 类名大写
  async judgePsw() { // async await 异步
    const { ctx } = this;
    const params = ctx.request.body;
    if (params.password === 666666 || params.password === '666666') {
      ctx.body = {
        code: 200,
        msg: 'success!',
        data: null,
      };
    } else {
      ctx.body = {
        code: -1,
        msg: '密码不对!',
        data: null,
      };
    }
  }
  async addLink() {
    const { ctx } = this;
    const params = ctx.request.body;
    const links = await this.app.mysql.query('select * from LINK', '');
    // 判断添加的value值是否存在
    const findIndex = links.findIndex(i => i.value === params.value);
    console.log(30, params);
    if (findIndex === -1) {
      const { country, value } = params;
      await this.app.mysql.insert('LINK', { country, date: utils.getCurrentTime(), value });
      ctx.body = {
        code: 200,
        msg: 'Thank you for sharing!',
        data: null,
      };
    } else {
      ctx.body = {
        code: -1,
        msg: 'The content you share already exists!',
        data: null,
      };
    }
  }

  async getLinks() {
    const { ctx } = this;
    let links = await this.app.mysql.query('select * from LINK', '');
    links = links.sort((a,b)=>{
      return (+new Date(a.date)) < (new Date(b.date)) ? 1 : -1
    })
    const data = links.map(i=>{
      return {...i, ...{date: utils.formatDate(+new Date(i.date))}}
    })
    ctx.body = {
      code: 200,
      msg: '获取数据成功!',
      data: data,
    };
  }
}

module.exports = Share; // 别忘了导出类
