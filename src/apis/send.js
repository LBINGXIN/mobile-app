export default function send(config) {
  return uni.$ec.http.post(config);
}
