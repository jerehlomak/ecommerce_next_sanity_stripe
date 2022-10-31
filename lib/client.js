import SanityClient from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

export const client = SanityClient({
    projectId: 'e6ev7mzl',
    dataset: 'production',
    apiVersion: '2021-03-25',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
