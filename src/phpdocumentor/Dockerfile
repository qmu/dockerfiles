FROM php:7.3
# Doesn't work with the alpine based image
# https://github.com/phpDocumentor/phpDocumentor2/issues/1874

RUN apt-get update \
    && apt-get install -yq graphviz curl git libicu-dev libicu57 libzip-dev libxslt1-dev \
    && rm -rf /var/lib/apt/lists/* \
    && docker-php-ext-install -j$(nproc) intl zip xsl

# Install composer & prestissimo
ENV COMPOSER_ALLOW_SUPERUSER=1 \
    COMPOSER_NO_INTERACTION=1
RUN curl -sS https://getcomposer.org/installer | php \
    && mv composer.phar /usr/local/bin/composer \
    && composer global require phpdocumentor/phpdocumentor dev-master
    
WORKDIR /src
  
ENTRYPOINT ["/root/.composer/vendor/bin/phpdoc"]
