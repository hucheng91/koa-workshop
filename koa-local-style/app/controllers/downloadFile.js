const send = require('koa-send');
const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

async function  download(ctx) {
    const name = ctx.params.name;
    const path = `static/upload/${name}`;
    ctx.attachment(path);
    await send(ctx, path);
}
async function downloadAll(ctx) {
    // 将要打包的文件列表
    const zipName = '1.zip';
    const zipStream = fs.createWriteStream('1.zip');
    const zip = archiver('zip');
    zip.pipe(zipStream);
    zip.directory('static/upload/', false); // 添加整个文件夹到压缩包
    await zip.finalize();
    ctx.attachment(zipName);
    await send(ctx, zipName);
}
module.exports = {
    download,
    downloadAll
};