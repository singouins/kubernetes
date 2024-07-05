# loki

## Commands to remember
### Deletion

```
curl -g -X POST \
  'http://127.0.0.1:3100/loki/api/admin/delete?match[]={foo="bar"}&start=1591616227&end=1591619692' \
  -H 'x-scope-orgid: 1'
```

Query parameters:

- match[]=<series_selector>: Repeated label matcher argument that identifies the streams from which to delete. At least one match[] argument must be provided.
- start=<rfc3339 | unix_timestamp>: A timestamp that identifies the start of the time window within which entries will be deleted. If not specified, defaults to 0, the Unix Epoch time.
- end=<rfc3339 | unix_timestamp>: A timestamp that identifies the end of the time window within which entries will be deleted. If not specified, defaults to the current time.

Examples:

```
curl -v -g -X POST 'http://<loki-host>:3100/loki/api/admin/delete?match[]={k8s_app="<namespace>/<app>"}' -H 'x-scope-orgid: 1'
curl -v -g -X POST 'http://<loki-host>:3100/loki/api/admin/delete?match[]={k8s_container_name="<containername>"}' -H 'x-scope-orgid: 1'
curl -v    -X GET  'http://<loki-host>:3100/loki/api/admin/delete' -H 'x-scope-orgid: 1'
```

### Direct Query

```
curl -G -s  "http://<loki-host>:3100/loki/api/v1/query_range?direction=BACKWARD&limit=1000&query={k8s_app='<namespace>/<app>'}&start=164569342591000000&end=1645704225911000000&step=5"
```

NB: the query needs to be URLencoded, like `%7Bk8s_app%3D%22<namespace>%2F<app>%22%7D`
