# Задание 1 - Docker CLI

- ## Загрузите образ `busybox` последней версии.

_Решение:_ <br>
`docker pull busybox`

_Лог:_ <br>
```
Using default tag: latest
latest: Pulling from library/busybox
Digest: sha256:3fbc632167424a6d997e74f52b878d7cc478225cffac6bc977eedfe51c7f4e79
Status: Image is up to date for busybox:latest
docker.io/library/busybox:latest
```

- ## Запустите новый контейнер `busybox` с командой `ping` сайта `netology.ru`, и количеством пингов 7, поименуйте контейнер `pinger`.

_Решение:_ <br>
`docker run --name pinger busybox ping -c 7 netology.ru`

_Лог:_ <br>
```
PING netology.ru (188.114.98.224): 56 data bytes
64 bytes from 188.114.98.224: seq=0 ttl=55 time=111.486 ms
64 bytes from 188.114.98.224: seq=1 ttl=55 time=65.425 ms
64 bytes from 188.114.98.224: seq=2 ttl=55 time=66.755 ms
64 bytes from 188.114.98.224: seq=3 ttl=55 time=68.758 ms
64 bytes from 188.114.98.224: seq=4 ttl=55 time=67.047 ms
64 bytes from 188.114.98.224: seq=5 ttl=55 time=66.758 ms
64 bytes from 188.114.98.224: seq=6 ttl=55 time=67.967 ms

--- netology.ru ping statistics ---
7 packets transmitted, 7 packets received, 0% packet loss
round-trip min/avg/max = 65.425/73.456/111.486 ms
```

- ## Выведите на список всех контейнеров - запущенных и остановленных.

_Решение:_ <br>
`docker ps --all`

_Лог (с markdown таблицей):_ <br>
|  IMAGE         |  COMMAND  |  COMMAND                 |  CREATED              |  STATUS                         | PORTS  |  NAMES   |
|---------------|------------|--------------------------|-----------------------|---------------------------------|--------|----------|
|  9efa5cb498fd | busybox    |  "ping -c 7 netology.…"  |   About a minute ago  |  Exited (0) About a minute ago  |        |  pinger  |

_Лог:_ <br>
```
CONTAINER ID        IMAGE               COMMAND                  CREATED              STATUS                          PORTS               NAMES
9efa5cb498fd        busybox             "ping -c 7 netology.…"   About a minute ago   Exited (0) About a minute ago                       pinger
```

- ## Выведите на экран логи контейнера с именем `pinger`.

_Решение:_ <br>
`docker logs pinger`

_Лог:_ <br>
```
PING netology.ru (188.114.98.224): 56 data bytes
64 bytes from 188.114.98.224: seq=0 ttl=55 time=111.486 ms
64 bytes from 188.114.98.224: seq=1 ttl=55 time=65.425 ms
64 bytes from 188.114.98.224: seq=2 ttl=55 time=66.755 ms
64 bytes from 188.114.98.224: seq=3 ttl=55 time=68.758 ms
64 bytes from 188.114.98.224: seq=4 ttl=55 time=67.047 ms
64 bytes from 188.114.98.224: seq=5 ttl=55 time=66.758 ms
64 bytes from 188.114.98.224: seq=6 ttl=55 time=67.967 ms

--- netology.ru ping statistics ---
7 packets transmitted, 7 packets received, 0% packet loss
round-trip min/avg/max = 65.425/73.456/111.486 ms
```

- ## Запустите второй раз контейнера с именем `pinger`.

_Решение:_ <br>
`docker start pinger`

_Лог:_ <br>
```
pinger
```

- ## Выведите на список всех контейнеров - запущенных и остановленных.

_Решение:_ <br>
`docker ps --all`

_Лог (с markdown таблицей):_ <br>
|  IMAGE         |  COMMAND  |  COMMAND                 |  CREATED         |  STATUS                         | PORTS  |  NAMES   |
|---------------|------------|--------------------------|------------------|---------------------------------|--------|----------|
|  9efa5cb498fd | busybox    |  "ping -c 7 netology.…"  |  18 minutes ago  |  Exited (0) About a minute ago  |        |  pinger  |

_Лог:_ <br>
```
| CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS                          PORTS               NAMES

9efa5cb498fd        busybox             "ping -c 7 netology.…"   18 minutes ago      Exited (0) About a minute ago                       pinger
```

- ## Выведите на экран логи контейнера с именем `pinger`.

_Решение:_ <br>
`docker logs pinger`

_Лог:_ <br>
```
PING netology.ru (188.114.98.224): 56 data bytes <br>
64 bytes from 188.114.98.224: seq=0 ttl=55 time=151.408 ms <br>
64 bytes from 188.114.98.224: seq=1 ttl=55 time=71.291 ms <br>
64 bytes from 188.114.98.224: seq=2 ttl=55 time=72.228 ms <br>
64 bytes from 188.114.98.224: seq=3 ttl=55 time=73.770 ms <br>
64 bytes from 188.114.98.224: seq=4 ttl=55 time=72.068 ms <br>
64 bytes from 188.114.98.224: seq=5 ttl=55 time=71.997 ms <br>
64 bytes from 188.114.98.224: seq=6 ttl=55 time=71.333 ms <br>

--- netology.ru ping statistics ---
7 packets transmitted, 7 packets received, 0% packet loss
round-trip min/avg/max = 71.291/83.442/151.408 ms
PING netology.ru (188.114.98.224): 56 data bytes
64 bytes from 188.114.98.224: seq=0 ttl=55 time=91.017 ms
64 bytes from 188.114.98.224: seq=1 ttl=55 time=76.251 ms
64 bytes from 188.114.98.224: seq=2 ttl=55 time=76.898 ms
64 bytes from 188.114.98.224: seq=3 ttl=55 time=79.768 ms
64 bytes from 188.114.98.224: seq=4 ttl=55 time=76.861 ms
64 bytes from 188.114.98.224: seq=5 ttl=55 time=77.740 ms
64 bytes from 188.114.98.224: seq=6 ttl=55 time=76.573 ms

--- netology.ru ping statistics ---
7 packets transmitted, 7 packets received, 0% packet loss
round-trip min/avg/max = 76.251/79.301/91.017 ms
```

- ## Определите по логам общее количество запусков команды `ping` и какое общее количество отправленых запросов.

_Решение:_ <br>
`2 запуска, 14 запросов`

- ## Удалите контейнер с именем `pinger`.

_Решение:_ <br>
`docker rm pinger`

_Лог:_ <br>
```
pinger
```

- ## Удалите образ `busybox`.

_Решение:_ <br>
`docker rmi busybox`

_Лог:_ <br>
```
Untagged: busybox:latest
Untagged: busybox@sha256:3fbc632167424a6d997e74f52b878d7cc478225cffac6bc977eedfe51c7f4e79
Deleted: sha256:a416a98b71e224a31ee99cff8e16063554498227d2b696152a9c3e0aa65e5824
Deleted: sha256:3d24ee258efc3bfe4066a1a9fb83febf6dc0b1548dfe896161533668281c9f4f
```