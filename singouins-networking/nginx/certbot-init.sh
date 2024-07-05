#!/bin/sh
# For subdomains
certbot certonly --logs-dir /var/www/certbot \
                 --webroot --webroot-path /var/www/certbot \
                 -d <CERTBOT_DOMAINS> \
                 --email <CERTBOT_EMAIL> \
                 --agree-tos \
                 --no-eff-email

# For wikdcards
certbot certonly --manual \
                 --preferred-challenges=dns \
                 --logs-dir /var/www/certbot \
                 --email <CERTBOT_EMAIL> \
                 --agree-tos \
                 --no-eff-email \
                 -d *.singouins.com

# For dev+prod embedded
certbot certonly --logs-dir /var/www/certbot \
                 --webroot --webroot-path /var/www/certbot \
                 -d xxx.<CERTBOT_DOMAIN> -d xxx.dev.<CERTBOT_DOMAIN> \
                 --email <CERTBOT_EMAIL> \
                 --agree-tos \
                 --no-eff-email \
                 --dry-run
