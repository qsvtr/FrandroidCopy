'use strict'
const ajaxRequest = (type, request, callback, data = null) => {
  $('#loading').html('<h3>Please waiting ...</h3>')
  let xhr = new XMLHttpRequest()
  if (type === 'GET' && data != null)
    request += '?' + data
  xhr.open(type, request, true)
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
  xhr.onload = function ()
  {
    switch (xhr.status)
    {
      case 200:
      case 201:
        // console.log(xhr.responseText)
        $('#loading').html('')
        callback(xhr.responseText)
        break
      case 401:

      default:
        httpErrors(xhr.status)
    }
  }
  xhr.send(data)
}

function httpErrors(errorNumber)
{
  let text
  text = '<div class="alert alert-danger" role="alert">'
  text += '<span class="glyphicon glyphicon-exclamation-sign"></span>'
  switch (errorNumber)
  {
    case 400:
      // Bad request.
      text += '<strong> Bad request</strong>'
      break
    case 401:
      // Unauthorized.
      text += '<strong> Unauthorized</strong>'
      break
    case 403:
      // Forbidden.
      text += '<strong> Forbidden</strong>'
      break
    case 404:
      // Ressource not found.
      text += '<strong> Page not found</strong>'
      break
    case 500:
      // Internal server error.
      text += '<strong> Internal server error</strong>'
      break
    case 503:
      // Service unavailable.
      text += '<strong> Service unavailable</strong>'
      break
    default:
      text += '<strong> error HTTP ' + errorNumber + '</strong>'
      break
  }
  text += '</div>'
  $('#errors').html(text)
}
