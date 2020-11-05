import handleObserver from './observer'

const handleTargets = ({items}) => {
    let observer = handleObserver(items)
    let targets = document.querySelectorAll('.lazyload')
    targets.forEach(target => observer.observe(target))
}

export default handleTargets