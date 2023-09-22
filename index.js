function newImage (url, leftlocation, bottomlocation){
 
    let imageObject = document.createElement('img')
    imageObject.src = url
    imageObject.style.position = 'fixed'
    imageObject.style.left = leftlocation + 'px'
    imageObject.style.bottom = bottomlocation + 'px'
    document.body.append(imageObject)
    return imageObject
}

    function newItem (url, leftlocation, bottomlocation){
    
    let imageObject = newImage(url, leftlocation, bottomlocation)
    imageObject.addEventListener('dblclick', function() {
    imageObject.remove()
    })
    }

    

newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)
newImage('assets/ganondorf.png', 650, 100)

newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)

// function background(url){
    
//     let imageObject = background(url)
//     for [let sky = 0; sky<window.innerWidth; sky++]
//     let sky =  document.CreateElement ('img')
// }


// background('assets/grass.png,',100, 100)
// background('assets/sky.png',100, 100)