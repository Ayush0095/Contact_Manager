const dns = require("dns");

console.log("Before:", dns.getServers());

dns.setServers(["8.8.8.8", "8.8.4.4"]);

console.log("After:", dns.getServers());

dns.resolveSrv(
  "_mongodb._tcp.contacts.vc0ni7q.mongodb.net",
  (err, records) => {
    console.log(err || records);
  }
);