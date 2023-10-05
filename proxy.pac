function FindProxyForURL(url, host) {
  // List of domains to route through the VPN
  var vpnDomains = [
    "youtube.com",
    "facebook.com",
    "chrome.com"
  ];

  for (var i = 0; i < vpnDomains.length; i++) {
    if (dnsDomainIs(host, vpnDomains[i])) {
      return "PROXY vpn-server-address:vpn-port";
    }
  }

  // Default to direct connection
  return "DIRECT";
}
