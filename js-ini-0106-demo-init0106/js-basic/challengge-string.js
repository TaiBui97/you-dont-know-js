const content = `<item>
<title>1111Sắc vóc tuổi 45 của 'bom sex' Lâm Chí Linh</title>
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
</item>
<item>
<title>Sắc vóc 222222tuổi 45 của 'bom sex' Lâm Chí Linh</title>
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
</item>
<item>
<title>Sắc v3333333333óc tuổi 45 của 'bom sex' Lâm Chí Linh</title>
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
</item>
<item>
<title>Sắc vóc tuổi44444444444 45 của 'bom sex' Lâm Chí Linh</title>
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
</item>
`;

const arrItems = content.split('<item>');
arrItems.splice(0, 1);
const getBody = (item, keyStart, keyEnd) => {
    let indexStart = item.indexOf(keyStart);
    let indexEnd = item.indexOf(keyEnd);
    return item.slice(indexStart + keyStart.length, indexEnd);

}
const arrInfoItem = arrItems.forEach(item => {
    // let indexF = item.indexOf('<title>');
    // let indexT = item.indexOf('</title>');
    // let subStringTittle = item.slice(indexF + '<title>'.length, indexT);
    let descriptions = getBody(item, '<description>', '</description>');
    let title = getBody(item, '<title>' ,'</title>')
    console.log({ descriptions , title})
});