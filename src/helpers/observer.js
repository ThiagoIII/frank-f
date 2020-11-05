import Picture from '../components/Picture'
import React from 'react'
import ReactDOM from 'react-dom'

const handleObserver = (items) => {
    let observer = new IntersectionObserver( function(entries)
    {
        entries.map( entry => {
        if(entry.isIntersecting && entry.intersectionRatio === 1){
            let dataindex = entry.target.getAttribute('data-index')
            let fields = items[dataindex].fields
        /*     let pic = document.createElement('picture')
            let sourceWebP = document.createElement('source')
            let sourceDefault = document.createElement('source')
            let imgDefault = document.createElement('img')
            sourceWebP.setAttribute('type','image/webp')
            sourceWebP.setAttribute('sizes','(max-width: 600px) 90vw, (max-width: 1000px) 45vw, 30vw')
            sourceWebP.setAttribute('srcSet',`${data.items[dataindex].fields.file.url}?fm=webp&w=300&fit=pad 300w,
                            ${data.items[dataindex].fields.file.url}?fm=webp&w=500&fit=pad 500w`)
            sourceDefault.setAttribute('type','image')
            sourceDefault.setAttribute('sizes','(max-width: 600px) 90vw, (max-width: 1000px) 45vw, 30vw')
            sourceDefault.setAttribute('srcSet',`${data.items[dataindex].fields.file.url}?w=300&fit=pad 300w,
                            ${data.items[dataindex].fields.file.url}?w=500&fit=pad 500w`)
            imgDefault.setAttribute('alt',`${data.items[dataindex].fields.title}`)
            imgDefault.setAttribute('sizes','(max-width: 600px) 90vw, (max-width: 1000px) 45vw, 30vw')
            imgDefault.setAttribute('srcSet',`${data.items[dataindex].fields.file.url}?w=300&fit=pad 300w,
                            ${data.items[dataindex].fields.file.url}?w=500&fit=pad 500w`)
            imgDefault.setAttribute('src',`${data.items[dataindex].fields.file.url}`)
            pic.appendChild(sourceWebP)
            pic.appendChild(sourceDefault)
            pic.appendChild(imgDefault) */
            ReactDOM.render(<Picture fields={fields} />, entry.target)
            //entry.target.appendChild(pic)
            observer.unobserve(entry.target)
            }
        })
    }, 
    {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: [1.0]
    })

    return observer
}

export default handleObserver

            