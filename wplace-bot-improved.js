// Bot mejorado para wplace.live con delays aleatorios
// Uso: Copia y pega este código en la consola del navegador (F12)

class WPlaceBot {
    constructor() {
        this.isRunning = false;
        this.pixelQueue = [];
        this.config = {
            // Delays en milisegundos (min, max)
            clickDelay: { min: 2000, max: 8000 },      // Entre clics
            moveDelay: { min: 500, max: 1500 },        // Movimiento del mouse
            pauseDelay: { min: 10000, max: 30000 },    // Pausas largas ocasionales
            pauseChance: 0.15,                         // 15% probabilidad de pausa larga
            
            // Configuración de comportamiento humano
            humanBehavior: {
                randomMoves: true,        // Movimientos aleatorios del mouse
                occasionalPauses: true,   // Pausas ocasionales
                variableSpeed: true       // Velocidad variable
            }
        };
        
        console.log('🤖 WPlace Bot Mejorado iniciado');
        console.log('📋 Comandos disponibles:');
        console.log('  bot.start() - Iniciar bot');
        console.log('  bot.stop() - Detener bot');
        console.log('  bot.addPixel(x, y, color) - Añadir píxel a la cola');
        console.log('  bot.setConfig(options) - Configurar delays');
    }
    
    // Generar delay aleatorio
    randomDelay(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    // Simular movimiento humano del mouse
    async simulateHumanMovement(targetX, targetY) {
        if (!this.config.humanBehavior.randomMoves) return;
        
        // Movimiento en curva hacia el objetivo
        const steps = Math.floor(Math.random() * 5) + 3;
        const currentX = Math.random() * window.innerWidth;
        const currentY = Math.random() * window.innerHeight;
        
        for (let i = 0; i < steps; i++) {
            const progress = i / steps;
            const x = currentX + (targetX - currentX) * progress + (Math.random() - 0.5) * 50;
            const y = currentY + (targetY - currentY) * progress + (Math.random() - 0.5) * 50;
            
            // Simular evento de movimiento
            const moveEvent = new MouseEvent('mousemove', {
                clientX: x,
                clientY: y,
                bubbles: true
            });
            document.dispatchEvent(moveEvent);
            
            await this.sleep(this.randomDelay(50, 200));
        }
    }
    
    // Función de sleep
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    // Colocar un píxel con comportamiento humano
    async placePixel(x, y, color) {
        try {
            console.log(`🎨 Colocando píxel en (${x}, ${y}) color: ${color}`);
            
            // Simular movimiento del mouse
            await this.simulateHumanMovement(x, y);
            
            // Buscar el canvas o elemento de píxeles
            const canvas = document.querySelector('canvas') || 
                          document.querySelector('[data-testid="canvas"]') ||
                          document.querySelector('.pixel-canvas');
            
            if (!canvas) {
                console.warn('⚠️ No se encontró el canvas');
                return false;
            }
            
            // Calcular posición en el canvas
            const rect = canvas.getBoundingClientRect();
            const canvasX = x;
            const canvasY = y;
            
            // Simular clic con variaciones humanas
            const clickEvent = new MouseEvent('click', {
                clientX: rect.left + canvasX + (Math.random() - 0.5) * 2,
                clientY: rect.top + canvasY + (Math.random() - 0.5) * 2,
                bubbles: true,
                cancelable: true
            });
            
            canvas.dispatchEvent(clickEvent);
            
            // Delay variable después del clic
            const delay = this.config.humanBehavior.variableSpeed ? 
                         this.randomDelay(this.config.clickDelay.min, this.config.clickDelay.max) :
                         this.config.clickDelay.min;
            
            await this.sleep(delay);
            
            // Pausa ocasional larga (simular distracción humana)
            if (this.config.humanBehavior.occasionalPauses && 
                Math.random() < this.config.pauseChance) {
                const pauseTime = this.randomDelay(this.config.pauseDelay.min, this.config.pauseDelay.max);
                console.log(`😴 Pausa humana: ${pauseTime/1000}s`);
                await this.sleep(pauseTime);
            }
            
            return true;
            
        } catch (error) {
            console.error('❌ Error colocando píxel:', error);
            return false;
        }
    }
    
    // Añadir píxel a la cola
    addPixel(x, y, color) {
        this.pixelQueue.push({ x, y, color });
        console.log(`➕ Píxel añadido a la cola: (${x}, ${y}) - Cola: ${this.pixelQueue.length}`);
    }
    
    // Añadir múltiples píxeles (para dibujos)
    addPixels(pixels) {
        pixels.forEach(pixel => {
            this.addPixel(pixel.x, pixel.y, pixel.color);
        });
    }
    
    // Configurar delays y comportamiento
    setConfig(options) {
        this.config = { ...this.config, ...options };
        console.log('⚙️ Configuración actualizada:', this.config);
    }
    
    // Iniciar el bot
    async start() {
        if (this.isRunning) {
            console.log('⚠️ El bot ya está ejecutándose');
            return;
        }
        
        if (this.pixelQueue.length === 0) {
            console.log('⚠️ No hay píxeles en la cola. Usa bot.addPixel(x, y, color)');
            return;
        }
        
        this.isRunning = true;
        console.log('🚀 Bot iniciado con comportamiento humano');
        console.log(`📊 Píxeles en cola: ${this.pixelQueue.length}`);
        
        while (this.isRunning && this.pixelQueue.length > 0) {
            const pixel = this.pixelQueue.shift();
            const success = await this.placePixel(pixel.x, pixel.y, pixel.color);
            
            if (!success) {
                console.log('⏸️ Error en píxel, pausando...');
                await this.sleep(5000);
            }
            
            // Verificar si el bot sigue activo
            if (!this.isRunning) break;
        }
        
        console.log('✅ Bot terminado - Cola vacía');
        this.isRunning = false;
    }
    
    // Detener el bot
    stop() {
        this.isRunning = false;
        console.log('🛑 Bot detenido');
    }
    
    // Obtener estado
    getStatus() {
        return {
            running: this.isRunning,
            queueLength: this.pixelQueue.length,
            config: this.config
        };
    }
}

// Crear instancia global
const bot = new WPlaceBot();

// Ejemplos de uso:
console.log('\n📝 Ejemplos de uso:');
console.log('// Añadir un píxel:');
console.log('bot.addPixel(100, 100, "#FF0000");');
console.log('\n// Añadir múltiples píxeles:');
console.log('bot.addPixels([');
console.log('  {x: 100, y: 100, color: "#FF0000"},');
console.log('  {x: 101, y: 100, color: "#00FF00"},');
console.log('  {x: 102, y: 100, color: "#0000FF"}');
console.log(']);');
console.log('\n// Configurar delays más conservadores:');
console.log('bot.setConfig({');
console.log('  clickDelay: { min: 5000, max: 15000 },');
console.log('  pauseChance: 0.25');
console.log('});');
console.log('\n// Iniciar:');
console.log('bot.start();');

// Configuración recomendada para evitar detección
bot.setConfig({
    clickDelay: { min: 3000, max: 12000 },
    pauseChance: 0.2,
    humanBehavior: {
        randomMoves: true,
        occasionalPauses: true,
        variableSpeed: true
    }
});

console.log('\n🛡️ Bot configurado con delays anti-detección');
console.log('⚠️ Recuerda: Úsalo con moderación para evitar bans');