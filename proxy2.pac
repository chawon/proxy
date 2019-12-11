function FindProxyForURL(url, host) {

    if (shExpMatch(host, "localhost") ||
        shExpMatch(host, "127.0.0.1") ||
        shExpMatch(host, "dpsmaster1") ||
        shExpMatch(host, "10.10.76.51") ||
        shExpMatch(host, "dpadm") ||
        shExpMatch(host, "10.10.78.177") ||
        shExpMatch(host, "caspi-rm1") ||
        shExpMatch(host, "10.10.76.214") ||
        shExpMatch(host, "dphname2") ||
        shExpMatch(host, "10.10.78.22") ||
        shExpMatch(host, "10.9.26.12") ||
        shExpMatch(host, "10.10.76.42")) 
        return "DIRECT";
    return "SOCKS 127.0.0.1:8000";
}