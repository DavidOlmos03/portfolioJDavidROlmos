import { Component } from '@angular/core';

@Component({
  selector: 'app-docker',
  templateUrl: './docker.component.html',
  styleUrls: ['./docker.component.css','../dev-notes.component.css']
})
export class DockerComponent {
  // Docker
  createNetwork = `docker network create name_network`
  dockerComposeUp = `docker compose -f .\docker\docker-compose.dev.yml up --build`
  dockerComposeDown = `docker compose -f .\docker\docker-compose.dev.yml down`

  sizeVolumn = `docker run –rm -v nameVolume:/mnt alpine sh “du -sh /mnt”`
  checkNetwork = `docker network connect red_name container_id`
  connectToNetwork = `docker network inspect world-app`

  fullDockerContainer = `  docker container run
  -dp 3306:3306
  --name world-db
  --env MARIADB_USER=example-user
  --env MARIADB_PASSWORD=user-password
  --env MARIADB_ROOT_PASSWORD=root-secret-password
  --env MARIADB_DATABASE=world-db
  --volume world-db:/var/lib/mysql
  mariadb:jammy`
}
