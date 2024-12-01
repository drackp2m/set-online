# generate-ssl.sh
if [ ! -d "/etc/ssl/private" ]; then
  mkdir -p /etc/ssl/private
fi

if [ ! -d "/etc/ssl/certs" ]; then
  mkdir -p /etc/ssl/certs
fi

if [ ! -f "certs/self-signed.key" ] || [ ! -f "certs/self-signed.key" ]; then
	openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout certs/self-signed.key -out certs/self-signed.crt -subj "/C=ES/ST=Castellón/L=Castellón de la Plana/O=PlaySetOnline/OU=IT Department/CN=playsetonline.com/emailAddress=contact@playsetonline.com"
  echo "SSL certificates generated successfully."
else
  echo "Certificates already exist, skipping generation."
fi
