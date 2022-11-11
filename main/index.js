let user = document.querySelectorAll('.a-profile-name')
let commentDate = document.querySelectorAll('.review-date')
let commentContent = document.querySelectorAll('.review-text-content')


const userData = []
user.forEach(name => {
  userData.push({ name: name.innerText })
})
commentDate.forEach((commentDate, index) => {
  userData[index].commentDate = commentDate.innerText
})
commentContent.forEach((commentContent, index) => {
  userData[index].commentContent = commentContent.innerText
})
//列标题，逗号隔开，每一个逗号就是隔开一个单元格
let str = `买家名称,评论日期,评论内容\n`;
//增加\t为了不让表格显示科学计数法或者其他格式
for (let i = 0; i < userData.length; i++) {
  for (let item in userData[i]) {
    str += `${userData[i][item] + '\t'},`;
  }
  str += '\n';
}
//encodeURIComponent解决中文乱码
let uri = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(str);
//通过创建a标签实现
let link = document.createElement("a");
link.href = uri;
//对下载的文件命名
link.download = "获取数据.csv";
document.body.appendChild(link);
link.click();
document.body.removeChild(link);