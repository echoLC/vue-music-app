host="root@47.106.179.16"
rsync -azcuP ./dist/ --chmod=Du=rwx,Dog=rx,Fu=rwx,Fgo=rx --exclude node_modules --exclude coverage --exclude .env --exclude .nyc_output --exclude .git "$host:/srv/Vue_WebApp"