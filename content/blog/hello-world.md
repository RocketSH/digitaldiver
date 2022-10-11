---
slug: hello-world
title: I am title
---
### Strong Params
- It forces you to whitelist the attributes that can be saved.
```ruby
def book_params
  params.require(:book).permit(:title, :author, :cover, :language)
end
``` 