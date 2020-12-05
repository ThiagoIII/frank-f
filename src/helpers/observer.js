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
                ReactDOM.render(<Picture fields={fields} />, entry.target)
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

            