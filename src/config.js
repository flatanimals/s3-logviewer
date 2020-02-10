const config = function () {
  return {
    headers: [
      'bucket-owner',
      'bucket',
      'time',
      'remote-ip',
      'requester',
      'request-id',
      'operation',
      'key',
      'request-uri',
      'http-status',
      'error-code',
      'bytes-sent',
      'object-size',
      'total-time',
      'turn-around-time',
      'referer',
      'user-agent',
      'version-id',
      'host-id',
      'signature-version',
      'cipher-suite',
      'authentication-type',
      'host-header',
      'tls-version',
    ],
    visible: [
        'time',
        'bucket',
        'remote-ip',
        'operation',
        'key',
        'request-uri',
        'http-status',
        'error-code',
        'total-time',
        'turn-around-time',
        'referer',
        'user-agent',
        'host-header',
        'request-id',
    ]
  }
}

export default config()
