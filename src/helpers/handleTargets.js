import handleObserver from './observer'

const handleTargets = (data) => {
    let observer = handleObserver(data)
    let targets = document.querySelectorAll('.lazyload')
    targets.forEach(target => observer.observe(target))
}

export default handleTargets