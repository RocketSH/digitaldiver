---
slug: hello-world
title: I am title
date: "2022-10-11"
---
### Strong Params
- It forces you to whitelist the attributes that can be saved.
```ruby
def book_params
  params.require(:book).permit(:title, :author, :cover, :language)
end
``` 