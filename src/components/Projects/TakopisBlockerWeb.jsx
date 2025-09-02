import React, { useState } from 'react';
import ExpandableImage from './ExpandableImage';

const TakopisBlockerWeb = () => {
  const [activeMode, setActiveMode] = useState('normal');

  const modes = {
    normal: {
      title: 'Modo Normal',
      description: 'Bloqueo básico de sitios web mediante modificación del archivo hosts del sistema.',
      features: [
        'Bloqueo inmediato de sitios web',
        'Interfaz gráfica intuitiva',
        'Gestión de lista de sitios bloqueados',
        'Desbloqueo manual sencillo'
      ]
    },
    strict: {
      title: 'Modo Estricto',
      description: 'Bloqueo con temporizador y contraseña maestra para mayor control.',
      features: [
        'Temporizadores personalizables (días, horas, minutos)',
        'Contraseña maestra con hash SHA-256',
        'Bloqueo temporal automático',
        'Imposible desbloquear sin contraseña correcta'
      ]
    },
    friend: {
      title: 'Modo Amigo',
      description: 'Sistema de contraseñas generadas automáticamente para autocontrol.',
      features: [
        'Contraseñas generadas automáticamente',
        'Sistema de solicitud de desbloqueo',
        'Ideal para autocontrol y productividad',
        'Configuración flexible de tiempo'
      ]
    }
  };

  const technicalSpecs = [
    { label: 'Lenguaje', value: 'Python 3.10+' },
    { label: 'GUI Framework', value: 'Tkinter' },
    { label: 'Empaquetado', value: 'PyInstaller' },
    { label: 'Persistencia', value: 'JSON Files' },
    { label: 'Seguridad', value: 'SHA-256 Hashing' },
    { label: 'Sistema', value: 'Windows 10/11' }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-6">
            <img 
              src="/images/takopi.png" 
              alt="Takopi Icon" 
              className="w-16 h-16 mr-4"
            />
            <h1 className="text-5xl font-bold text-black">
              🚫 Takopi's BlockerWeb
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aplicación de escritorio para bloquear sitios web con múltiples modos de operación. 
            Desarrollada en Python con interfaz gráfica Tkinter.
          </p>
        </div>

        {/* Main Image */}
        <div className="flex justify-center mb-12">
          <ExpandableImage 
            src="/images/takopi.png" 
            alt="Takopi BlockerWeb Interface" 
            className="rounded-lg shadow-2xl max-w-md"
          />
        </div>

        {/* Mode Selector */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">🎯 Modos de Bloqueo</h2>
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-lg p-2 flex space-x-2">
              {Object.entries(modes).map(([key, mode]) => (
                <button
                  key={key}
                  onClick={() => setActiveMode(key)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeMode === key
                      ? 'bg-black text-white shadow-lg'
                      : 'text-gray-600 hover:text-black hover:bg-gray-200'
                  }`}
                >
                  {mode.title}
                </button>
              ))}
            </div>
          </div>

          {/* Active Mode Details */}
          <div className="bg-gray-100 border-2 border-gray-200 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-black">
              {modes[activeMode].title}
            </h3>
            <p className="text-gray-700 mb-6 text-lg">
              {modes[activeMode].description}
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {modes[activeMode].features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">⚙️ Especificaciones Técnicas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {technicalSpecs.map((spec, index) => (
              <div key={index} className="bg-gray-100 border border-gray-200 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-black mb-2">{spec.label}</h3>
                <p className="text-gray-700">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">✨ Características Principales</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-100 border border-gray-200 rounded-xl p-6">
              <div className="text-3xl mb-4">🖥️</div>
              <h3 className="text-xl font-bold mb-3 text-black">Interfaz Intuitiva</h3>
              <p className="text-gray-700">Interfaz gráfica desarrollada con Tkinter, fácil de usar y navegar.</p>
            </div>
            
            <div className="bg-gray-100 border border-gray-200 rounded-xl p-6">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-3 text-black">Bloqueo Efectivo</h3>
              <p className="text-gray-700">Modifica el archivo hosts del sistema para un bloqueo real y efectivo.</p>
            </div>
            
            <div className="bg-gray-100 border border-gray-200 rounded-xl p-6">
              <div className="text-3xl mb-4">⏰</div>
              <h3 className="text-xl font-bold mb-3 text-black">Temporizadores</h3>
              <p className="text-gray-700">Sistema de temporizadores personalizables para bloqueos temporales.</p>
            </div>
            
            <div className="bg-gray-100 border border-gray-200 rounded-xl p-6">
              <div className="text-3xl mb-4">🔐</div>
              <h3 className="text-xl font-bold mb-3 text-black">Seguridad</h3>
              <p className="text-gray-700">Contraseñas con hash SHA-256 para máxima seguridad.</p>
            </div>
            
            <div className="bg-gray-100 border border-gray-200 rounded-xl p-6">
              <div className="text-3xl mb-4">💾</div>
              <h3 className="text-xl font-bold mb-3 text-black">Persistencia</h3>
              <p className="text-gray-700">Configuración guardada en archivos JSON para mantener el estado.</p>
            </div>
            
            <div className="bg-gray-100 border border-gray-200 rounded-xl p-6">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-3 text-black">Ejecutable</h3>
              <p className="text-gray-700">Aplicación standalone (.exe) lista para usar sin instalación.</p>
            </div>
          </div>
        </div>

        {/* Installation & Usage */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">🚀 Instalación y Uso</h2>
          <div className="bg-gray-100 border-2 border-gray-200 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-black">📋 Requisitos</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Windows 10/11</li>
                  <li>• Permisos de administrador</li>
                  <li>• Python 3.10+ (para desarrollo)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-black">⚡ Uso Rápido</h3>
                <ol className="space-y-2 text-gray-700">
                  <li>1. Descargar WebsiteBlocker.exe</li>
                  <li>2. Ejecutar como administrador</li>
                  <li>3. Seleccionar modo de bloqueo</li>
                  <li>4. Agregar sitios a bloquear</li>
                </ol>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-gray-100 rounded-lg border border-gray-200">
              <p className="text-gray-800 font-semibold">
                ⚠️ <strong>IMPORTANTE:</strong> Siempre ejecutar como administrador para que el bloqueo funcione correctamente.
              </p>
            </div>
          </div>
        </div>

        {/* Architecture */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">🏗️ Arquitectura del Proyecto</h2>
          <div className="bg-gray-50 border-2 border-gray-100 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-black">📁 Estructura de Archivos</h3>
                <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 font-mono text-sm text-gray-800">
                  <div>Blocker/</div>
                  <div>├── main_mode_selector.py</div>
                  <div>├── website_blocker.py</div>
                  <div>├── strict_mode.py</div>
                  <div>├── friend_mode.py</div>
                  <div>├── site_state_manager.py</div>
                  <div>├── assets/</div>
                  <div>│   ├── takopi.png</div>
                  <div>│   └── takopi.png</div>
                  <div>├── json/</div>
                  <div>│   ├── blocked_sites_state.json</div>
                  <div>│   ├── friend_mode_config.json</div>
                  <div>│   └── strict_config.json</div>
                  <div>└── dist/</div>
                  <div>    └── WebsiteBlocker.exe</div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-black">🔧 Componentes Principales</h3>
                <div className="space-y-3">
                  <div className="bg-gray-100 border border-gray-200 rounded-lg p-3">
                    <h4 className="font-semibold text-black">ModeSelector</h4>
                    <p className="text-sm text-gray-600">Interfaz principal para selección de modos</p>
                  </div>
                  <div className="bg-gray-100 border border-gray-200 rounded-lg p-3">
                    <h4 className="font-semibold text-black">WebsiteBlocker</h4>
                    <p className="text-sm text-gray-600">Lógica core de bloqueo de sitios</p>
                  </div>
                  <div className="bg-gray-100 border border-gray-200 rounded-lg p-3">
                    <h4 className="font-semibold text-black">StrictMode</h4>
                    <p className="text-sm text-gray-600">Gestión de temporizadores y contraseñas</p>
                  </div>
                  <div className="bg-gray-100 border border-gray-200 rounded-lg p-3">
                    <h4 className="font-semibold text-black">StateManager</h4>
                    <p className="text-sm text-gray-600">Persistencia y gestión de estados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <div className="bg-gray-100 border-2 border-gray-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-black">🎯 Objetivo del Proyecto</h3>
            <p className="text-gray-700 text-lg max-w-4xl mx-auto">
              Takopi's BlockerWeb fue desarrollado como una solución completa para el control de acceso a sitios web, 
              combinando múltiples estrategias de bloqueo con una interfaz intuitiva y características de seguridad avanzadas. 
              El proyecto demuestra habilidades en desarrollo de aplicaciones de escritorio, manejo de archivos del sistema, 
              interfaces gráficas, y empaquetado de aplicaciones.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TakopisBlockerWeb;