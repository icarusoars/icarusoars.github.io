# icarusoars.github.io
- This is my personal website.
- [icarusoars.github.io](https://icarusoars.github.io)
- [skylershi.com](https://skylershi.com)

## Credits
I used a beatiful jekyll theme developed by Thomas Vaeth. You can find his repo here: https://github.com/thomasvaeth/trophy-jekyll.

Jekyll is a static site generator service that github supports. Read more about it here: https://jekyllrb.com/.

## Folder Structure
This folder is not set-up like a conventional jekyll website on github.

`jekyll_files` contains all the jekyll related files. One edits the files in here to change the website or add blog posts. This folder is a direct fork of Thomas's repo.

The root directory contains `jekyll_files` and the successfully built site.

Usually, the contents of `jekyll_files` is put directly under the root directory. Github will see that this is a jekyll repo and run `jekyll build --safe` to generate the site and serve it. However, `jekyll build --safe` is restricted and does not support many plugins.

__Hence, I build the site locally in `jekyll_files` into `jekyll_files\_site` and then move the contents into root. Github serves the built site as if it were a normal non-jekyll website.__

## Script
To make the process I described above simpler, I wrote a z-shell script.
Run `source ./build_push_prod.sh "COMMIT MESSAGE HERE"` to build jekyll site locally and push to github.
