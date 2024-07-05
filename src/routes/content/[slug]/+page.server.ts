import { error } from '@sveltejs/kit'

export async function load({ params }) {
	console.log('load', params.slug);
	try {
		const post = await import(`$content/${params.slug}.md`)

		console.log(post)
		return {
			content: post.default,
			meta: post.metadata
		}
	} catch (e) {
		error(404, `Could not find ${params.slug}`)
	}
}