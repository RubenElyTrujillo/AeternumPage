import Client from './Client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(Client)

export function buildImages(source){
    const img = builder.image(source)
    return img
}