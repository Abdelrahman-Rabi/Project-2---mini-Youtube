const ul = $(`<ul></ul>`)
$('#paly-list').append(ul);
videos.forEach(function (video) {
    const li = $(`<li id='${video.id}'><img src="${video.thumbnail}" alt="${video.thumbnail}"><p>${video.title}</p></li>`)
    ul.append(li)
})


const li = $(`li`)
li.on('click',function(){
    const iframe = $(`<iframe  src="https://www.youtube.com/embed/${this.id}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
    $('#video-player').append(iframe)
    // $('#vid-frame').attr('src',$(`https://www.youtube.com/embed/${this.id}`))
})


