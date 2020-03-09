from scrapy import Spider, Request


class IndeedSpider(Spider):
    name = 'indeed.com'

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.current_page = 0

    def start_requests(self):
        url = 'https://www.indeed.com/find-jobs.jsp'

        yield Request(url=url, callback=self.parse)

    def parse(self, response):
        categories = response.css('#categories a::attr(href)').extract()
        if categories:
            for category in categories:
                category = response.urljoin(category)
                yield Request(url=category, callback=self.parse_category)

    def parse_category(self, response):
        job_titles = response.css('a.jobTitle::attr(href)').extract()
        if job_titles:
            for job_title in job_titles:
                job_title = response.urljoin(job_title)
                yield Request(url=job_title, callback=self.parse_job_title)

    def parse_job_title(self, response):
        self.current_page += 1
        if self.current_page == 15:
            self.current_page = 0
            return

        rows = response.css('.row.result')
        for row in rows:
            yield {
                'title': ''.join(row.css('h2.jobtitle a::attr(title)').extract()).strip(),
                'company': ''.join(row.css('span.company > span > a::text').extract()).strip(),
                'description': ''.join(row.css('table span.summary::text').extract()).strip(),
            }

        next_page = response.css('.pagination a::attr(href)')[-1].extract()
        next_page = response.urljoin(next_page)
        yield Request(url=next_page, callback=self.parse_job_title)