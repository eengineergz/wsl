lynx -dump https://html.com/blog/100-web-development-cheat-sheets | awk '/http/{print $2}' > links.md
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
wget -qO- https://www.geeksforgeeks.org/top-10-useful-github-repos-that-every-developer-should-follow/ | grep -Eoi '<a [^>]+>' |  grep -Eo 'href="[^\"]+"' |  grep -Eo '(http|https)://[^/"]+'>output.md
wget -qO- https://www.geeksforgeeks.org/top-10-useful-github-repos-that-every-developer-should-follow | grep -Eoi '<a [^>]+>' |  grep -Eo 'href="[^\"]+"' |  grep -Eo '(http|https)://[^/"]+'>output.md
https://www.geeksforgeeks.org/top-10-useful-github-repos-that-every-developer-should-follow
lynx -dump https://geeksforgeeks.org/top-10-useful-github-repos-that-every-developer-should-follow | awk '/http/{print $2}' > links2.txt
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
ls 
tree
clear
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
npm init
npm install shelljs
npm install mocha --save-devnpm install chai --save-dev
npm config set python python2.7
sudo npm config set python python2.7
echo "" > $(npm config get userconfig)
sudo echo "" > $(npm config get userconfig)
npm config set python python2.7
npm install
npm install -g search hyper
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . -name "*.zip" -type f -print -delete
find . -empty -type d -print -delete
lynx -dump https://blog.bitsrc.io/11-react-application-boilerplates-for-2019-b49a8226ea54 | awk '/http/{print $2}' > links.md
cd ..
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
git add .
wget -r http://jellydemos.com/html/muziq/muziq-hardrock/index-multipages.html
docker run   -it --rm -p 8080:80 --name php   -v "$PWD":/var/www/html   php:7.4-apache
docker run -d -p 80:80 docker/getting-started
node file-name-from-path.js 
npm i crawler
git remote add origin https://github.com/bgoonz/web-links-2-html-dir.git
git init
git add .
git commit -m "initial commit"
git push 
git push -u origin master
git remote add origin https://github.com/bgoonz/web-links-2-html-dir.git
sed -n 's/.*href="\([^"]*\).*/\1/p' file
sed -n 's/.*href="\([^"]*\).*/\1/p' file http://www.drawspace.com/lessons/b03/simple-symmetry
sed -n 's/^.*<a\s\+href\=\([^>]\+\)>\([^<]\+\)<\/a>.*$/\2\n\1/p' https://developer.mozilla.org/en-US
node crawler.js 
npm install
npm install node fetch
npm i jsdom
npm install isomorphic-fetch es6-promise
npm webScraper.js 
node webScraper.js 
git init
git add .
git clone https://github.com/nelsonic/learn-vagrant.git && cd learn-vagrant
docker build -t learn-docker .
docker-compose run --rm app mix phx.new . --app name_of_the_app
config :app_name, AppName.Repo,
docker-compose run web mix ecto.create
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
docker versio
docker version
docker run hello-world
docker run -it ubuntu bash
docker container ls
docker info
docker build -t learn-docker .
docker run -it -p 8888:8888 learn-docker bash
sudo docker run -it -p 8888:8888 learn-docker bash
docker exec -it learn-docker bash
docker images
docker ps -a
docker inspect a205fc3a096f
sudo nginx -t
npm install
npm install ipfs-core
node-gyp rebuild
git clone https://github.com/ipfs/js-ipfs.git
git clone https://github.com/nelsonic/learn-vagrant.git && cd learn-vagrant
vagrant up
sudo vagrant up
wsl sudo apt-get update
export PATH=$PATH:/mnt/c/Windows/System32
sudo vagrant up
sudo apt install powershell
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
sudo dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
wsl --install
wsl -get--install
export PATH="$PATH:/mnt/c/Program Files/Oracle/VirtualBox"
sudo vagrant up
Failed to locate the powershell executable on the available PATH. Please
ensure powershell is installed and available on the local PATH, then
run the command again.
export PATH=$PATH:/mnt/c/Windows/System32/WindowsPowerShell/v1.0
sudo vagrant up
docker run Dockerfile.latest
docker run dockerfile.latest
npm install -g ipfs
npm install
npm run postinstall
npm install
npm install  -f
npm audit fix -f
npm serve
npm run test
npm run reset
npm run docker:rc
npm run build
npm run postinstall
chmod -x vagrantfile_ssh
bash vagrantfile_ssh
chmod -x vagrantfile_ssh
npm run test
elasticsearch --config=/usr/local/opt/elasticsearch/config/elasticsearch.yml
npm run reset
https://github.com/ipfs/js-ipfs.git
jsipfs daemon
npm run docker:rc:push-next
npm install
npm audit fix -f
npm run start
for file in *.; do      rename 's/\.coffee$/.html/' *.coffee; done
sass --update scss:css
gem install sass-globbing
sass -r sass-globbing --watch sass_dir: './'
sass -r sass-globbing --watch sass_dir: components
sass -r sass-globbing --watch sass_dir: .
sass -r sass-globbing --trace sass_dir: .
sass --watch sass:css
sass --watch components:css
sass --trace components:css
sass --watch components:css --style compressed
sass --update sass-dir:
sass --update sass-dir:.
sass --update components:.
sass --update .:.
compass compile
sudo gem update
for file in *.; do      rename 's/\.coffee$/.html/' *.coffee; done
git clone https://github.com/freeCodeCamp/devdocs.git
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
git clone https://github.com/freeCodeCamp/devdocs.git
sass --update scss:css
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . -name "*.zip" -type f -print -delete
sass --update scss:css
sudo apt install ruby-sass
sass --update scss:css
for file in *.; do      rename 's/\.coffee$/.html/' *.coffee; done
sudo gem install sass compass
compass compile
compass init --syntax=sass --./=css
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . -name "*.zip" -type f -print -delete
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . -empty -type f -print -delete
find . -empty -type d -print -delete
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
httrack --ext-depth=3 https://www.runpkg.com/
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
git clone https://github.com/freeCodeCamp/devdocs.git
node form.js 
npm init -y
npm install request
node form.js 
node auth.js 
npm init -y
npm install request
node request.js 
node simple-web-server.js 
yarn create emma
git add .
npx emma-cli
emma-cli async
yarn global add emma-cli
sudo yarn global add emma-cli
emma-cli async
yarn create emma
% PATH=C:/ProgramData/Microsoft/Windows/Start Menu/Programs/PostgreSQL  PATH
npm ls -gp --depth=0 | awk -F/ '/node_modules/ && !/\/npm$/ {print $NF}' | xargs npm -g rm
code .
npm install -g mocha
du -sh /var/cache/apt/archives
sudo du -sh /var/cache/apt/archives
sudo apt-get clean
sudo apt-get autoremove --purge
sudo apt-get autoremove
auto clean
apt autoclean
sudo apt-get clean
apt get autoremove
apt autoremove
apt autoclean
sudo apt autoclean
sudo apt autoremove
sudo apt clean
sudo apt autoremove --purge snapd
sudo apt-get autoremove --purge
rm -rf ~/.cache/thumbnails/*
journalctl --disk-usage
sudo journalctl --vacuum-time=1d
sudo apt autoclean
systemd-resolve --statistics
systemd-resolve --flush-caches
udo polipo -x
sudo apt install udo
udo polipo -x
sudo apt-get autoclean
sudo apt-get autoremove
sudo apt clean
find . -depth -exec rmdir {} \;  
find . -name "*.zip" -type f -print -delete
find . -depth -exec rmdir {} \;  
rm -r
rm -rf *
/usr/bin/python /home/bryan/.vscode-server/extensions/ms-python.python-2020.12.424452561/pythonFiles/pyvsc-run-isolated.py pip install -U pylint --user
find . -depth -exec rmdir {} \;  
find . -depth -exec rmdir {} \;  
npm cache rm
npm cache clean --force
nvm cache clean --force
npm cache clean --force
npm install
sudo npm install
find . -depth -exec rmdir {} \;  find . -depth -exec rmdir {} \;  
find . -depth -exec rmdir {} \;  
du -hs /path/to/directory
du -hs /.
sudo du -hs /.
cd ..
ll
npm start
npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn-starter/tree/master/learn-starter"
sudo 
sudo npx create-react-app my-app
npx create-react-app my-app
node auth.js 
sudo -u postgres psql
\i database-notes.sql
sudo -u postgres psql
PATH=C:/Program Files/PostgreSQL/13  PATH
PATH=c:/Program Files/PostgreSQL/13  PATH
psql
sudo service postgresql start
psql
sudo -u postgres psql
rsync -a -f"+ */" -f"- *" './'/ './../'/
rsync -a -f"+ */" -f"- *" './'/ './../'/
rsync -a -f"+ */" -f"- *" './../'/ './'/
git add .
git commit -m "finally something works"
git push 
git add .
git commit -m "finally something works"
git push 
git add .
git commit -m "forgot contact info"
git push 
git add .
git commit -m
git commit -m "stuff"
git push 
git add .
git commit "why"
git commit -m "why"
git push 
cd 
ll
ln -s ../..
cd ../..
cd ../../../
cd ..
cd..
cd ..
cd 0-a-A-October
git add .
cd weeks
cd 00-weeks/
git add .
git rm --cached 
git rm --cached 00-4-all-time/_0-Random-Repo/04-General-learning/ember-auto-import
git rm --cached 00-4-all-time/_0-Random-Repo/04-General-learning/ember-auto-import -f
git commit -m "house keeping"
git push 
git rm 00-4-all-time/_0-Random-Repo/zipped.zip
git filter-branch --index-filter 'git rm -r --cached --ignore-unmatch assets/_00-4-all-time/_0-Random-Repo/zipped.zip' HEAD
git add .
git commit -m "idk why it failed to push last time"
git rm --cached 00-4-all-time/_0-Random-Repo/04-General-learning/ember-auto-import\
git rm --cached 00-4-all-time/_0-Random-Repo/04-General-learning/ember-auto-import
git rm --cached 00-4-all-time/_0-Random-Repo/04-General-learning/ember-auto-import -f
git commit -m "up up and away"
git push 
sudo apt update
sudo apt upgrade
sudo apt clean
sudo apt autoclean
ll
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
node test.js
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
node txt-file-2-strArr.js 
node txtFile2Arr.js 
node txt-file-2-strArr.js 
node txtFile2Arr.js 
git add .
git commit -m "initial commit"
git push -u origin master
git add .
git commit -m ".gitignore"
git push 
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/bryan-guner/DS-Algo-Practice.git
git push
git push -u origin master
find . -empty -type f -print -delete
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . -depth -exec rmdir {} \;  
rename 's/(.*)/$1.html/' *
rename 's/(.*)/$1.html/' *
sudo rename 's/(.*)/$1.html/' *
rename 's/(.*)/$1.html/' *
httrack --ext-depth=4 https://www.vickielasher.com/
wget -r https://bryanguner.wixsite.com/website
for f in * ; do    mv "$f" "$f.html"; done
rename 's/(.*)/$1.html/' *
wget -r https://www.vickielasher.com/
for f in * ; do    mv "$f" "$f.html"; done
for f in * ; do    mv "$f" "$f.html"; done
for f in * ; do    mv "$f" "$f.html"; done
for f in * ; do    mv "$f" "$f.css"; done
for f in * ; do    mv "$f" "$f.html"; done
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . -name "*.zip" -type f -print -delete
tree -d -L 4 >tree-structure.md
cd home
;;
ll
cd ..
cd bryan
tree -d -L 4 >tree-structure.md
tree -d -L 4 
tree -d -L 4 >out.md
cd ..
tree -d -L 4 >out.md
cd ..
root
su
tree -d -L 4 >tree-structure.md
sudo tree -d -L 4 >tree-structure.md
export ROOTSYS=$HOME/root
export PATH=$PATH:$ROOTSYS/bin
export LIBPATH=$LIBPATH:$ROOTSYS/lib
ll
su
GIT_CURL_VERBOSE=1 git pull
tree -d 6 >file-tree.md
cd ..
tree -d 6 >file-tree.md
su
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . -name "*.zip" -type f -print -delete
npm install
npm audit fic
npm audit fix
npm audit fix --force
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . -name "*.zip" -type f -print -delete
find . -empty -type -d -print -ype: -delete      
find . -empty -type -d -print -delete
for x in "./"/*/; do   (cd "$x";    files=(*);    printf '%s\n' "${files[@]}" > deleteme.txt;   ); donefor x in "./"/*/; do
done
for x in "./"/*/; do   (cd "$x";    files=(*);    printf '%s\n' "${files[@]}" > filesNames.txt;   ); done
for x in "./"/*/; do   (cd "$x";    files=(*);    printf '%s\n' "${files[@]}" > deleteme.txt;   ); done
find . -empty -type d -print -delete
find . -empty -type f -print -delete
for x in "./"/*/; do   (cd "$x";    files=(*);    printf '%s\n' "${files[@]}" > deleteme.txt;   ); done
for x in "./"/*/; do   (cd "$x";    files=(*);    printf '%s\n' "${files[@]}" > deleteme.txt;   ); done
for x in "./"/*/; do   (cd "$x";    files=(*);    printf '%s\n' "${files[@]}" > deleteme.txt;   ); done
find . -empty -type f -print -delete
for x in "./"/*/; do   (cd "$x";    files=(*);    printf '%s\n' "${files[@]}" > deleteme.txt;   ); done
for x in "./"/*/; do   (cd "$x";    files=(*);    printf '%s\n' "${files[@]}" > deleteme.txt;   ); done
cd ..
su
cd ..
cd..
cd ..
ll
cd ..
code .
su
cd ..
su
ll
cd ..
code .
code -insiders  .
code --insiders  .
ls -R /path | awk '
/:$/&&f{s=$0;f=0}
/:$/&&!f{sub(/:$/,"");s=$0;f=1;next}
NF&&f{ print s"/"$0 }'>listing.md
cd ..
ls -R /path | awk '
/:$/&&f{s=$0;f=0}
/:$/&&!f{sub(/:$/,"");s=$0;f=1;next}
NF&&f{ print s"/"$0 }'>listing.md
ll -R /path | awk '
/:$/&&f{s=$0;f=0}
/:$/&&!f{sub(/:$/,"");s=$0;f=1;next}
NF&&f{ print s"/"$0 }'>listing.md
ls './' -R /path | awk '
/:$/&&f{s=$0;f=0}
/:$/&&!f{sub(/:$/,"");s=$0;f=1;next}
NF&&f{ print s"/"$0 }'>listing.md
ls -R './' | awk '
/:$/&&f{s=$0;f=0}
/:$/&&!f{sub(/:$/,"");s=$0;f=1;next}
NF&&f{ print s"/"$0 }'>listing.md
sudo ls -R './' | awk '
/:$/&&f{s=$0;f=0}
/:$/&&!f{sub(/:$/,"");s=$0;f=1;next}
NF&&f{ print s"/"$0 }'>listing.md
su
npm completion >> ~/.bashrc
npm docs react
npm ci - clean-install
npm update
npm update -g
npm explore
npm explore -g
npm root
cd /home/bryan/node_modules
cd 
cd ..
cd bryan
cd node_modules
npm install -g mocha
ll
cd 
cd ..
cd home
cd bryan
cd .
cd ..
tree -d -L 4
tree -d -L 4 >root-tree.md
sudo tree -d -L 4 >root-tree.md
sudo tree -d -L 4 >./home/bryab/root-tree.md
cd home 
cd bryan
touch root-tree.md
cd ..
sudo tree -d -L 4 >./home/bryab/root-tree.md
sudo tree -d -L 4 >./home/bryab/~/root-tree.md
cd home
touch root-tree.md
sudo touch root-tree.md
cd ..
sudo tree -d -L 4 >./home/root-tree.md
cd ..
code .
cd .
cd home
export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:$ROOTSYS/lib
root
ll
. bin/thisroot.sh   
root
cd ..
root
sudo apt root
sudo root
su
sudo passwd
su
ll
su
rm -rf /MY-WEB-DEVr
su
sudo kill -9 process_id
kill -9 -1
find . -name '\.vscode' -type d -prune -exec rm -rf '{}' +
find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
git add .
git rm --cached 00-4-all-time/_0-Random-Repo/04-General-learning/ember-auto-import
git rm --cached 00-4-all-time/_0-Random-Repo/04-General-learning/ember-auto-import -f
find . -empty -type d -print -delete
find . -depth -exec rmdir {} \;  
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . -name '\.vscode' -type d -prune -exec rm -rf '{}' +
find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +
find . -name '\.vscode' -type d -prune -exec rm -rf '{}' +
tree -d -L 4 >README.md
find . -empty -type f -print -delete
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
find . -empty -type f -print -delete
find . -name "*.ini" -type f -print -delete
find . -name '\.vscode' -type d -prune -exec rm -rf '{}' +
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . -name "*.zip" -type f -print -delete
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
find . -depth -exec rmdir {} \;  
find . -empty -type f -print -delete
find . -empty -type d -print -delete
git init
git add .
git commit -m "initial commit"
git add .
git commit -m "initial commit"
git push -u origin master
git add .
git commit -m "plus"
git push 
git add .
git commit -m "cleaner code"
git push 
git add .
git commit -m "cleanup"
git push 
git add .
git commit -m "cleaning out comments"
git push 
git lfs install
curl -s https://packagecloud.io/install/repositories/github/git-lfs/script.deb.sh | sudo bash
#!/bin/bash
unknown_os () {   echo "Unfortunately, your operating system distribution and version are not supported by this script.";   echo;   echo "You can override the OS detection by setting os= and dist= prior to running this script.";   echo "You can find a list of supported OSes and distributions on our website: https://packagecloud.io/docs#os_distro_version";   echo;   echo "For example, to force Ubuntu Trusty: os=ubuntu dist=trusty ./script.sh";   echo;   echo "Please email support@packagecloud.io and let us know if you run into any issues.";   exit 1; }
gpg_check () {   echo "Checking for gpg...";   if command -v gpg > /dev/null; then     echo "Detected gpg...";   else     echo "Installing gnupg for GPG verification...";     apt-get install -y gnupg;     if [ "$?" -ne "0" ]; then       echo "Unable to install GPG! Your base system has a problem; please check your default OS's package repositories because GPG should work.";       echo "Repository installation aborted.";       exit 1;     fi;   fi; }
curl_check () {   echo "Checking for curl...";   if command -v curl > /dev/null; then     echo "Detected curl...";   else     echo "Installing curl...";     apt-get install -q -y curl;     if [ "$?" -ne "0" ]; then       echo "Unable to install curl! Your base system has a problem; please check your default OS's package repositories because curl should work.";       echo "Repository installation aborted.";       exit 1;     fi;   fi; }
install_debian_keyring () {   if [ "${os}" = "debian" ]; then     echo "Installing debian-archive-keyring which is needed for installing ";     echo "apt-transport-https on many Debian systems.";     apt-get install -y debian-archive-keyring &> /dev/null;   fi; }
detect_os () {   if [[ ( -z "${os}" ) && ( -z "${dist}" ) ]]; then
    if [ -e /etc/lsb-release ]; then       . /etc/lsb-release       if [ "${ID}" = "raspbian" ]; then         os=${ID};         dist=`cut --delimiter='.' -f1 /etc/debian_version`;       else         os=${DISTRIB_ID};         dist=${DISTRIB_CODENAME}         if [ -z "$dist" ]; then           dist=${DISTRIB_RELEASE};         fi;       fi     elif [ `which lsb_release 2>/dev/null` ]; then       dist=`lsb_release -c | cut -f2`;       os=`lsb_release -i | cut -f2 | awk '{ print tolower($1) }'`     elif [ -e /etc/debian_version ]; then
      os=`cat /etc/issue | head -1 | awk '{ print tolower($1) }'`;       if grep -q '/' /etc/debian_version; then         dist=`cut --delimiter='/' -f1 /etc/debian_version`;       else         dist=`cut --delimiter='.' -f1 /etc/debian_version`;       fi     else       unknown_os;     fi;   fi   if [ -z "$dist" ]; then     unknown_os;   fi
  os="${os// /}";   dist="${dist// /}"   echo "Detected operating system as $os/$dist."; }
main () {   detect_os;   curl_check;   gpg_check
  echo -n "Running apt-get update... ";   apt-get update &> /dev/null;   echo "done."
  install_debian_keyring   echo -n "Installing apt-transport-https... ";   apt-get install -y apt-transport-https &> /dev/null;   echo "done."   gpg_key_url="https://packagecloud.io/github/git-lfs/gpgkey";   apt_config_url="https://packagecloud.io/install/repositories/github/git-lfs/config_file.list?os=${os}&dist=${dist}&source=script"   apt_source_path="/etc/apt/sources.list.d/github_git-lfs.list"   echo -n "Installing $apt_source_path..."
  curl -sSf "${apt_config_url}" > $apt_source_path;   curl_exit_code=$?   if [ "$curl_exit_code" = "22" ]; then     echo;     echo;     echo -n "Unable to download repo config from: ";     echo "${apt_config_url}";     echo;     echo "This usually happens if your operating system is not supported by ";     echo "packagecloud.io, or this script's OS detection failed.";     echo;     echo "You can override the OS detection by setting os= and dist= prior to running this script.";     echo "You can find a list of supported OSes and distributions on our website: https://packagecloud.io/docs#os_distro_version";     echo;     echo "For example, to force Ubuntu Trusty: os=ubuntu dist=trusty ./script.sh";     echo;     echo "If you are running a supported OS, please email support@packagecloud.io and report this.";     [ -e $apt_source_path ] && rm $apt_source_path;     exit 1;   elif [ "$curl_exit_code" = "35" -o "$curl_exit_code" = "60" ]; then     echo "curl is unable to connect to packagecloud.io over TLS when running: ";     echo "    curl ${apt_config_url}";     echo "This is usually due to one of two things:";     echo;     echo " 1.) Missing CA root certificates (make sure the ca-certificates package is installed)";     echo " 2.) An old version of libssl. Try upgrading libssl on your system to a more recent version";     echo;     echo "Contact support@packagecloud.io with information about your system for help.";     [ -e $apt_source_path ] && rm $apt_source_path;     exit 1;   elif [ "$curl_exit_code" -gt "0" ]; then     echo;     echo "Unable to run: ";     echo "    curl ${apt_config_url}";     echo;     echo "Double check your curl installation and try again.";     [ -e $apt_source_path ] && rm $apt_source_path;     exit 1;   else     echo "done.";   fi   echo -n "Importing packagecloud gpg key... "
  curl -L "${gpg_key_url}" 2> /dev/null | apt-key add - &>/dev/null;   echo "done."   echo -n "Running apt-get update... "
  apt-get update &> /dev/null;   echo "done."   echo;   echo "The repository is setup! You can now install packages."; }
main
#!/bin/bash
unknown_os () {   echo "Unfortunately, your operating system distribution and version are not supported by this script.";   echo;   echo "You can override the OS detection by setting os= and dist= prior to running this script.";   echo "You can find a list of supported OSes and distributions on our website: https://packagecloud.io/docs#os_distro_version";   echo;   echo "For example, to force Ubuntu Trusty: os=ubuntu dist=trusty ./script.sh";   echo;   echo "Please email support@packagecloud.io and let us know if you run into any issues.";   exit 1; }
gpg_check () {   echo "Checking for gpg...";   if command -v gpg > /dev/null; then     echo "Detected gpg...";   else     echo "Installing gnupg for GPG verification...";     apt-get install -y gnupg;     if [ "$?" -ne "0" ]; then       echo "Unable to install GPG! Your base system has a problem; please check your default OS's package repositories because GPG should work.";       echo "Repository installation aborted.";       exit 1;     fi;   fi; }
curl_check () {   echo "Checking for curl...";   if command -v curl > /dev/null; then     echo "Detected curl...";   else     echo "Installing curl...";     apt-get install -q -y curl;     if [ "$?" -ne "0" ]; then       echo "Unable to install curl! Your base system has a problem; please check your default OS's package repositories because curl should work.";       echo "Repository installation aborted.";       exit 1;     fi;   fi; }
install_debian_keyring () {   if [ "${os}" = "debian" ]; then     echo "Installing debian-archive-keyring which is needed for installing ";     echo "apt-transport-https on many Debian systems.";     apt-get install -y debian-archive-keyring &> /dev/null;   fi; }
detect_os () {   if [[ ( -z "${os}" ) && ( -z "${dist}" ) ]]; then
    if [ -e /etc/lsb-release ]; then       . /etc/lsb-release       if [ "${ID}" = "raspbian" ]; then         os=${ID};         dist=`cut --delimiter='.' -f1 /etc/debian_version`;       else         os=${DISTRIB_ID};         dist=${DISTRIB_CODENAME}         if [ -z "$dist" ]; then           dist=${DISTRIB_RELEASE};         fi;       fi     elif [ `which lsb_release 2>/dev/null` ]; then       dist=`lsb_release -c | cut -f2`;       os=`lsb_release -i | cut -f2 | awk '{ print tolower($1) }'`     elif [ -e /etc/debian_version ]; then
      os=`cat /etc/issue | head -1 | awk '{ print tolower($1) }'`;       if grep -q '/' /etc/debian_version; then         dist=`cut --delimiter='/' -f1 /etc/debian_version`;       else         dist=`cut --delimiter='.' -f1 /etc/debian_version`;       fi     else       unknown_os;     fi;   fi   if [ -z "$dist" ]; then     unknown_os;   fi
  os="${os// /}";   dist="${dist// /}"   echo "Detected operating system as $os/$dist."; }
main () {   detect_os;   curl_check;   gpg_check
  echo -n "Running apt-get update... ";   apt-get update &> /dev/null;   echo "done."
  install_debian_keyring   echo -n "Installing apt-transport-https... ";   apt-get install -y apt-transport-https &> /dev/null;   echo "done."   gpg_key_url="https://packagecloud.io/github/git-lfs/gpgkey";   apt_config_url="https://packagecloud.io/install/repositories/github/git-lfs/config_file.list?os=${os}&dist=${dist}&source=script"   apt_source_path="/etc/apt/sources.list.d/github_git-lfs.list"   echo -n "Installing $apt_source_path..."
  curl -sSf "${apt_config_url}" > $apt_source_path;   curl_exit_code=$?   if [ "$curl_exit_code" = "22" ]; then     echo;     echo;     echo -n "Unable to download repo config from: ";     echo "${apt_config_url}";     echo;     echo "This usually happens if your operating system is not supported by ";     echo "packagecloud.io, or this script's OS detection failed.";     echo;     echo "You can override the OS detection by setting os= and dist= prior to running this script.";     echo "You can find a list of supported OSes and distributions on our website: https://packagecloud.io/docs#os_distro_version";     echo;     echo "For example, to force Ubuntu Trusty: os=ubuntu dist=trusty ./script.sh";     echo;     echo "If you are running a supported OS, please email support@packagecloud.io and report this.";     [ -e $apt_source_path ] && rm $apt_source_path;     exit 1;   elif [ "$curl_exit_code" = "35" -o "$curl_exit_code" = "60" ]; then     echo "curl is unable to connect to packagecloud.io over TLS when running: ";     echo "    curl ${apt_config_url}";     echo "This is usually due to one of two things:";     echo;     echo " 1.) Missing CA root certificates (make sure the ca-certificates package is installed)";     echo " 2.) An old version of libssl. Try upgrading libssl on your system to a more recent version";     echo;     echo "Contact support@packagecloud.io with information about your system for help.";     [ -e $apt_source_path ] && rm $apt_source_path;     exit 1;   elif [ "$curl_exit_code" -gt "0" ]; then     echo;     echo "Unable to run: ";     echo "    curl ${apt_config_url}";     echo;     echo "Double check your curl installation and try again.";     [ -e $apt_source_path ] && rm $apt_source_path;     exit 1;   else     echo "done.";   fi   echo -n "Importing packagecloud gpg key... "
  curl -L "${gpg_key_url}" 2> /dev/null | apt-key add - &>/dev/null;   echo "done."   echo -n "Running apt-get update... "
  apt-get update &> /dev/null;   echo "done."   echo;   echo "The repository is setup! You can now install packages."; }
main
#!/bin/bash
unknown_os () {   echo "Unfortunately, your operating system distribution and version are not supported by this script.";   echo;   echo "You can override the OS detection by setting os= and dist= prior to running this script.";   echo "You can find a list of supported OSes and distributions on our website: https://packagecloud.io/docs#os_distro_version";   echo;   echo "For example, to force Ubuntu Trusty: os=ubuntu dist=trusty ./script.sh";   echo;   echo "Please email support@packagecloud.io and let us know if you run into any issues.";   exit 1; }
gpg_check () {   echo "Checking for gpg...";   if command -v gpg > /dev/null; then     echo "Detected gpg...";   else     echo "Installing gnupg for GPG verification...";     apt-get install -y gnupg;     if [ "$?" -ne "0" ]; then       echo "Unable to install GPG! Your base system has a problem; please check your default OS's package repositories because GPG should work.";       echo "Repository installation aborted.";       exit 1;     fi;   fi; }
curl_check () {   echo "Checking for curl...";   if command -v curl > /dev/null; then     echo "Detected curl...";   else     echo "Installing curl...";     apt-get install -q -y curl;     if [ "$?" -ne "0" ]; then       echo "Unable to install curl! Your base system has a problem; please check your default OS's package repositories because curl should work.";       echo "Repository installation aborted.";       exit 1;     fi;   fi; }
install_debian_keyring () {   if [ "${os}" = "debian" ]; then     echo "Installing debian-archive-keyring which is needed for installing ";     echo "apt-transport-https on many Debian systems.";     apt-get install -y debian-archive-keyring &> /dev/null;   fi; }
detect_os () {   if [[ ( -z "${os}" ) && ( -z "${dist}" ) ]]; then
    if [ -e /etc/lsb-release ]; then       . /etc/lsb-release       if [ "${ID}" = "raspbian" ]; then         os=${ID};         dist=`cut --delimiter='.' -f1 /etc/debian_version`;       else         os=${DISTRIB_ID};         dist=${DISTRIB_CODENAME}         if [ -z "$dist" ]; then           dist=${DISTRIB_RELEASE};         fi;       fi     elif [ `which lsb_release 2>/dev/null` ]; then       dist=`lsb_release -c | cut -f2`;       os=`lsb_release -i | cut -f2 | awk '{ print tolower($1) }'`     elif [ -e /etc/debian_version ]; then
      os=`cat /etc/issue | head -1 | awk '{ print tolower($1) }'`;       if grep -q '/' /etc/debian_version; then         dist=`cut --delimiter='/' -f1 /etc/debian_version`;       else         dist=`cut --delimiter='.' -f1 /etc/debian_version`;       fi     else       unknown_os;     fi;   fi   if [ -z "$dist" ]; then     unknown_os;   fi
  os="${os// /}";   dist="${dist// /}"   echo "Detected operating system as $os/$dist."; }
main () {   detect_os;   curl_check;   gpg_check
  echo -n "Running apt-get update... ";   apt-get update &> /dev/null;   echo "done."
  install_debian_keyring   echo -n "Installing apt-transport-https... ";   apt-get install -y apt-transport-https &> /dev/null;   echo "done."   gpg_key_url="https://packagecloud.io/github/git-lfs/gpgkey";   apt_config_url="https://packagecloud.io/install/repositories/github/git-lfs/config_file.list?os=${os}&dist=${dist}&source=script"   apt_source_path="/etc/apt/sources.list.d/github_git-lfs.list"   echo -n "Installing $apt_source_path..."
  curl -sSf "${apt_config_url}" > $apt_source_path;   curl_exit_code=$?   if [ "$curl_exit_code" = "22" ]; then     echo;     echo;     echo -n "Unable to download repo config from: ";     echo "${apt_config_url}";     echo;     echo "This usually happens if your operating system is not supported by ";     echo "packagecloud.io, or this script's OS detection failed.";     echo;     echo "You can override the OS detection by setting os= and dist= prior to running this script.";     echo "You can find a list of supported OSes and distributions on our website: https://packagecloud.io/docs#os_distro_version";     echo;     echo "For example, to force Ubuntu Trusty: os=ubuntu dist=trusty ./script.sh";     echo;     echo "If you are running a supported OS, please email support@packagecloud.io and report this.";     [ -e $apt_source_path ] && rm $apt_source_path;     exit 1;   elif [ "$curl_exit_code" = "35" -o "$curl_exit_code" = "60" ]; then     echo "curl is unable to connect to packagecloud.io over TLS when running: ";     echo "    curl ${apt_config_url}";     echo "This is usually due to one of two things:";     echo;     echo " 1.) Missing CA root certificates (make sure the ca-certificates package is installed)";     echo " 2.) An old version of libssl. Try upgrading libssl on your system to a more recent version";     echo;     echo "Contact support@packagecloud.io with information about your system for help.";     [ -e $apt_source_path ] && rm $apt_source_path;     exit 1;   elif [ "$curl_exit_code" -gt "0" ]; then     echo;     echo "Unable to run: ";     echo "    curl ${apt_config_url}";     echo;     echo "Double check your curl installation and try again.";     [ -e $apt_source_path ] && rm $apt_source_path;     exit 1;   else     echo "done.";   fi   echo -n "Importing packagecloud gpg key... "
  curl -L "${gpg_key_url}" 2> /dev/null | apt-key add - &>/dev/null;   echo "done."   echo -n "Running apt-get update... "
  apt-get update &> /dev/null;   echo "done."   echo;   echo "The repository is setup! You can now install packages."; }
main
git lfs track "*.zip"
#!/bin/bash
unknown_os () {   echo "Unfortunately, your operating system distribution and version are not supported by this script.";   echo;   echo "You can override the OS detection by setting os= and dist= prior to running this script.";   echo "You can find a list of supported OSes and distributions on our website: https://packagecloud.io/docs#os_distro_version";   echo;   echo "For example, to force Ubuntu Trusty: os=ubuntu dist=trusty ./script.sh";   echo;   echo "Please email support@packagecloud.io and let us know if you run into any issues.";   exit 1; }
gpg_check () {   echo "Checking for gpg...";   if command -v gpg > /dev/null; then     echo "Detected gpg...";   else     echo "Installing gnupg for GPG verification...";     apt-get install -y gnupg;     if [ "$?" -ne "0" ]; then       echo "Unable to install GPG! Your base system has a problem; please check your default OS's package repositories because GPG should work.";       echo "Repository installation aborted.";       exit 1;     fi;   fi; }
curl_check () {   echo "Checking for curl...";   if command -v curl > /dev/null; then     echo "Detected curl...";   else     echo "Installing curl...";     apt-get install -q -y curl;     if [ "$?" -ne "0" ]; then       echo "Unable to install curl! Your base system has a problem; please check your default OS's package repositories because curl should work.";       echo "Repository installation aborted.";       exit 1;     fi;   fi; }
install_debian_keyring () {   if [ "${os}" = "debian" ]; then     echo "Installing debian-archive-keyring which is needed for installing ";     echo "apt-transport-https on many Debian systems.";     apt-get install -y debian-archive-keyring &> /dev/null;   fi; }
detect_os () {   if [[ ( -z "${os}" ) && ( -z "${dist}" ) ]]; then
    if [ -e /etc/lsb-release ]; then       . /etc/lsb-release       if [ "${ID}" = "raspbian" ]; then         os=${ID};         dist=`cut --delimiter='.' -f1 /etc/debian_version`;       else         os=${DISTRIB_ID};         dist=${DISTRIB_CODENAME}         if [ -z "$dist" ]; then           dist=${DISTRIB_RELEASE};         fi;       fi     elif [ `which lsb_release 2>/dev/null` ]; then       dist=`lsb_release -c | cut -f2`;       os=`lsb_release -i | cut -f2 | awk '{ print tolower($1) }'`     elif [ -e /etc/debian_version ]; then
      os=`cat /etc/issue | head -1 | awk '{ print tolower($1) }'`;       if grep -q '/' /etc/debian_version; then         dist=`cut --delimiter='/' -f1 /etc/debian_version`;       else         dist=`cut --delimiter='.' -f1 /etc/debian_version`;       fi     else       unknown_os;     fi;   fi   if [ -z "$dist" ]; then     unknown_os;   fi
  os="${os// /}";   dist="${dist// /}"   echo "Detected operating system as $os/$dist."; }
main () {   detect_os;   curl_check;   gpg_check
  echo -n "Running apt-get update... ";   apt-get update &> /dev/null;   echo "done."
  install_debian_keyring   echo -n "Installing apt-transport-https... ";   apt-get install -y apt-transport-https &> /dev/null;   echo "done."   gpg_key_url="https://packagecloud.io/github/git-lfs/gpgkey";   apt_config_url="https://packagecloud.io/install/repositories/github/git-lfs/config_file.list?os=${os}&dist=${dist}&source=script"   apt_source_path="/etc/apt/sources.list.d/github_git-lfs.list"   echo -n "Installing $apt_source_path..."
  curl -sSf "${apt_config_url}" > $apt_source_path;   curl_exit_code=$?   if [ "$curl_exit_code" = "22" ]; then     echo;     echo;     echo -n "Unable to download repo config from: ";     echo "${apt_config_url}";     echo;     echo "This usually happens if your operating system is not supported by ";     echo "packagecloud.io, or this script's OS detection failed.";     echo;     echo "You can override the OS detection by setting os= and dist= prior to running this script.";     echo "You can find a list of supported OSes and distributions on our website: https://packagecloud.io/docs#os_distro_version";     echo;     echo "For example, to force Ubuntu Trusty: os=ubuntu dist=trusty ./script.sh";     echo;     echo "If you are running a supported OS, please email support@packagecloud.io and report this.";     [ -e $apt_source_path ] && rm $apt_source_path;     exit 1;   elif [ "$curl_exit_code" = "35" -o "$curl_exit_code" = "60" ]; then     echo "curl is unable to connect to packagecloud.io over TLS when running: ";     echo "    curl ${apt_config_url}";     echo "This is usually due to one of two things:";     echo;     echo " 1.) Missing CA root certificates (make sure the ca-certificates package is installed)";     echo " 2.) An old version of libssl. Try upgrading libssl on your system to a more recent version";     echo;     echo "Contact support@packagecloud.io with information about your system for help.";     [ -e $apt_source_path ] && rm $apt_source_path;     exit 1;   elif [ "$curl_exit_code" -gt "0" ]; then     echo;     echo "Unable to run: ";     echo "    curl ${apt_config_url}";     echo;     echo "Double check your curl installation and try again.";     [ -e $apt_source_path ] && rm $apt_source_path;     exit 1;   else     echo "done.";   fi   echo -n "Importing packagecloud gpg key... "
  curl -L "${gpg_key_url}" 2> /dev/null | apt-key add - &>/dev/null;   echo "done."   echo -n "Running apt-get update... "
  apt-get update &> /dev/null;   echo "done."   echo;   echo "The repository is setup! You can now install packages."; }
main
for x in "./"/*/; do   (cd "$x";    files=(*);    printf '%s\n' "${files[@]}" > deleteme.txt;   ); done
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/bgoonz/resume-cv-portfolio-samples.git
git push -u origin master
git add .
git commit -m "update/cleanup"
git push -u origin master
00-4-all-time/_0-Random-Repo/zipped.zi
git rm -rf 00-4-all-time/_0-Random-Repo/zipped.zip
git rm -f index.html
git filter-branch --index-filter 'git rm -r --cached --ignore-unmatch assets/_index.html' HEAD
git lfs track "*.zip"
fatal: 'lfs' appears to be a git command, but we were not
able to execute it. Maybe git-lfs is broken?
git-lfs/2.3.4 (GitHub; windows amd64; go 1.8.3; git d2f6752f)
git lfs track "*.zip"
git lfs install
echo %PATH%
git add .
git commit -m "git filter branch"
git push -u origin master
git config http.postBuffer 524288000
git push -u origin master
git add 00-4-all-time/_0-Random-Repo/zipped.zip
git reset
pandoc *.md> -o output.html
pandoc *.md>  output.html
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
rename 's/\.js\.download$/.js/' *.js\.download  
rename -r 's/\.js\.download$/.js/' *.js\.download  
rename  's/\.js\.download$/.js/' *.js\.download  
find . -name '*.git' | cpio -pdm './GIT-FOLDERS'
pandoc *.md> -o output.html
pandoc *.md>  output.md
pandoc *.md -o result.html
find . -name '\.vscode' -type d -prune -exec rm -rf '{}' +find . -name '\.vscode' -type d -prune -exec rm -rf '{}' +
find . -name '\.vscode' -type d -prune -exec rm -rf '{}' +
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . -empty -type f -print -delete
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . -name "*.zip" -type f -print -delete
find . -depth -exec rmdir {} \;  
rename 's/\.js\.download$/.js/' *.js\.download  
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/bgoonz/Common-npm-Readme-Compilation.git
git push -u origin master
sed -i '/Copyright/d' ./*.html
sed -i '/license/d' ./*.html
pm-reademe-comp_exitstatus:0 ====>
sed -i '/MIT/d' ./*.html
sed -i '/pm-reademe-comp_exitstatus:0 ====>/d' ./*.html
sed -i '/©/d' ./*.html
sed -i '/legal/d' ./*.html
sed -i '/copyright/d' ./*.html
sed -i '/trademark/d' ./*.html

sed -i '/U.\S.\/d' ./*.html
sed -i '/U\.S\./d' ./*.html
sed -i '/Support/d' ./*.html
sed -i '/MIT/d' ./*.html
sed -i '/License/d' ./*.html
sed -i '/Contributors/d' ./*.html
sed -i '/Copyright/d' ./*.html
sed -i '/copyright/d' ./*.html
sed -i '/Copyright © /d' ./*.html
git init
git add .
git commit -m " backup"
git add .
sed -i '/Copyright/d' ./*.html
sed -i '/COPYRIGHT/d' ./*.html
sed -i '/SOFTWARE/d' ./*.html
sed -i '/Permission/d' ./*.html
sed -i '/software/d' ./*.html
sed -i '/DAMAGES/d' ./*.html
sed -i '/LIABILITY/d' ./*.html
sed -i '/MERCHANTABILITY/d' ./*.html
sed -i '/CONTRACT/d' ./*.html
sed -i '/portions of/d' ./*.html
sed -i '/subject to/d' ./*.html
sed -i '/without restriction/d' ./*.html
sed -i '/publish, the/d' ./*.html
sed -i '/without limitation/d' ./*.html
sed -i '/following conditions/d' ./*.html
sed -i '/{}/d' ./*.css
sed -i '/{/d' ./*.css
}
git add .
git commit -m "formatting"
git push 
git add .
git commit -m "index file"
git push 
git add .
git commit -m "index file"
git push 
git add .
git commit -m "backup"
git push 
git remote add https://github.com/bgoonz/archive.git
git remote add https://github.com/bgoonz/archive.git -f
git remote add origin https://github.com/bgoonz/archive.git
git push 
git push -u origin master
git push -u origin master -f
git add .
git commit -m "please work again"
git commit -m "refactor"
git push 
git add .
git commit -m "refactor"
git push 
git add .
git commit -m "fixed alignment hopefully"
git push 
git add .
git commit -m "added js to autogenerate a table of contents for the headers"
git push 
git add .
git commit -m "added js to autogenerate a table of contents for the headers"
git push 
npm init -y
npm install clipboard --save
npm install clipboard 
npm install clipboard -g
git add .
git commit -m "added copy to clip mod"
git push 
#!/bin/sh
# find ./ | grep -i "\.*$" >files
find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.*$">files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <TITLE> directory </TITLE> </head>"   echo ""   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;</li>"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing --sort=extension >>$html
git add .
cd MY-WEB-Dev
cd ..
cd..
cd MY-WEB-Dev
cd ..
cd MY-WEB-Dev
cd MY-WEB-DEV
cd 08-my-website/
cd experimental/
code .
cd ..
cd..
cd ..
cd c
cd MY-WEB-DEV/
cd 08-my-website/
cd experimental
wget -r http://videopro.cactusthemes.com/v2/
sudo curl -L https://yt-dl.org/downloads/latest/youtube-dl -o /usr/local/bin/youtube-dl
sudo chmod a+rx /usr/local/bin/youtube-dl 
youtube-dl https://www.youtube.com/watch?v=LiouJsnYytI&ab_channel=PlayingForChange
code .
git filter-branch --index-filter 'git rm -r --cached --ignore-unmatch assets/_index.html' HEAD
git pull
git add .
git commit -m "pleaseeeee"
git push
git filter-branch --index-filter 'git rm -r --cached --ignore-unmatch assets/_00-4-all-time/_0-Random-Repo/zipped.zip' HEAD
git push
git push -u origin master
git remote remove origin
git remote add origin https://github.com/bgoonz/WEB-DEV-NOTES.git
git push 
git push -u origin master
git rm -r 00-4-all-time/_0-Random-Repo/zipped.zip
git filter-branch --index-filter 'git rm -r --cached --ignore-unmatch 00-4-all-time/_0-Random-Repo/zipped.zip' HEAD
git push
git push -u origin master
git push -u origin master -f
git remote add origin https://github.com/bgoonz/web-dev-notes-backup.git
git init
git remote add origin https://github.com/bgoonz/web-dev-notes-backup.git
git add .
git init
git add .
git commit-m "npm reademe's"
git commitc-m "npm reademe's"
git commitc-m "npm reademe's"git commit -m "j"
pandoc *.md> -o output.html
chmod +x cut-vid.sh
bash cut-vid.sh Lean On Me (Bill Withers) _ Playing For Change _ Song Around The World-LiouJsnYytI.mp4 3:30
split –bytes=100m './Lean On Me (Bill Withers) _ Playing For Change _ Song Around The World-LiouJsnYytI.mp4' ./output/leanonme.mp4
split –bytes=100m './Lean On Me (Bill Withers) _ Playing For Change _ Song Around The World-LiouJsnYytI.mp4' 
split –bytes=100m './Lean On Me (Bill Withers) _ Playing For Change _ Song Around The Wsplit –bytes=100m './Lean On Me (Bill Withers) _ Playing For Change _ Song Around The World-LiouJsnYytI.mp4' ./output/leanonme.mp4 
split –bytes=100m './Lean On Me (Bill Withers) _ Playing For Change _ Song Around The World-LiouJsnYytI.mp4' ./output
split –bytes=100m './Lean On Me (Bill Withers) _ Playing For Change _ Song Around The World-LiouJsnYytI.mp4' './output/leanonme.mp4'
split –bytes=100m './Lean On Me (Bill Withers) _ Playing For Change _ Song Around The World-LiouJsnYytI.mp4' 
split –bytes=100m './Lean On Me (Bill Withers) _ Playing For Change _ Song Around The World-LiouJsnYytI.mp4'  ./
sudo apt install mkvmerge
wget -q -O - https://mkvtoolnix.download/gpg-pub-moritzbunkus.txt | sudo apt-key add -
mkvmerge -o .mp4 --split 10MB Lean On Me (Bill Withers) _ Playing For Change _ Song Around The World-LiouJsnYytI.mp4
mkvmerge -o .mp4 --split 10MB playing-4-change.mp4.mp4
sudo apt install mkvtoolnix
mkvmerge -o .mp4 --split 10MB playing-4-change.mp4.mp4
mkvmerge -o .mp4 --split 10MB playing-4-change.mp4
mkvmerge -o .mp4 --split 10M playing-4-change.mp4
mkvmerge -o .mp4 --split 10M ./playing-4-change.mp4
mkvmerge -o .mp4 --split 10M './playing-4-change.mp4'
sudo mkvmerge -o .mp4 --split 10M './playing-4-change.mp4'
sudo apt install avconv
avconv -i srcFileName -c:a copy -c:v copy -ss 00:03:40 -t 00:01:12 targetFileName
npm init -y
npm i broken-link-checker
git add .
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
sed -i '/node_modules/d' ./*.html
sed -i '/\.git/d' ./*.html
find . -name "*.ini" -type f -print -delete
find . -name "*desktop.ini" -type f -print -delete
git add .
find . -depth -exec rmdir {} \;  
find . -empty -type f -print -delete
find . -empty -type d -print -delete
find . -empty -type f -print -delete
find . -name '*.README.md' | cpio -pdm './extension-readme'
find . -type f -name '*.md' | cpio -p -d -v './extensionReadme'
find . -depth -exec rmdir {} \;  
find . -empty -type f -print -delete
find . -depth -exec rmdir {} \;  
find . -empty -type f -print -delete
find . -depth -exec rmdir {} \;  
find . -empty -type f -print -delete
find . -type f -name '*.png' | cpio -p -d -v './_ext'
find . -depth -exec rmdir {} \; 
sudo apt install ROBOCOPY
robocopy
git add .
pandoc *.html> -o _EXTENSIONS.html
cat *.html > _EXTENSIONS.html
git init
git add .
#!/bin/sh
# find ./ | grep -i "\.*$" >files
find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.*$">files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <TITLE> directory </TITLE> </head>"   echo ""   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;</li>"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing --sort=extension >>$html
#!/bin/sh
# find ./ | grep -i "\.*$" >files
find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.*$">files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <TITLE> directory </TITLE> </head>"   echo ""   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;</li>"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
sudo sed -i '/\.git/d' ./files.md
sudo sed -i '/\.md/d' ./*.md
find . -depth -exec rmdir {} \;  
git add .
git init
git add .
git commit -m "initial commit"
git add .
git commit -m "lost html files"
git remote add origin https://github.com/bgoonz/vscode-Extension-readmes.git
git push -u origin master
git add .
git commit -m "updated readme"
git push 
git add .
git commit -m "updated readme"
git push 
git add .
git commit -m "linked to live web for this repo"
git push 
git add .
git commit -m "linked to live web for this repo"
git push 
git add .
git commit -m "linked to live web for this repo"
git push 
cat *.html > node-mod-readme.html
find ./ -iname "*.md" -type f -exec sh -c 'pandoc "${0}" -o "${0%.md}.html"' {} \;
find . -name '*.jpg' | grep test1 | while read aline; do   newname="$(echo ${FILE} | grep -o "[0-9]*" | tr "\n" "_" | sed s/2016_//;s/_$/.md\n/;')"
     mv "${FILE}" "${newname}" ;
 done


exit
;
#!/bin/bash
find . -name '*.jpg' | grep test1 | while read aline; do   newname="$(echo ${FILE} | grep -o "[0-9]*" | tr "\n" "_" | sed s/2016_//;s/_$/.md\n/;')"
     mv "${FILE}" "${newname}" ;
 done
exit 0

git add .
find . -depth -exec rmdir {} \;  
find . -empty -type f -print -delete
git
find . -name "*.zip" -type f -print -delete
find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
git add .
git commit -m "major cleanup update"
git push 
git filter-branch -f --index-filter 'git rm --cached --ignore-unmatch 0-assets/0-embeded-repos/code-mirror/node_modules/puppeteer/.local-chromium/linux-686378/chrome-linux/chrome'
git pull
git add --all
git commit -m "please work"
git push 
git filter-branch -f --index-filter 'git rm --cached --ignore-unmatch 0-assets/0-embeded-repos/code-mirror/node_modules/puppeteer/.local-chromium/linux-686378/chrome-linux/chrome'
wget -r -A.pdf
wget -r -A.pdf https://overapi.com/svn
wget -r -A.pdf
wget -r -A.pdf https://overapi.com/mysql
wget -r -A.pdf https://overapi.com/regex
wget -r -A.pdf https://overapi.com/linux
wget -r -A.pdf
wget -r -A.pdf https://overapi.com/html
wget -r -A.pdf https://overapi.com/html-dom
wget -r -A.pdf https://overapi.com/mod_rewrite
wget -r -A.pdf https://overapi.com/#more
wget -r -A.pdf
wget -r -A.pdf 
wget -r -A.pdf https://overapi.com/python
wget -r -A.pdf https://overapi.com/jquery
wget -r -A.pdf https://overapi.com/nodejs 
wget -r -A.pdf 
wget -r -A.pdf https://overapi.com/php
wget -r -A.pdf https://overapi.com/java
wget -r -A.pdf https://overapi.com/ruby
wget -r -A.pdf 
wget -r -A.pdf https://overapi.com/javascript
wget -r -A.pdf https://overapi.com/css
wget -r -A.pdf https://overapi.com/express
wget -r -A.pdf https://overapi.com/git
wget -r -A.pdf https://overapi.com/svn
wget -r -A.pdf https://overapi.com/mysql
wget -r -A.pdf https://overapi.com/regex
wget -r -A.pdf https://overapi.com/linux
wget -r -A.pdf https://overapi.com/html
wget -r -A.pdf https://overapi.com/html-dom
wget -r -A.pdf https://overapi.com/mod_rewrite
wget -r -A.pdf https://overapi.com/#more
wget -r -A.pdf https://overapi.com/
wget -r -A.pdf https://overapi.com/python
wget -r -A.pdf https://overapi.com/jquery
wget -r -A.pdf https://overapi.com/nodejs
wget -r -A.pdf https://overapi.com/php
wget -r -A.pdf https://overapi.com/java
wget -r -A.pdf https://overapi.com/ruby
wget -r -A.pdf https://overapi.com/javascript
wget -r -A.pdf https://overapi.com/actionscript
wget -r -A.pdf https://overapi.com/css
wget -r -A.pdf https://overapi.com/express
wget -r -A.pdf https://overapi.com/algebra#more
wget -r -A.pdf http://en.wikipedia.org/wiki/Algebra
wget -r -A.pdf http://www.wolframalpha.com/examples/Algebra.html
wget -r -A.pdf https://overapi.com/git
wget -r -A.pdf https://overapi.com/svn
wget -r -A.pdf https://overapi.com/mysql
wget -r -A.pdf https://overapi.com/regex
wget -r -A.pdf https://overapi.com/linux
wget -r -A.pdf https://overapi.com/html
wget -r -A.pdf https://overapi.com/html-dom
wget -r -A.pdf https://overapi.com/mod_rewrite
wget -r -A.pdf https://overapi.com/#more
wget -r -A.pdf https://overapi.com/
wget -r -A.pdf https://overapi.com/python
wget -r -A.pdf https://overapi.com/jquery
wget -r -A.pdf https://overapi.com/nodejs
wget -r -A.pdf https://overapi.com/php
wget -r -A.pdf https://overapi.com/java
wget -r -A.pdf https://overapi.com/ruby
wget -r -A.pdf https://overapi.com/javascript
wget -r -A.pdf https://overapi.com/actionscript
wget -r -A.pdf https://overapi.com/css
wget -r -A.pdf https://overapi.com/express
wget -r -A.pdf https://overapi.com/algebra#more
wget -r -A.pdf http://en.wikipedia.org/wiki/Algebra
wget -r -A.pdf http://tutorial.math.lamar.edu/pdf/Algebra_Cheat_Sheet.pdf
wget -r -A.pdf http://tutorial.math.lamar.edu/pdf/Algebra_Cheat_Sheet_Reduced.pdf
wget -r -A.pdf https://overapi.com/static/cs/Algebra_Cheat_Sheet.pdf
wget -r -A.pdf https://overapi.com/static/cs/Algebra_Cheat_Sheet_Reduced.pdf
wget -r -A.pdf http://www.glump.net/content/abstract_algebra_cheat
wget -r -A.pdf https://overapi.com/static/cs/abstract_algebra_cheat
wget -r -A.pdf http://www.docstoc.com/docs/7389/Review-of-Algebra
wget -r -A.pdf https://overapi.com/static/cs/ess-reviewofalgebra.pdf
wget -r -A.pdf https://overapi.com/math
wget -r -A.pdf https://overapi.com/git
wget -r -A.pdf https://overapi.com/svn
wget -r -A.pdf https://overapi.com/mysql
wget -r -A.pdf https://overapi.com/regex
wget -r -A.pdf https://overapi.com/linux
wget -r -A.pdf https://overapi.com/html
wget -r -A.pdf https://overapi.com/html-dom
wget -r -A.pdf https://overapi.com/mod_rewrite
wget -r -A.pdf https://overapi.com/#more
wget -r -A.pdf https://overapi.com/
wget -r -A.pdf https://overapi.com/python
wget -r -A.pdf https://overapi.com/jquery
wget -r -A.pdf https://overapi.com/nodejs
wget -r -A.pdf https://overapi.com/php
wget -r -A.pdf https://overapi.com/java
wget -r -A.pdf https://overapi.com/ruby
wget -r -A.pdf https://overapi.com/javascript
wget -r -A.pdf https://overapi.com/actionscript
wget -r -A.pdf https://overapi.com/css
wget -r -A.pdf https://overapi.com/express
wget -r -A.pdf https://overapi.com/assembly#more
wget -r -A.pdf http://en.wikipedia.org/wiki/Assembly_language
wget -r -A.pdf http://www.jegerlehner.ch/intel/IntelCodeTable.pdf
wget -r -A.pdf https://overapi.com/static/cs/IntelCodeTable.pdf
wget -r -A.pdf http://www.strchr.com/assembly_cheat_sheet
wget -r -A.pdf https://overapi.com/static/cs/Win32AssemblyCheatSheet.png
wget -r -A.pdf http://www.cs.uaf.edu/2005/fall/cs301/support/x86/index.html
wget -r -A.pdf https://overapi.com/static/cs/Intel.x86-64.Architecture.2012011000.pdf
wget -r -A.pdf https://overapi.com/git
wget -r -A.pdf https://overapi.com/svn
wget -r -A.pdf https://overapi.com/mysql
wget -r -A.pdf https://overapi.com/regex
wget -r -A.pdf https://overapi.com/linux
wget -r -A.pdf https://overapi.com/html
wget -r -A.pdf https://overapi.com/html-dom
wget -r -A.pdf https://overapi.com/mod_rewrite
wget -r -A.pdf https://overapi.com/#more
wget -r -A.pdf https://overapi.com/
wget -r -A.pdf https://overapi.com/python
wget -r -A.pdf https://overapi.com/jquery
wget -r -A.pdf https://overapi.com/nodejs
wget -r -A.pdf https://overapi.com/php
wget -r -A.pdf https://overapi.com/java
wget -r -A.pdf https://overapi.com/ruby
wget -r -A.pdf https://overapi.com/javascript
wget -r -A.pdf https://overapi.com/actionscript
wget -r -A.pdf https://overapi.com/css
wget -r -A.pdf https://overapi.com/express
wget -r -A.pdf https://overapi.com/calculus#more
wget -r -A.pdf http://www.wolframalpha.com/examples/Calculus.html
wget -r -A.pdf https://overapi.com/git
wget -r -A.pdf https://overapi.com/svn
wget -r -A.pdf https://overapi.com/mysql
wget -r -A.pdf https://overapi.com/regex
wget -r -A.pdf https://overapi.com/linux
wget -r -A.pdf https://overapi.com/html
wget -r -A.pdf https://overapi.com/html-dom
wget -r -A.pdf https://overapi.com/mod_rewrite
wget -r -A.pdf https://overapi.com/#more
wget -r -A.pdf https://overapi.com/
wget -r -A.pdf https://overapi.com/python
wget -r -A.pdf https://overapi.com/jquery
wget -r -A.pdf https://overapi.com/nodejs
wget -r -A.pdf https://overapi.com/php
wget -r -A.pdf https://overapi.com/java
wget -r -A.pdf https://overapi.com/ruby
wget -r -A.pdf https://overapi.com/javascript
wget -r -A.pdf https://overapi.com/actionscript
wget -r -A.pdf https://overapi.com/css
wget -r -A.pdf https://overapi.com/express
wget -r -A.pdf https://overapi.com/calculus#more
wget -r -A.pdf http://en.wikipedia.org/wiki/Calculus
wget -r -A.pdf http://tutorial.math.lamar.edu/pdf/Calculus_Cheat_Sheet_All_Reduced.pdf
wget -r -A.pdf https://overapi.com/static/cs/Calculus_Cheat_Sheet_All_Reduced.pdf
wget -r -A.pdf http://tutorial.math.lamar.edu/pdf/Calculus_Cheat_Sheet_Limits_Reduced.pdf
wget -r -A.pdf https://overapi.com/static/cs/Calculus_Cheat_Sheet_Limits_Reduced.pdf
wget -r -A.pdf http://tutorial.math.lamar.edu/pdf/Calculus_Cheat_Sheet_Derivatives_Reduced.pdf
wget -r -A.pdf https://overapi.com/static/cs/Calculus_Cheat_Sheet_Derivatives_Reduced.pdf
wget -r -A.pdf http://tutorial.math.lamar.edu/pdf/Calculus_Cheat_Sheet_Integrals_Reduced.pdf
wget -r -A.pdf https://overapi.com/static/cs/Calculus_Cheat_Sheet_Integrals_Reduced.pdf
wget -r -A.pdf http://tutorial.math.lamar.edu/pdf/Common_Derivatives_Integrals_Reduced.pdf
wget -r -A.pdf https://overapi.com/static/cs/Common_Derivatives_Integrals_Reduced.pdf
wget -r -A.pdf https://overapi.com/math
wget -r -A.pdf https://overapi.com/git
wget -r -A.pdf https://overapi.com/svn
wget -r -A.pdf https://overapi.com/mysql
wget -r -A.pdf https://overapi.com/regex
wget -r -A.pdf https://overapi.com/linux
wget -r -A.pdf https://overapi.com/html
wget -r -A.pdf https://overapi.com/html-dom
wget -r -A.pdf https://overapi.com/mod_rewrite
wget -r -A.pdf https://overapi.com/#more
wget -r -A.pdf https://overapi.com/
wget -r -A.pdf https://overapi.com/python
wget -r -A.pdf https://overapi.com/jquery
wget -r -A.pdf https://overapi.com/nodejs
wget -r -A.pdf https://overapi.com/php
wget -r -A.pdf https://overapi.com/java
wget -r -A.pdf https://overapi.com/ruby
wget -r -A.pdf https://overapi.com/javascript
wget -r -A.pdf https://overapi.com/actionscript
wget -r -A.pdf https://overapi.com/css
wget -r -A.pdf https://overapi.com/express
wget -r -A.pdf https://overapi.com/express#more
wget -r -A.pdf http://expressjs.com/4x/api.html#express
wget -r -A.pdf http://expressjs.com/4x/api.html#app-settings
wget -r -A.pdf https://overapi.com/git
wget -r -A.pdf https://overapi.com/svn
wget -r -A.pdf https://overapi.com/mysql
wget -r -A.pdf https://overapi.com/regex
wget -r -A.pdf https://overapi.com/git
wget -r -A.pdf https://overapi.com/svn
wget -r -A.pdf https://overapi.com/mysql
wget -r -A.pdf https://overapi.com/regex
wget -r -A.pdf https://overapi.com/linux
wget -r -A.pdf https://overapi.com/html
wget -r -A.pdf https://overapi.com/html-dom
wget -r -A.pdf https://overapi.com/mod_rewrite
wget -r -A.pdf https://overapi.com/#more
wget -r -A.pdf https://overapi.com/
wget -r -A.pdf https://overapi.com/python
wget -r -A.pdf https://overapi.com/jquery
wget -r -A.pdf https://overapi.com/nodejs
wget -r -A.pdf https://overapi.com/php
wget -r -A.pdf https://overapi.com/java
wget -r -A.pdf https://overapi.com/ruby
wget -r -A.pdf https://overapi.com/javascript
wget -r -A.pdf https://overapi.com/actionscript
wget -r -A.pdf https://overapi.com/css
wget -r -A.pdf https://overapi.com/express
wget -r -A.pdf https://overapi.com/java#more
wget -r -A.pdf http://www.oracle.com/technetwork/java/index.html
find . -depth -exec rmdir {} \;  
wget -r -A.pdf https://overapi.com/git
wget -r -A.pdf https://overapi.com/svn
wget -r -A.pdf https://overapi.com/mysql
wget -r -A.pdf https://overapi.com/regex
wget -r -A.pdf https://overapi.com/linux
wget -r -A.pdf https://overapi.com/html
wget -r -A.pdf https://overapi.com/html-dom
wget -r -A.pdf https://overapi.com/mod_rewrite
wget -r -A.pdf https://overapi.com/#more
wget -r -A.pdf https://overapi.com/
wget -r -A.pdf https://overapi.com/python
wget -r -A.pdf https://overapi.com/jquery
wget -r -A.pdf https://overapi.com/nodejs
wget -r -A.pdf https://overapi.com/php
wget -r -A.pdf https://overapi.com/java
wget -r -A.pdf https://overapi.com/ruby
wget -r -A.pdf https://overapi.com/javascript
wget -r -A.pdf https://overapi.com/actionscript
wget -r -A.pdf https://overapi.com/css
wget -r -A.pdf https://overapi.com/express
wget -r -A.pdf https://overapi.com/emmet#more
wget -r -A.pdf http://docs.emmet.io/
wget -r -A.pdf http://en.wikipedia.org/wiki/Zen_Coding
wget -r -A.pdf http://code.google.com/p/zen-coding/downloads/detail?name=ZenCodingCheatSheet.pdf
wget -r -A.pdf https://overapi.com/static/cs/ZenCodingCheatSheet.pdf
find . -depth -exec rmdir {} \;  
find . -depth -exec rmdir {} \;  
wget -r -A.pdf https://overapi.com/git
npm init
firebase login
git init
git\
git add .
git push -u origin master
git push 
git remote add origin https://github.com/bgoonz/web-dev-notes-backup.git
git push -u origin master
git add .
npm install -g firebase-tools
find . -depth -exec rmdir {} \;  
git init
git add .
git remote add origin https://github.com/bgoonz/stalk-photos-web-assets.git
git commit -m "initial commit "
git add .
git commit -m "initial commit "
git push -u origin master
git add .
git commit -m "organized photos by extension"
git push 
git add .
git commit -m "added links to assets"
git push 
git add .
git commit -m "readme"
git push 
git add .
git commit -m "readme"
git push 
forfiles /S /M * /C "cmd /c rename @file @fname.html"
for files /S /M * /C "cmd /c rename @file @fname.html"
forfiles /S /M * /C "cmd /c rename @file @fname.html"
wget -r -A.pdf https://overapi.com/html-dom
sed -i '/normalizerEmpty/d' ./js-in-one-page.html
node atags.js 
node upgrade.js 
npm install -g bower
npm-recursive-install
npm i -g recursive-install
npm-recursive-install
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
npm-recursive-install
code .
sudo sed -i '/CODE-MIRROR/!d' resources.html
sudo sed -i '/CODE-MIRROR/d' ./resources.html
sudo sed -i '/code-mirror/d' ./resources.html
sudo sed '/\.html\/!d' scrap.md
sudo sed '/\.html/!d' scrap.md
sudo sed -i '/\.html/!d' scrap.md
sudo sed -i '/overapi/d' ./output.txt
pandoc *.txt> combined.txt
#!/bin/sh
# find ./ | grep -i "\.*$" >files
find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.*$">files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'; echo'<style>'; echo '    a {'; echo '      color: black;'; echo '    }'; echo ''; echo '    li {'; echo '      border: 1px solid black !important;'; echo '      font-size: 20px;'; echo '      letter-spacing: 0px;'; echo '      font-weight: 700;'; echo '      line-height: 16px;'; echo '      text-decoration: none !important;'; echo '      text-transform: uppercase;'; echo '      background: #194ccdaf !important;'; echo '      color: black !important;'; echo '      border: none;'; echo '      cursor: pointer;'; echo '      justify-content: center;'; echo '      padding: 30px 60px;'; echo '      height: 48px;'; echo '      text-align: center;'; echo '      white-space: normal;'; echo '      border-radius: 10px;'; echo '      min-width: 45em;'; echo '      padding: 1.2em 1em 0;'; echo '      box-shadow: 0 0 5px;'; echo '      margin: 1em;'; echo '      display: grid;'; echo '      -webkit-border-radius: 10px;'; echo '      -moz-border-radius: 10px;'; echo '      -ms-border-radius: 10px;'; echo '      -o-border-radius: 10px;'; echo '    }'; echo '  </style>';   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <TITLE> directory </TITLE> </head>"   echo ""   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;</li>"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing --sort=extension >>$html
#!/bin/sh
# find ./ | grep -i "\.*$" >files
find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.*$">files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'; echo'<style>'; echo '    a {'; echo '      color: black;'; echo '    }'; echo ''; echo '    li {'; echo '      border: 1px solid black !important;'; echo '      font-size: 20px;'; echo '      letter-spacing: 0px;'; echo '      font-weight: 700;'; echo '      line-height: 16px;'; echo '      text-decoration: none !important;'; echo '      text-transform: uppercase;'; echo '      background: #194ccdaf !important;'; echo '      color: black !important;'; echo '      border: none;'; echo '      cursor: pointer;'; echo '      justify-content: center;'; echo '      padding: 30px 60px;'; echo '      height: 48px;'; echo '      text-align: center;'; echo '      white-space: normal;'; echo '      border-radius: 10px;'; echo '      min-width: 45em;'; echo '      padding: 1.2em 1em 0;'; echo '      box-shadow: 0 0 5px;'; echo '      margin: 1em;'; echo '      display: grid;'; echo '      -webkit-border-radius: 10px;'; echo '      -moz-border-radius: 10px;'; echo '      -ms-border-radius: 10px;'; echo '      -o-border-radius: 10px;'; echo '    }'; echo '  </style>';   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <title> directory </title> </head>"   echo ""   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;</li>"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing --sort=extension >>$html
#!/bin/sh
# find ./ | grep -i "\.*$" >files
find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.*$">files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>';   echo '<style>'; echo '    a {'; echo '      color: black;'; echo '    }'; echo ''; echo '    li {'; echo '      border: 1px solid black !important;'; echo '      font-size: 20px;'; echo '      letter-spacing: 0px;'; echo '      font-weight: 700;'; echo '      line-height: 16px;'; echo '      text-decoration: none !important;'; echo '      text-transform: uppercase;'; echo '      background: #194ccdaf !important;'; echo '      color: black !important;'; echo '      border: none;'; echo '      cursor: pointer;'; echo '      justify-content: center;'; echo '      padding: 30px 60px;'; echo '      height: 48px;'; echo '      text-align: center;'; echo '      white-space: normal;'; echo '      border-radius: 10px;'; echo '      min-width: 45em;'; echo '      padding: 1.2em 1em 0;'; echo '      box-shadow: 0 0 5px;'; echo '      margin: 1em;'; echo '      display: grid;'; echo '      -webkit-border-radius: 10px;'; echo '      -moz-border-radius: 10px;'; echo '      -ms-border-radius: 10px;'; echo '      -o-border-radius: 10px;'; echo '    }'; echo '  </style>';   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <title> directory </title> </head>"   echo ""   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;</li>"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing --sort=extension >>$html
#!/bin/sh
# find ./ | grep -i "\.*$" >files
find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.*$">files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <title> directory </title>"   echo "";   echo '<style>'; echo '    a {'; echo '      color: black;'; echo '    }'; echo ''; echo '    li {'; echo '      border: 1px solid black !important;'; echo '      font-size: 20px;'; echo '      letter-spacing: 0px;'; echo '      font-weight: 700;'; echo '      line-height: 16px;'; echo '      text-decoration: none !important;'; echo '      text-transform: uppercase;'; echo '      background: #194ccdaf !important;'; echo '      color: black !important;'; echo '      border: none;'; echo '      cursor: pointer;'; echo '      justify-content: center;'; echo '      padding: 30px 60px;'; echo '      height: 48px;'; echo '      text-align: center;'; echo '      white-space: normal;'; echo '      border-radius: 10px;'; echo '      min-width: 45em;'; echo '      padding: 1.2em 1em 0;'; echo '      box-shadow: 0 0 5px;'; echo '      margin: 1em;'; echo '      display: grid;'; echo '      -webkit-border-radius: 10px;'; echo '      -moz-border-radius: 10px;'; echo '      -ms-border-radius: 10px;'; echo '      -o-border-radius: 10px;'; echo '    }'; echo '  </style>';   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;</li>"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing --sort=extension >>$html
#!/bin/sh
# find ./ | grep -i "\.*$" >files
find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.*$">files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <title> directory </title>"   echo "";   echo '<style>'; echo '    a {'; echo '      color: black;'; echo '    }'; echo ''; echo '    li {'; echo '      border: 1px solid black !important;'; echo '      font-size: 20px;'; echo '      letter-spacing: 0px;'; echo '      font-weight: 700;'; echo '      line-height: 16px;'; echo '      text-decoration: none !important;'; echo '      text-transform: uppercase;'; echo '      background: #194ccdaf !important;'; echo '      color: black !important;'; echo '      border: none;'; echo '      cursor: pointer;'; echo '      justify-content: center;'; echo '      padding: 30px 60px;'; echo '      height: 48px;'; echo '      text-align: center;'; echo '      white-space: normal;'; echo '      border-radius: 10px;'; echo '      min-width: 45em;'; echo '      padding: 1.2em 1em 0;'; echo '      box-shadow: 0 0 5px;'; echo '      margin: 1em;'; echo '      display: grid;'; echo '      -webkit-border-radius: 10px;'; echo '      -moz-border-radius: 10px;'; echo '      -ms-border-radius: 10px;'; echo '      -o-border-radius: 10px;'; echo '    }'; echo '  </style>';   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;</a></li>"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing --sort=extension >>$html
sudo sed -i '/\.git/d' ./index.html
sudo sed -i '/node_modules/d' ./index.html
sudo sed -i '/\.json/d' ./index.html
sudo sed -i '/\.gif/d' ./index.html
sudo sed -i '/\.png/d' ./index.html
sudo sed -i '/\.css/d' ./index.html
sudo sed -i '/\.js/d' ./index.html
sudo sed -i '/\.php/d' ./index.html
sudo sed -i '/\.md/d' ./index.html
sudo sed -i '/\.svg/d' ./index.html
sudo sed -i '/\.jpeg/d' ./index.html
sudo sed -i '/\.jpg/d' ./index.html
sudo sed -i '/\.scss/d' ./index.html
sudo sed -i '/scss/d' ./index.html
sudo sed -i '/\.txt/d' ./index.html
sudo sed -i '/\.ttf/d' ./index.html
sudo sed -i '/\.pdf/d' ./index.html
sudo sed -i '/\.mp4/d' ./index.html
sudo sed -i '/\.pug/d' ./index.html
sudo sed -i '/\.DS_store/d' ./index.html
sudo sed -i '/\.DS_Store/d' ./index.html
sudo sed -i '/\.sql/d' ./index.html
sudo sed -i '/\.py/d' ./index.html
sudo sed -i '/\.xlsx/d' ./index.html
sudo sed -i '/\.JPG/d' ./index.html
sudo sed -i '/\.TTF/d' ./index.html
sudo sed -i '/\.ttf/d' ./index.html
sudo sed -i '/\.eot/d' ./index.html
sudo sed -i '/\.ttc/d' ./index.html
sudo sed -i '/\.PNG/d' ./index.html
sudo sed -i '/\.java/d' ./index.html
sudo sed -i '/\.png/d' ./index.html
sudo sed -i '/\.jpeg/d' ./index.html
sudo sed -i '/\.gif/d' ./index.html
sudo sed -i '/\.go/d' ./index.html
sudo sed -i '/\.vue/d' ./index.html
sed -i "" "s/.git/d" index.html
sed -i "" "s/.git/d" ./index.html
sed -i "" "s/.git/d" './index.html'
sed -i "./" "s/.git/d" 'index.html'
sed -i "./" "s/.git/d" index.html
sed -i "./" "s/\.git/d" index.html
sed -i "./" "s/\.git/d" ./index.html
sed '/.git/d' ./index.html
sed '/\.git/d' ./index.html
sed -i '/\.git/d' ./index.html
sudo sed -i '/node_modules/d' ./index.html
sudo sed -i '/\.git/d' ./index.html
sudo sed -i '/images/d' ./index.html
sudo sed -i '/font/d' ./index.html
sudo sed -i '/fonts/d' ./index.html
sudo sed -i '/\.TTF/d' ./index.html
git add .
#!/bin/sh
# find ./ | grep -i "\.*$" >files
find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.*$">files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <TITLE> directory </TITLE> </head>"   echo ""   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;</li>"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing --sort=extension >>$html
git add .
git commit -m "cleanup and link fixing"
git push 
git add .
git commit -m "oops"
git push 
for file in *.; do  sed -i '/U.\S.\/d' ./*.html; sed -i '/U\.S\./d' ./*.html; sed -i '/Support/d' ./*.html; sed -i '/MIT/d' ./*.html; sed -i '/License/d' ./*.html; sed -i '/Contributors/d' ./*.html; sed -i '/Copyright/d' ./*.html; sed -i '/copyright/d' ./*.html; sed -i '/Copyright © /d' ./*.html; sed -i '/U.\S.\/d' ./*.html; sed -i '/U\.S\./d' ./*.html; sed -i '/Support/d' ./*.html; sed -i '/MIT/d' ./*.html; sed -i '/License/d' ./*.html; sed -i '/Contributors/d' ./*.html; sed -i '/Copyright/d' ./*.html; sed -i '/copyright/d' ./*.html; sed -i '/Copyright © /d' ./*.html; sed -i '/U.\S.\/d' ./*.html; sed -i '/U\.S\./d' ./*.html; sed -i '/Support/d' ./*.html; sed -i '/MIT/d' ./*.html; sed -i '/License/d' ./*.html; sed -i '/Contributors/d' ./*.html; sed -i '/Copyright/d' ./*.html; sed -i '/copyright/d' ./*.html; sed -i '/Copyright © /d' ./*.html; sed -i '/U.\S.\/d' ./*.html; sed -i '/U\.S\./d' ./*.html; sed -i '/Support/d' ./*.html; sed -i '/MIT/d' ./*.html; sed -i '/License/d' ./*.html; sed -i '/Contributors/d' ./*.html; sed -i '/Copyright/d' ./*.html; sed -i '/copyright/d' ./*.html; sed -i '/Copyright © /d' ./*.html; done
for file in *.; do sudo sed -i '/U.\S.\/d' ./*.html; sudo sed -i '/U\.S\./d' ./*.html; sudo sed -i '/Support/d' ./*.html; sudo sed -i '/MIT/d' ./*.html; sudo sed -i '/License/d' ./*.html; sudo sed -i '/Contributors/d' ./*.html; sudo sed -i '/Copyright/d' ./*.html; sudo sed -i '/copyright/d' ./*.html; sudo sed -i '/Copyright &copy; /d' ./*.html done
for file in *.; do sudo sed -i '/Support/d' ./*.html done
for file in *.; do sudo sed -i '/Copyright/d' ./*.html done
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
wget-r https://awesomeopensource.com/categories/software-development
wget -r https://awesomeopensource.com/categories/software-development
wget -r -A.pdf https://github.com/galoget/free-programming-books/blob/master/free-programming-books.md
find . -depth -exec rmdir {} \;  
wget -r -A.pdf https://github.com/galoget/free-programming-books/blob/master/javascript-frameworks-resources.md
find . -depth -exec rmdir {} \;  
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
for f in * ; do    mv "$f" "$f.html"; done
#!/bin/sh
# find ./ | grep -i "\.*$" >files
find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.*$">files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <title> directory </title>"   echo "";   echo '<style>'; echo '    a {'; echo '      color: black;'; echo '    }'; echo ''; echo '    li {'; echo '      border: 1px solid black !important;'; echo '      font-size: 20px;'; echo '      letter-spacing: 0px;'; echo '      font-weight: 700;'; echo '      line-height: 16px;'; echo '      text-decoration: none !important;'; echo '      text-transform: uppercase;'; echo '      background: #194ccdaf !important;'; echo '      color: black !important;'; echo '      border: none;'; echo '      cursor: pointer;'; echo '      justify-content: center;'; echo '      padding: 30px 60px;'; echo '      height: 48px;'; echo '      text-align: center;'; echo '      white-space: normal;'; echo '      border-radius: 10px;'; echo '      min-width: 45em;'; echo '      padding: 1.2em 1em 0;'; echo '      box-shadow: 0 0 5px;'; echo '      margin: 1em;'; echo '      display: grid;'; echo '      -webkit-border-radius: 10px;'; echo '      -moz-border-radius: 10px;'; echo '      -ms-border-radius: 10px;'; echo '      -o-border-radius: 10px;'; echo '    }'; echo '  </style>';   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;</a></li>"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing --sort=extension >>$html
for f in * ; do    mv "$f" "$f.html"; done
for f in * ; do    mv "$f" "$f.html"
find . -type f -exec mv '{}' '{}'.html \;
find . -type f -exec mv '{}' '{}'.html \;
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . -name "*.zip" -type f -print -delete
find . -type f -name '*.html' | cpio -p -d -v './../../../'
find ./ -iname "*.md" -type f -exec sh -c 'pandoc "${0}" -o "${0%.md}.html"' {} \;
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find ./ -iname "*.md" -type f -exec sh -c 'pandoc "${0}" -o "${0%.md}.html"' {} \;
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . -name "*.zip" -type f -print -delete
bin/elasticsearch
#!/bin/bash
# CONTROLLING STARTUP:
#
# This script relies on a few environment variables to determine startup
# behavior, those variables are:
#
#   ES_PATH_CONF -- Path to config directory
#   ES_JAVA_OPTS -- External Java Opts on top of the defaults set
#
# Optionally, exact memory values can be set using the `ES_JAVA_OPTS`. Example
# values are "512m", and "10g".
#
#   ES_JAVA_OPTS="-Xms8g -Xmx8g" ./bin/elasticsearch
source "`dirname "$0"`"/elasticsearch-env
CHECK_KEYSTORE=true
DAEMONIZE=false
for option in "$@"; do   case "$option" in     -h|--help|-V|--version)       CHECK_KEYSTORE=false;       ;;     -d|--daemonize)       DAEMONIZE=true;       ;;   esac; done
if [ -z "$ES_TMPDIR" ]; then   ES_TMPDIR=`"$JAVA" "$XSHARE" -cp "$ES_CLASSPATH" org.elasticsearch.tools.launchers.TempDirectory`; fi
# get keystore password before setting java options to avoid
# conflicting GC configurations for the keystore tools
unset KEYSTORE_PASSWORD
KEYSTORE_PASSWORD=
if [[ $CHECK_KEYSTORE = true ]]     && bin/elasticsearch-keystore has-passwd --silent; then   if ! read -s -r -p "Elasticsearch keystore password: " KEYSTORE_PASSWORD ; then     echo "Failed to read keystore password on console" 1>&2;     exit 1;   fi; fi
# The JVM options parser produces the final JVM options to start Elasticsearch.
# It does this by incorporating JVM options in the following way:
#   - first, system JVM options are applied (these are hardcoded options in the
#     parser)
#   - second, JVM options are read from jvm.options and jvm.options.d/*.options
#   - third, JVM options from ES_JAVA_OPTS are applied
#   - fourth, ergonomic JVM options are applied
ES_JAVA_OPTS=`export ES_TMPDIR; "$JAVA" "$XSHARE" -cp "$ES_CLASSPATH" org.elasticsearch.tools.launchers.JvmOptionsParser "$ES_PATH_CONF"`
# manual parsing to find out, if process should be detached
if [[ $DAEMONIZE = false ]]; then   exec     "$JAVA"     "$XSHARE"     $ES_JAVA_OPTS     -Des.path.home="$ES_HOME"     -Des.path.conf="$ES_PATH_CONF"     -Des.distribution.flavor="$ES_DISTRIBUTION_FLAVOR"     -Des.distribution.type="$ES_DISTRIBUTION_TYPE"     -Des.bundled_jdk="$ES_BUNDLED_JDK"     -cp "$ES_CLASSPATH"     org.elasticsearch.bootstrap.Elasticsearch     "$@" <<<"$KEYSTORE_PASSWORD"; else   exec     "$JAVA"     "$XSHARE"     $ES_JAVA_OPTS     -Des.path.home="$ES_HOME"     -Des.path.conf="$ES_PATH_CONF"     -Des.distribution.flavor="$ES_DISTRIBUTION_FLAVOR"     -Des.distribution.type="$ES_DISTRIBUTION_TYPE"     -Des.bundled_jdk="$ES_BUNDLED_JDK"     -cp "$ES_CLASSPATH"     org.elasticsearch.bootstrap.Elasticsearch     "$@"     <<<"$KEYSTORE_PASSWORD" &   retval=$?;   pid=$!;   [ $retval -eq 0 ] || exit $retval;   if [ ! -z "$ES_STARTUP_SLEEP_TIME" ]; then     sleep $ES_STARTUP_SLEEP_TIME;   fi;   if ! ps -p $pid > /dev/null ; then     exit 1;   fi;   exit 0; fi
#!/bin/bash
# CONTROLLING STARTUP:
#
# This script relies on a few environment variables to determine startup
# behavior, those variables are:
#
#   ES_PATH_CONF -- Path to config directory
#   ES_JAVA_OPTS -- External Java Opts on top of the defaults set
#
# Optionally, exact memory values can be set using the `ES_JAVA_OPTS`. Example
# values are "512m", and "10g".
#
#   ES_JAVA_OPTS="-Xms8g -Xmx8g" ./bin/elasticsearch
source "`dirname "$0"`"/elasticsearch-env
CHECK_KEYSTORE=true
DAEMONIZE=false
for option in "$@"; do   case "$option" in     -h|--help|-V|--version)       CHECK_KEYSTORE=false;       ;;     -d|--daemonize)       DAEMONIZE=true;       ;;   esac; done
if [ -z "$ES_TMPDIR" ]; then   ES_TMPDIR=`"$JAVA" "$XSHARE" -cp "$ES_CLASSPATH" org.elasticsearch.tools.launchers.TempDirectory`; fi
# get keystore password before setting java options to avoid
# conflicting GC configurations for the keystore tools
unset KEYSTORE_PASSWORD
KEYSTORE_PASSWORD=
if [[ $CHECK_KEYSTORE = true ]]     && bin/elasticsearch-keystore has-passwd --silent; then   if ! read -s -r -p "Elasticsearch keystore password: " KEYSTORE_PASSWORD ; then     echo "Failed to read keystore password on console" 1>&2;     exit 1;   fi; fi
# The JVM options parser produces the final JVM options to start Elasticsearch.
# It does this by incorporating JVM options in the following way:
#   - first, system JVM options are applied (these are hardcoded options in the
#     parser)
#   - second, JVM options are read from jvm.options and jvm.options.d/*.options
#   - third, JVM options from ES_JAVA_OPTS are applied
#   - fourth, ergonomic JVM options are applied
ES_JAVA_OPTS=`export ES_TMPDIR; "$JAVA" "$XSHARE" -cp "$ES_CLASSPATH" org.elasticsearch.tools.launchers.JvmOptionsParser "$ES_PATH_CONF"`
# manual parsing to find out, if process should be detached
if [[ $DAEMONIZE = false ]]; then   exec     "$JAVA"     "$XSHARE"     $ES_JAVA_OPTS     -Des.path.home="$ES_HOME"     -Des.path.conf="$ES_PATH_CONF"     -Des.distribution.flavor="$ES_DISTRIBUTION_FLAVOR"     -Des.distribution.type="$ES_DISTRIBUTION_TYPE"     -Des.bundled_jdk="$ES_BUNDLED_JDK"     -cp "$ES_CLASSPATH"     org.elasticsearch.bootstrap.Elasticsearch     "$@" <<<"$KEYSTORE_PASSWORD"; else   exec     "$JAVA"     "$XSHARE"     $ES_JAVA_OPTS     -Des.path.home="$ES_HOME"     -Des.path.conf="$ES_PATH_CONF"     -Des.distribution.flavor="$ES_DISTRIBUTION_FLAVOR"     -Des.distribution.type="$ES_DISTRIBUTION_TYPE"     -Des.bundled_jdk="$ES_BUNDLED_JDK"     -cp "$ES_CLASSPATH"     org.elasticsearch.bootstrap.Elasticsearch     "$@"     <<<"$KEYSTORE_PASSWORD" &   retval=$?;   pid=$!;   [ $retval -eq 0 ] || exit $retval;   if [ ! -z "$ES_STARTUP_SLEEP_TIME" ]; then     sleep $ES_STARTUP_SLEEP_TIME;   fi;   if ! ps -p $pid > /dev/null ; then     exit 1;   fi;   exit 0; fi
#!/bin/bash
set -e -o pipefail
source "`dirname "$0"`"/elasticsearch-env
curl -X GET http://localhost:9200/
sudo curl -X GET http://localhost:9200/
curl -X POST 'http://localhost:9200/my-index-000001/_doc?pretty' -H 'Content-Type: application/json' -d '
{
  "@timestamp": "2099-11-15T13:12:00",
  "message": "GET /search HTTP/1.1 200 1070000",
  "user": {
    "id": "kimchy"
  }
}'
curl -X POST 'http://localhost:9200/my-index-000001/_doc?pretty' -H 'Content-Type: application/json' -d '
{
  "@timestamp": "2099-11-15T14:12:12",
  "message": "GET /search HTTP/1.1 200 1070000",
  "user": {
    "id": "elkbee"
  }
}'
curl -X POST 'http://localhost:9200/my-index-000001/_doc?pretty' -H 'Content-Type: application/json' -d '
{
  "@timestamp": "2099-11-15T01:46:38",
  "message": "GET /search HTTP/1.1 200 1070000",
  "user": {
    "id": "elkbee"
  }
}'
curl -X GET http://localhost:9200/
code .
cd ..
code .
sudo service docker start
sudo dockerd
chmod -x elasticsearch
bash elasticsearch
curl -X GET http://localhost:9200/
sudo systemctl start elasticsearch
sudo service docker start
curl -fsSL https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo apt-key add -
echo "deb https://artifacts.elastic.co/packages/7.x/apt stable main" | sudo tee -a /etc/apt/sources.list.d/elastic-7.x.list
sudo apt update
sudo apt install elasticsearch
env
export XDG_RUNTIME_DIR=/run/user/`id -u`
sudo systemctl restart systemd-logind.service
export XDG_RUNTIME_DIR=/run/user/`id -u`
sudo apt upgrade
curl -fsSL https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo apt-key add -
echo "deb https://artifacts.elastic.co/packages/7.x/apt stable main" | sudo tee -a /etc/apt/sources.list.d/elastic-7.x.list
sudo apt update
sudo apt install elasticsearch
sudo code /etc/elasticsearch/elasticsearch.yml
sudo nano /etc/elasticsearch/elasticsearch.yml
sudo systemctl start elasticsearch
System has not been booted with systemd as init system (PID 1). Can't operate.
Failed to connect to bus: Host is downservice --status-all
service --status-all
docker run -d --name redis --privileged -v /sys/fs/cgroup:/sys/fs/cgroup:ro jrei/systemd-ubuntu:18.04
sudo docker run -d --name redis --privileged -v /sys/fs/cgroup:/sys/fs/cgroup:ro jrei/systemd-ubuntu:18.04
sudo dockerd
cd ..
code .
curl -X GET http://localhost:9200/
curl -L -O https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.10.2-linux-x86_64.tar.gz
tar -xvf elasticsearch-7.10.2-linux-x86_64.tar.gz
cd elasticsearch-7.10.2/bin
./elasticsearch
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . -name "*.zip" -type f -print -delete
find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . -name "*.zip" -type f -print -delete
npm run start
npm run start
npm install mongodb
npm audit fix
npm install
wget -r -A.pdf https://www.beamjobs.com/resumes/web-developer-resume-examples
wget -r https://insights.stackoverflow.com/survey/2019#overview
youtube-dl https://vimeo.com/aacurriculum
git add .
git commit -m "added index page"
git push 
git add .
git init
git add .
git remote add origin https://github.com/bgoonz/Mihir_Beg_Final.git
git commit -m "initial commit"
git push -u origin master
git init
git add .
git commit -m "fixed deploy issue"
git push 
git add .
git commit -m "fixed deploy issue"
git push 
git add .
git commit -m "fixed deploy issue"
git push 
git clone git://github.com/jquery/jquery.git
wget -r https://learn.jquery.com/about-jquery/
git add .
git commit -m "resize toc"
git push 
git add .
git commit -m "resize toc"
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/bgoonz/bgoonz.github.io.git
git push -u origin master
tree -d -L 4
git add .
git commit -m "initial commit"
git push -u origin master
git add .
git commit -m "initial commit"
git push -u origin master
git add .
git commit -m "added powerpoint portfolio"
git push 
git add .
git commit -m "fixed deploy issue"
git push 
git add .
git commit -m "fixed deploy issue"
git push 
git add .
git commit -m "fixed deploy issue"
git push 
git add .
git commit -m "fixed deploy issue"
git add .
git push 
npm init -y
npm install jquery
find ./ -iname "*.md" -type f -exec sh -c 'pandoc "${0}" -o "${0%.md}.html"' {} \;
#!/bin/sh
# find ./ | grep -i "\.*$" >files
find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.*$">files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <title> directory </title>"   echo "";   echo '<style>'; echo '    a {'; echo '      color: black;'; echo '    }'; echo ''; echo '    li {'; echo '      border: 1px solid black !important;'; echo '      font-size: 20px;'; echo '      letter-spacing: 0px;'; echo '      font-weight: 700;'; echo '      line-height: 16px;'; echo '      text-decoration: none !important;'; echo '      text-transform: uppercase;'; echo '      background: #194ccdaf !important;'; echo '      color: black !important;'; echo '      border: none;'; echo '      cursor: pointer;'; echo '      justify-content: center;'; echo '      padding: 30px 60px;'; echo '      height: 48px;'; echo '      text-align: center;'; echo '      white-space: normal;'; echo '      border-radius: 10px;'; echo '      min-width: 45em;'; echo '      padding: 1.2em 1em 0;'; echo '      box-shadow: 0 0 5px;'; echo '      margin: 1em;'; echo '      display: grid;'; echo '      -webkit-border-radius: 10px;'; echo '      -moz-border-radius: 10px;'; echo '      -ms-border-radius: 10px;'; echo '      -o-border-radius: 10px;'; echo '    }'; echo '  </style>';   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;</a></li>"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing --sort=extension >>$html
sudo sed -i '/\.png/d' ./index.html

sudo sed -i '/\.json/d' ./index.html
sudo sed -i '/\.jpeg/d' ./index.html
sed -i "" "s/.git/d" ./index.html
sudo sed -i '/images/d' ./index.html
sudo sed -i '/\.md/d' ./index.html
sudo sed -i '/\.js/d' ./index.html
sudo sed -i '/\.css/d' ./index.html
sudo sed -i '/\.png/d' ./index.html
sudo sed -i '/\.html/!d' index.html
wget -r https://www.facebook.com/bryan.guner
wget -r http://country.io/data/
curl -L -O https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.10.2-amd64.deb
sudo dpkg -i elasticsearch-7.10.2-amd64.deb
npm install
cd ..
bin/elasticsearch-setup-passwords interactive
cd etc
bin/elasticsearch-setup-passwords interactive
docker pull docker.elastic.co/elasticsearch/elasticsearch:7.10.2-arm64
docker run -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:7.10.2
cd ..
cd /etc/sysctl.conf
cd ./etc/sysctl.conf
cd etc
cdsysctl.conf
grep vm.max_map_count /etc/sysctl.conf
cd home
cd ..
cd home
cd bryan
grep vm.max_map_count /etc/sysctl.conf
npm run dev
npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn-starter/tree/master/learn-starter"
npm run dev
./metricbeat modules enable elasticsearch
./metricbeat modules enable elasticsearch
git add .
chmod +x elastic.sh
bash elastic.sh
docker-compose up
The command 'docker-compose' could not be found in this WSL 2 distro.
wsl --list --verbose
docker-machine restart
docker-compose up
The command 'docker-compose' could not be found in this WSL 2 distro.
curl -X GET "localhost:9200/_cat/nodes?v=true&pretty"
bin/elasticsearch-setup-passwords interactive
grep vm.max_map_count /etc/sysctl.conf
vm.max_map_count=262144
sysctl -w vm.max_map_count=262144
wsl -d docker-desktop
sysctl -w vm.max_map_count=262144
/resources/item[@id="index.php"]/description/text()
curl --location --header "Accept: application/rdf+xml" http://www.test.com   | xmllint --format --xpath '//title' -
curl foo.com/somefile.xml | xmllint --format -curl foo.com/somefile.xml | xmllint --format -
curl foo.com/somefile.xml | xmllint --format -
docker-compose up
mkdir esdatadir
chmod g+rwx esdatadir
chgrp 0 esdatadir
sudo mkdir esdatadir
sudo chmod g+rwx esdatadir
sudo chgrp 0 esdatadir
docker run --rm centos:8 /bin/bash -c 'ulimit -Hn && ulimit -Sn && ulimit -Hu && ulimit -Su'
docker run -e "bootstrap.memory_lock=true" --ulimit memlock=-1:-1
docker run -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:7.10.2 -e "bootstrap.memory_lock=true" --ulimit memlock=-1:-1
-v full_path_to/custom_elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml
The container runs Elasticsearch as user elasticsearch using uid:gid 1000:0. Bind mounted host directories and files must be accessible by this user, and the data and log directories must be writable by this user.
Mounting an Elasticsearch keystoreedit
By default, Elasticsearch will auto-generate a keystore file for secure settings. This file is obfuscated but not encrypted. If you want to encrypt your secure settings with a password, you must use the elasticsearch-keystore utility to create a password-protected keystore and bind-mount it to the container as /usr/share/elasticsearch/config/elasticsearch.keystore. In order to provide the Docker container with the password at startup, set the Docker environment value KEYSTORE_PASSWORD to the value of your password. For example, a docker
run command might have the following options:
-v full_path_to/elasticsearch.keystore:/usr/share/elasticsearch/config/elasticsearch.keystore
-E KEYSTORE_PASSWORD=mypassword
Using custom Docker imagesedit
In some environments, it might make more sense to prepare a custom image that contains your configuration. A Dockerfile to achieve this might be as simple as:
FROM docker.elastic.co/elasticsearch/elasticsearch:7.10.2
COPY --chown=elasticsearch:elasticsearch elasticsearch.yml /usr/share/elasticsearch/config/
You could then build and run the image with:
docker build --tag=elasticsearch-custom .
docker run -ti -v /usr/share/elasticsearch/data elasticsearch-custom
Some plugins require additional security permissions. You must explicitly accept them either by:
Attaching a tty when you run the Docker image and allowing the permissions when prompted.
Inspecting the security permissions and accepting them (if appropriate) by adding the --batch flag to the plugin install command.
See Plugin management for more information.
Next stepsedit
You now have a test Elasticsearch environment set up. Before you start serious development or go into production with Elasticsearch, you must do some additional setup:
Learn how to configure Elasticsearch.
Configure important Elasticsearch settings.
Configure important system settings.
« Install Elasticsearch with Windows MSI InstallerInstall Elasticsearch on macOS with Homebrew »
On this page
Pulling the image
Starting a single node cluster with Docker
Starting a multi-node cluster with Docker Compose
Using the Docker images in production
Configuring Elasticsearch with Docker
Next steps
What's New

 Elastic Cloud Free Trial

 Visualizing Data with Kibana Lens

 Managing Logs, Metrics & APM

Elasticsearch Reference: 
7.10 (current)
What is Elasticsearch?
What’s new in 7.10
Getting started with Elasticsearch
Set up Elasticsearch
Installing Elasticsearch
Install Elasticsearch from archive on Linux or MacOS
Install Elasticsearch with .zip on Windows
Install Elasticsearch with Debian Package
Install Elasticsearch with RPM
Install Elasticsearch with Windows MSI Installer
Install Elasticsearch with Docker
Install Elasticsearch on macOS with Homebrew
Configuring Elasticsearch
Important Elasticsearch configuration
Important System Configuration
Bootstrap Checks
Bootstrap Checks for X-Pack
Starting Elasticsearch
Stopping Elasticsearch
Discovery and cluster formation
Add and remove nodes in your cluster
Full-cluster restart and rolling restart
Remote clusters
Set up X-Pack
Configuring X-Pack Java Clients
Plugins
Upgrade Elasticsearch
Index modules
Mapping
Text analysis
Index templates
Data streams
Ingest node
Search your data
Query DSL
Aggregations
EQL
SQL access
Scripting
Data management
ILM: Manage the index lifecycle
Monitor a cluster
Frozen indices
Roll up or transform your data
Set up a cluster for high availability
Snapshot and restore
Secure a cluster
Watch for cluster and index events
Command line tools
How To
Glossary of terms
REST APIs
Migration guide
Rel

docker run -v full_path_to/custom_elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml
FROM docker.elastic.co/elasticsearch/elasticsearch:7.10.2
COPY --chown=elasticsearch:elasticsearch elasticsearch.yml /usr/share/elasticsearch/config/
docker build --tag=elasticsearch-custom .
docker run -ti -v /usr/share/elasticsearch/data elasticsearch-custom
sudo docker build --tag=elasticsearch-custom .
sudo docker run -ti -v /usr/share/elasticsearch/data elasticsearch-custom
git add .
curl -L -O https://artifacts.elastic.co/downloads/beats/metricbeat/metricbeat-7.10.2-darwin-x86_64.tar.gz
tar xzvf metricbeat-7.10.2-darwin-x86_64.tar.gz
cd metricbeat-7.10.2-darwin-x86_64/
curl -X GET "localhost:9200/_cat/nodes?v=true&pretty"
--ulimit nofile=65535:65535
tar -xf metricbeat-7.10.2-darwin-x86_64.tar.gz
git add .
git commit -m "elastic search makes my head hurt"
git push 
git pull
curl -X POST 'https://782dcfa71c754bbab08578a094719315.ent-search.us-central1.gcp.cloud.es.io/api/as/v1/engines/web-dev-hub-search/documents'   -H 'Content-Type: application/json'   -H 'Authorization: Bearer private-37bi975o9ef3ww4y4u5ry6gj'   -d '[
        {
          "id": "park_rocky-mountain",
          "title": "Rocky Mountain",
          "description": "Bisected north to south by the Continental Divide, this portion of the Rockies has ecosystems varying from over 150 riparian lakes to montane and subalpine forests to treeless alpine tundra. Wildlife including mule deer, bighorn sheep, black bears, and cougars inhabit its igneous mountains and glacial valleys. Longs Peak, a classic Colorado fourteener, and the scenic Bear Lake are popular destinations, as well as the historic Trail Ridge Road, which reaches an elevation of more than 12,000 feet (3,700 m).",
          "nps_link": "https://www.nps.gov/romo/index.htm",
          "states": [
            "Colorado"
          ],
          "visitors": 4517585,
          "world_heritage_site": false,
          "location": "40.4,-105.58",
          "acres": 265795.2,
          "square_km": 1075.6,
          "date_established": "1915-01-26T06:00:00Z"
        },
        {
          "id": "park_saguaro",
          "title": "Saguaro",
          "description": "Split into the separate Rincon Mountain and Tucson Mountain districts, this park is evidence that the dry Sonoran Desert is still home to a great variety of life spanning six biotic communities. Beyond the namesake giant saguaro cacti, there are barrel cacti, chollas, and prickly pears, as well as lesser long-nosed bats, spotted owls, and javelinas.",
          "nps_link": "https://www.nps.gov/sagu/index.htm",
          "states": [
            "Arizona"
          ],
          "visitors": 820426,
          "world_heritage_site": false,
          "location": "32.25,-110.5",
          "acres": 91715.72,
          "square_km": 371.2,
          "date_established": "1994-10-14T05:00:00Z"
        }
      ]'
# [
#   {
#     "id": "park_rocky-mountain",
#     "errors": []
#   },
#   {
#     "id": "park_saguaro",
#     "errors": []
#   }
# ]
curl -X POST 'https://782dcfa71c754bbab08578a094719315.ent-search.us-central1.gcp.cloud.es.io/api/as/v1/engines/web-dev-hub-search/documents'   -H 'Content-Type: application/json'   -H 'Authorization: Bearer private-37bi975o9ef3ww4y4u5ry6gj'   -d '[
        {
          "id": "park_rocky-mountain",
          "title": "Rocky Mountain",
          "description": "Bisected north to south by the Continental Divide, this portion of the Rockies has ecosystems varying from over 150 riparian lakes to montane and subalpine forests to treeless alpine tundra. Wildlife including mule deer, bighorn sheep, black bears, and cougars inhabit its igneous mountains and glacial valleys. Longs Peak, a classic Colorado fourteener, and the scenic Bear Lake are popular destinations, as well as the historic Trail Ridge Road, which reaches an elevation of more than 12,000 feet (3,700 m).",
          "nps_link": "https://www.nps.gov/romo/index.htm",
          "states": [
            "Colorado"
          ],
          "visitors": 4517585,
          "world_heritage_site": false,
          "location": "40.4,-105.58",
          "acres": 265795.2,
          "square_km": 1075.6,
          "date_established": "1915-01-26T06:00:00Z"
        },
        {
          "id": "park_saguaro",
          "title": "Saguaro",
          "description": "Split into the separate Rincon Mountain and Tucson Mountain districts, this park is evidence that the dry Sonoran Desert is still home to a great variety of life spanning six biotic communities. Beyond the namesake giant saguaro cacti, there are barrel cacti, chollas, and prickly pears, as well as lesser long-nosed bats, spotted owls, and javelinas.",
          "nps_link": "https://www.nps.gov/sagu/index.htm",
          "states": [
            "Arizona"
          ],
          "visitors": 820426,
          "world_heritage_site": false,
          "location": "32.25,-110.5",
          "acres": 91715.72,
          "square_km": 371.2,
          "date_established": "1994-10-14T05:00:00Z"
        }
      ]'
# [
#   {
#     "id": "park_rocky-mountain",
#     "errors": []
#   },
#   {
#     "id": "park_saguaro",
#     "errors": []
#   }
./metricbeat modules enable elasticsearch
chmod -x ./metricbeat modules enable elasticsearch
ll
cd elasticsearch-7.10.2/
grep vm.max_map_count /etc/sysctl.conf
code .
npm install lunr
npm install @elastic/app-search-node
curl -X GET "localhost:9200/my-index-000001/_msearch?pretty" -H 'Content-Type: application/json' -d'
{ }
{"query" : {"match" : { "message": "this is a test"}}}
{"index": "my-index-000002"}
{"query" : {"match_all" : {}}}
'
npm i headless-chrome-crawler
npm audit fix
pip install scrapy
scrapy startproject tutorial
scrapy crawl quotes
scrapy crawl quotes
scrapy shell  'https://goofy-euclid-1cd736.netlify.app/'
scrapy crawl quotes
scrapy crawl quotes -O quotes.json
scrapy crawl quotes -o quotes.jl
for href in response.css('ul.pager a::attr(href)'):
scrapy crawl quotes
scrapy crawl quotes -O quotes-humor.json -a tag=humor
scrapy crawl LxmlParserLinkExtractor
scrapy crawl myspider -s LOG_FILE=scrapy.log
mkdir keep-unsorted
cd keep-unsorted
wget -r https://www.atlassian.com/agile/scrum
for f in * ; do    mv "$f" "$f.html"; done
find . -type f -exec mv '"$f" "$f.html"'{} +
find . -type f  mv '"$f" "$f.html"'{} +
find . -type f -exec rename 's/"$f"/"$f.html"/g' {} +
find . -type f  rename 's/"$f"/"$f.html"/g' {} +
find . -type f  -exec rename 's/"$f"/"$f.html"/g' {} +
find ./ -type f  -exec rename 's/"$f"/"$f.html"/g' {} +
find ./ -type f   rename 's/"$f"/"$f.html"/g' {} +
find ./ -type f   rename 's/"*$f"/"*$f.html"/g' {} +
find ./ -type f   rename 's/"*$f"/"*$f.html"/' {} +
wget --wait=2 --level=inf --limit-rate=20K --recursive --page-requisites --user-agent=Mozilla --no-parent --convert-links --adjust-extension --no-clobber -e robots=off https://www.atlassian.com/agile/scrum
for f in * ; do    mv "$f" "$f.html"; done
for f in * ; do    mv "$f" "$f.html"; done
find . -type f -exec rename 's/html//g' {} +
chmod -x make-html.sh
bash make-html.sh
for f in * ; do    mv "$f" "$f.html"; done
for file in ./*/* ; do for f in * ; do    mv "$f" "$f.html"; done done
for d in ./*/ ; do (cd "$d" && cmd(){for f in * ; do 
done}); done
done
cd keep-unsorted/
code .
find . -type f -name '*.md' | cpio -p -d -v './../'
#!/bin/sh
# find ./ | grep -i "\.*$" >files
find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.*$">files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <title> directory </title>"   echo "";   echo '<style>'; echo '    a {'; echo '      color: black;'; echo '    }'; echo ''; echo '    li {'; echo '      border: 1px solid black !important;'; echo '      font-size: 20px;'; echo '      letter-spacing: 0px;'; echo '      font-weight: 700;'; echo '      line-height: 16px;'; echo '      text-decoration: none !important;'; echo '      text-transform: uppercase;'; echo '      background: #194ccdaf !important;'; echo '      color: black !important;'; echo '      border: none;'; echo '      cursor: pointer;'; echo '      justify-content: center;'; echo '      padding: 30px 60px;'; echo '      height: 48px;'; echo '      text-align: center;'; echo '      white-space: normal;'; echo '      border-radius: 10px;'; echo '      min-width: 45em;'; echo '      padding: 1.2em 1em 0;'; echo '      box-shadow: 0 0 5px;'; echo '      margin: 1em;'; echo '      display: grid;'; echo '      -webkit-border-radius: 10px;'; echo '      -moz-border-radius: 10px;'; echo '      -ms-border-radius: 10px;'; echo '      -o-border-radius: 10px;'; echo '    }'; echo '  </style>';   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;</a></li>"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing --sort=extension >>$html
sudo sed -i '/\.html/d' ./index.html
sudo sed -i '/\.html/!d' ./index.html
sudo sed -i '/\.html/d' ./index.html
#!/bin/sh
# find ./ | grep -i "\.*$" >files
find ./ | sed -E -e 's/([^ ]+[ ]+){8}//' | grep -i "\.*$">files
listing="files"
out=""
html="index.html"
out="basename $out.html"
html="index.html"
cmd() {   echo '  <!DOCTYPE html>';   echo '<html>';   echo '<head>'   echo '  <meta http-equiv="Content-Type" content="text/html">'   echo '  <meta name="Author" content="Bryan Guner">';   echo '<link rel="stylesheet" href="./assets/prism.css">';   echo ' <link rel="stylesheet" href="./assets/style.css">';   echo ' <script async defer src="./assets/prism.js"></script>'   echo "  <title> directory </title>"   echo "";   echo '<style>'; echo '    a {'; echo '      color: black;'; echo '    }'; echo ''; echo '    li {'; echo '      border: 1px solid black !important;'; echo '      font-size: 20px;'; echo '      letter-spacing: 0px;'; echo '      font-weight: 700;'; echo '      line-height: 16px;'; echo '      text-decoration: none !important;'; echo '      text-transform: uppercase;'; echo '      background: #194ccdaf !important;'; echo '      color: black !important;'; echo '      border: none;'; echo '      cursor: pointer;'; echo '      justify-content: center;'; echo '      padding: 30px 60px;'; echo '      height: 48px;'; echo '      text-align: center;'; echo '      white-space: normal;'; echo '      border-radius: 10px;'; echo '      min-width: 45em;'; echo '      padding: 1.2em 1em 0;'; echo '      box-shadow: 0 0 5px;'; echo '      margin: 1em;'; echo '      display: grid;'; echo '      -webkit-border-radius: 10px;'; echo '      -moz-border-radius: 10px;'; echo '      -ms-border-radius: 10px;'; echo '      -o-border-radius: 10px;'; echo '    }'; echo '  </style>';   echo '</head>'   echo '<body>'   echo ""   echo ""   echo ""   echo "<ul>"   awk '{print "<li><a href=\""$1"\">",$1,"&nbsp;</a></li>"}' $listing   echo ""   echo "</ul>"   echo "</body>"   echo "</html>" }
cmd $listing --sort=extension >>$html
find . -type f -a \( -name "*.html" -o -name "*.js" -o -name "*.css" -o -name "*.md" \) -a -exec sed -i  '/Copyright/d' '{}' +
find . -type f -a \( -name "*.html" -o -name "*.js" -o -name "*.css" -o -name "*.md" \) -a -exec sed
ll
cd c
npm install
sudo sed -i '/\.html/!d' index.html
find . -depth -exec rmdir {} \;  
find . -empty -type f -print -delete
find . -empty -type d -print -delete
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
git init
git remote add origin https://github.com/bgoonz/Resource-Hub-Mark_II.git
git add .
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
find . -depth -exec rmdir {} \;  
find . -empty -type f -print -delete
ll
cd ..
cd MY-WEB-DEV
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
ll
cd  02-cloned-repos/
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
code .
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . \( -name ".git" -o -name ".gitignore" -o -name ".gitmodules" -o -name ".gitattributes" \) -exec rm -rf -- {} +
find . \( -name "*SECURITY.txt" -o -name "*RELEASE.txt" -o  -name "*CHANGELOG.txt" -o -name "*LICENSE.txt" -o -name "*CONTRIBUTING.txt" -name "*HISTORY.md" -o -name "*LICENSE" -o -name "*SECURITY.md" -o -name "*RELEASE.md" -o  -name "*CHANGELOG.md" -o -name "*LICENSE.md" -o -name "*CODE_OF_CONDUCT.md" -o -name "*CONTRIBUTING.md" \) -exec rm -rf -- {} +
find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +
cd ..
cd 0-a-A-October
find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +
cd ..
cd 0-a-A-October
cd 00-weeks-container/
find . -name "*.zip" -type f -print -delete
cd ..
cd MY-WEB-DEV
02-cloned-repos/
find . -name "*.zip" | while read filename; do unzip -o -d "`dirname "$filename"`" "$filename"; done;
find . -name "*.zip" -type f -print -delete
npm install
npm install list.js
npm audit fix
npm audit fix -force
for file in *.; do      rename 's/package\.html$/package\.json/' *package\.html; done
for file in *.; do      rename 's/\.txt$/.html/' *.txt; done
for file in *.; do      rename 's/\.txt$/.html/' *.txt; done
for file in *.; do      rename 's/\.txt$/.html/' *.txt; done
for file in *.; do      rename 's/\package\.html$/.json/' *package\.html; done
for file in *.; do      rename 's/package\.html$/.json/' *package\.html; done
find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +
npm install
npm install
npm install
git add .
git remote add origin https://github.com/bgoonz/web-dev-notes-resource-site.git
git init
git remote add origin https://github.com/bgoonz/web-dev-notes-resource-site.git
git push 
git push -u origin master
git add .
git add .
git commit -m "deleted stuff"
git add .
git commit -m "deleted stuff"
git push 
git push -f
git add .
git commit -m "update"
wget --wait=2 --level=inf --limit-rate=20K --recursive --page-requisites --user-agent=Mozilla --no-parent --convert-links --adjust-extension --no-clobber -e robots=off https://npm.broofa.com/
wget --wait=2 --level=inf --limit-rate=20K --recursive https://npm.broofa.com/
