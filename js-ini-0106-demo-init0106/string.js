// let nameCourse = " mearn stack training   ";

// let indexFind = nameCourse.indexOf('n',5); //tra ve vi tri
// console.log(indexFind);

// let isIncluded =nameCourse.includes('training'); // tra ve t/f
// console.log(isIncluded);

// let strSliced = nameCourse.slice(0,3);
// console.log(strSliced);

// let arrSplitted = nameCourse.split(' ');
// console.log(strSliced);

// let stringSubStr = nameCourse.substr(1,3);
// console.log(stringSubStr);

// let stringSubString = nameCourse.substring(1,3); //lay chi muc
// console.log(strSliced);

// let stringTrim = nameCourse.trim() //bo ki tu trong dau va cuoi
// console.log(stringTrim);

// let replaceToA = nameCourse.replace('mearn', 'MERN').trim();
// console.log(replaceToA);

////////////-------------------/////////////
const content = `<item>
<title>Sắc vóc tuổi 45 của 'bom sex' Lâm Chí Linh</title>
<description>
<![CDATA[
<a href="https://vnexpress.net/giai-tri/sac-voc-tuoi-45-cua-bom-sex-lam-chi-linh-3934776.html"><img width=130 height=100 src="https://i-giaitri.vnecdn.net/2019/06/06/sac-voc-tuoi-45-cua-bom-sex-lam-chi-linh-1559812086_180x108.jpg" ></a></br>Người mẫu kiêm diễn viên Đài Loan được fan khen nóng bỏng qua loạt ảnh quảng cáo nội y mới.
]]>
</description>
<pubDate>Thu, 06 Jun 2019 19:00:00 +0700</pubDate>
<link>
https://vnexpress.net/giai-tri/sac-voc-tuoi-45-cua-bom-sex-lam-chi-linh-3934776.html
</link>
<guid>
https://vnexpress.net/giai-tri/sac-voc-tuoi-45-cua-bom-sex-lam-chi-linh-3934776.html
</guid>
<slash:comments>0</slash:comments>
</item>`;

/**
 * title, description, pubDate, guid, link, comment (slash:comments)
 */

let indexF = content.indexOf('<title>');
let indexT = content.indexOf('</title>');
//let subStringTittle = content.substring(indexF,indexT).replace("<title>","");
 let subStringTittle = content.slice(indexF + '<title>'.length ,indexT);

console.log(subStringTittle);

let 