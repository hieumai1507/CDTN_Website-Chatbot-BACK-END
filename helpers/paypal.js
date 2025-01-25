const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id:
    "AeLAIUHMT7GZXYM25-ezD2m0j5MyA7-iWQsw8ahr9meTbZicdqVE2-d0OmL85FPobSN6wG2p0wlfnmne",
  client_secret:
    "EOXzFUE287PLtL9m_gopmAG0RtqcZozRXxynUzsEgoOaJtUTYox_-6CM8meVauIUFkjS4jIlT9CcaH4A",
});

module.exports = paypal;
