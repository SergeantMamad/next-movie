"use client"
const imageKitLoader = ({ src, width, quality } : {
    src:any
    width:any
    quality:any
}) => {
  if (src[0] === "/") src = src.slice(1)
  const params = [`w-${width}`]
  if (quality) {
    params.push(`q-${quality}`)
  }
  const paramsString = params.join(",")
  var urlEndpoint = "https://ik.imagekit.io/7yzbiq0tn"
  if (urlEndpoint[urlEndpoint.length - 1] === "/")
    urlEndpoint = urlEndpoint.substring(0, urlEndpoint.length - 1)
  return `${urlEndpoint}/${src}?tr=${paramsString}`
}

export default imageKitLoader
