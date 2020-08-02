const session = require('koa-session');
const koa = require('koa');
const app = new koa();
app.keys = ['Shh, its a secret!'];
app.use(session(app));  // Include the session middleware
app.use(function *(){
   var n = this.session.views || 0;
   this.session.views = ++n;
   if(n === 1)
      this.body = '👏第一次进来!';
   else
      this.body = "查看了当前页 " + n + " times!";
})
app.listen(3000);
