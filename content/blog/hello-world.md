---
slug: hello-world
title: I am title
date: "2022-10-11"
description: |
  This is my first blog post description.
---
### Strong Params
It forces you to whitelist the attributes that can be saved.
```ruby
def book_params
  params.require(:book).permit(:title, :author, :cover, :language)
end
``` 
