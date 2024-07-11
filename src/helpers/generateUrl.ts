import slugify from "slugify";


export const generateUrl = (title:string)=>{
    const slug = slugify(title,{
        lower:true
    })

    return slug;
}