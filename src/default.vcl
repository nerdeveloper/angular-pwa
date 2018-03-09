ub vcl_backend_response {
# Happens after we have read the response headers from the backend.
#
# Here you clean the response headers, removing silly Set-Cookie headers
# and other mistakes your backend does.
if (bereq.url ~ “\.(png|gif|jpg|swf|css|js)$”) {
unset beresp.http.set-cookie;
set beresp.http.cache-control = “max-age = 2592000”;

}
}