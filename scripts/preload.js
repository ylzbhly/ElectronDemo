window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if(element) element.innerText = text
    }

    for(const dependency of ['chrome', 'node', 'electron']) {
        replaceText(`${dependency}-version`, process.versions[dependency])
        console.log(dependency)
        console.log(process.versions[dependency])
        // console.log(document.getElementById('${dependency}-version').innerText)
        console.log(`${dependency}`)
    }
})

