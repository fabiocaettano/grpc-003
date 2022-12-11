echo "***** Atualizazar repositório ******"
apt-get update

echo "***** Instalando GIT *****"
apt install git -y

echo "***** Atualizazar CURL *****"
apt install curl -y

echo "***** Atualizazar HTOP *****"
apt install htop

echo "***** Instalar DOCKER *****"

apt-get update
apt install apt-transport-https ca-certificates 
apt install curl -y
apt install gnupg2 -y
apt install software-properties-common -y
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -
add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable"
apt update
apt-cache policy docker-ce
apt install docker-ce -y

echo ***** Instalar DOCKER-COMPOSE *****

curl -L https://github.com/docker/compose/releases/download/1.25.3/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

echo ***** Instalar NODE ***** 

wget https://nodejs.org/dist/v14.21.1/node-v14.21.1-linux-x64.tar.xz

mkdir -p /usr/local/lib/nodejs

VERSION=v14.21.1

DISTRO=linux-x64

tar -xJvf node-$VERSION-$DISTRO.tar.xz -C /usr/local/lib/nodejs 

chmod +x /usr/local/lib/nodejs


export PATH=/usr/local/lib/nodejs/node-$VERSION-$DISTRO/bin:$PATH

. ~/.profile

node -v

npm -v
