namespace screenMagic {
    /**
     * Address LEDs linearly column first
     */
    //% blockId=screenmagicplotat
    //% block="plot at $index"
    //% index.min=0 index.max=24
    export function plotAt(index: number): void {
        const x = Math.floor(index / 5);
        const y = index % 5;
        led.plot(x, y)
    }
}
