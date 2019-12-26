const displayFrandoid = (response) => {
    if (response) {
        let data = JSON.parse(response)

        const possibleKeys = Object.keys(data.posts[1])
        let keysText = '<ul>'
        possibleKeys.forEach(keys => keysText += '<li>' +  keys + '</li>')
        keysText += '</ul><br/><p>Yes you have really access to the comments :D</p>'
        $('#keys').html(keysText)

        let text = '<h4><a href="#keys">Check possible keys (bottom)</a></h4><div class="panel panel-default"><div class="panel-body"><table class="table table-striped"><tbody>';
        data.posts.forEach(article => {
            text += '<tr>'
            text += '<td><img src="' + article.thumbnail + '"/></td>'
            text += '<td>' + article.title + '</td>'
            text += '<td><a href="' + article.url + '" target="_blank">check on Frandroid</a></td>'
            text += '<td>' + article.date + '</td>'
            text += '<td>' + article.author.slug + '</td>'
            text += '</tr>'
        })
        text += '</tbody></table></div></div>'
        $('#frandroid').append(text)
    }
    else {
        $('#errors').html('<div class="alert alert-danger text-center" role="alert">please check console</div>')
    }
}

const request = "https://cors-anywhere.herokuapp.com/http://json-cache.humanoid.fr/frandroid/posts/?json=1&count=10"
ajaxRequest('GET', request, displayFrandoid)