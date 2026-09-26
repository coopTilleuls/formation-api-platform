# Formation API Platform 4.4

Projet de départ de la formation : **API Platform 4.4** + **Symfony 7.4** sur [FrankenPHP](https://frankenphp.dev) ([symfony-docker](https://github.com/dunglas/symfony-docker)).

## Prérequis

- [Docker](https://docs.docker.com/get-docker/) avec Docker Compose v2.10+
- Git

## Démarrer

```bash
git clone git@github.com:coopTilleuls/formation-api-platform.git api-platform-formation
cd api-platform-formation
docker compose build --pull --no-cache
docker compose up --wait
```

| URL | Contenu |
| --- | --- |
| https://localhost/api | Point d'entrée de l'API (Hydra) |
| https://localhost/api/docs | Documentation OpenAPI / Swagger UI |
| https://localhost/admin | Admin React générée depuis la doc Hydra |

Arrêter le projet : `docker compose down --remove-orphans`

## Commandes de base

```bash
docker compose exec php bin/console make:entity --api-resource
docker compose exec php bin/console doctrine:schema:update --force
docker compose exec php bin/console debug:api-resource
```

## Ce qui est déjà installé

- `api-platform/symfony` et `api-platform/doctrine-orm` **4.4** (versions figées dans `api/composer.lock`)
- `api-platform/schema-generator` (`vendor/bin/schema`)
- `symfony/maker-bundle`, PHPUnit, `symfony/browser-kit` et `symfony/http-client` pour les tests

## Notes

- **Cache PropertyInfo** : [`api/config/packages/api_platform_dev_cache.yaml`](api/config/packages/api_platform_dev_cache.yaml) contourne un défaut d'API Platform 4.4 qui, en dev, empêche les propriétés ajoutées ou renommées d'apparaître dans la doc. Si le problème survient malgré tout :
  ```bash
  docker compose exec php bin/console cache:pool:clear cache.property_info
  ```

## Aperçu

Dès que vous déclarez une ressource (ici l'entité `PostalAddress` des slides), la documentation et l'admin se mettent à jour d'elles-mêmes.

**Documentation OpenAPI** — https://localhost/api/docs

![Swagger UI](docs/screenshots/swagger.png)

**Admin** — https://localhost/admin

![Liste dans l'admin](docs/screenshots/admin-list.png)

![Formulaire de création dans l'admin](docs/screenshots/admin-create.png)

Les commandes Symfony se lancent dans le conteneur `php` :
