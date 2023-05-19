basic.forever(function () {
    dht11_dht22.queryData(
    DHTtype.DHT11,
    DigitalPin.P0,
    true,
    false,
    true
    )
    basic.showString("Humi" + dht11_dht22.readData(dataType.humidity))
    basic.showString("Temp" + dht11_dht22.readData(dataType.temperature) + "°C")
})
