# frandroidCopy
[https://frandroid.com](https://quentin-sauvetre.fr) is a french website about tech and android news

## WHY
I intercepted HTTPS traffic on my phone (Android) and I discovered that ALL the content of Frandroid articles was freely accessible from an API.
I contacted them on Twitter (mention and DM) and by email to their technical team, no response

## Getting Started
```
git clone https://github.com/qsvtr/frandroidCopy.git
```

## URLS
* basic: http://json-cache.humanoid.fr/frandroid/posts/?json=1
* full: http://json-cache.humanoid.fr/frandroid/posts/?json=1&custom_fields=dsq_thread_id,published_on_id,num_pages,_post_featured,_post_format,_post_layout_option_video&exclude=slug,type,title_plain,content,tags,comments,comment_status,status&page=1&count=10