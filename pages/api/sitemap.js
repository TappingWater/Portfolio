import { allProjects } from "@/.contentlayer/generated/index.mjs";
import { allBlogs } from "@/.contentlayer/generated/index.mjs";

const hostname = "https://chanakap.com"

function getSitemapEntry({pathname, changeFreq="monthly", priority = 0.6}) {
	return `
			<url>
					<loc>${hostname}${pathname}</loc>
					<changefreq>${changeFreq}</changefreq>
  				<priority>${priority}</priority>
			</url>
	`
}

export default async function sitemap(req, res) {
	const entries = [];
  const blogsList = allBlogs.map(post => getSitemapEntry({
        pathname: `/blog/${post.slug}`
  }))
	const projList = allProjects.map(projects => getSitemapEntry({
			pathname: `/projects/${projects.slug}`
	}))
  entries.push(getSitemapEntry({
        pathname: '/',
        priority: 1
  }))
	entries.push(getSitemapEntry({
        pathname: '/blog',
        priority: 0.8,
				changeFreq: 'weekly'
  }))
	entries.push(getSitemapEntry({
		pathname: '/projects',
		priority: 0.8,
		changeFreq: 'weekly'
	}))
	entries.push(getSitemapEntry({
		pathname: '/about',
		priority: 0.8
	}))
	entries.push(...blogsList)
	entries.push(...projList)

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${entries.join('\n')}
        </urlset>      
    `.trim()

  res.writeHead(200, {
        'Content-Type': 'application/xml'
  })
  return res.end(sitemap);
}
