import { statSync } from "fs";

// 获取参数
const args = process.argv.slice(2);

// 日期的格式
function dateFormat(date) {
  return `${date.getFullYear()}-${zero(date.getMonth() + 1)}-${zero(date.getDate())} ${zero(date.getHours())}:${zero(date.getMinutes())}:${zero(
    date.getSeconds()
  )}`;
}

// 小于10补0
function zero(d) {
  return d.toString().padStart(2, "0");
}

// 获取文件创建时间
function getBirthtime() {
  try {
    const stats = statSync(args[0]);
    const creationTime = stats.birthtime;
    return dateFormat(creationTime);
  } catch (err) {
    console.error(err);
  }
}

// 输出frontmatter
function outputFrontmatter() {
  console.log("---");
  console.log("title: ");
  console.log("date: " + getBirthtime());
  console.log("permalink: /pages/" + (Math.random() + Math.random()).toString(16).slice(2, 8) + "/");
  console.log("isOriginal: true");
  console.log('excerpt: " "');
  console.log("---");
}

outputFrontmatter();
