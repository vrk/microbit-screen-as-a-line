namespace screenMagic {
    export function plotAt(index: number): void {
        const x = Math.round(index / 5);
        const y = Math.round(index % 5);
        led.plot(x, y)
    }
}
