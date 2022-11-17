import {v2 as cloudinary} from 'cloudinary'

cloudinary.config({
    cloud_name: "alba-gonzalez",
    api_key: "467938578211431",
    api_secret: "aYl2FTH3zjBo0u02oCdI6fZ2APQ"
})

export const uploadImage = async filePath => {
    return await cloudinary.uploader.upload(filePath, {
        folder: "posts"
    })
}

export const deleteImage = async id => {
    return await cloudinary.uploader.destroy(id)
}