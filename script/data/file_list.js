class File {
  constructor(type, no, title, url, article) {
    this.type = type; //pdf, img, link
    this.no = no
    this.title = title; 
    this.url = url;
    this.article = article;
  }
}

export const list_file = [
  new File(
    'pdf',
    '臺灣新北地方法院110年交字第351號判決',
    '檢舉無違反基本人權及隱私權',
    '',
    'PH-7-1'
  )
]