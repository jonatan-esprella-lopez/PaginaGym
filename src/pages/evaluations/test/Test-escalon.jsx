    import React, { useState, useEffect } from 'react';
    import '../../../styles/Nutrition/Ev1/Test-escalon.css';

    const Description = () => {
        return (
            <div className="ymca-description">
                <p><strong>Objetivo:</strong> Subir el escalón 96 veces en 3 minutos.</p>
                <ol>
                    <li>Tomar la prueba</li>
                    <li>Reposar 5 minutos</li>
                    <li>Tomar el pulso por 6 segundos</li>
                    <li>Determinar el programa apropiado</li>
                    <li>Calcular zonas cardíacas %</li>
                </ol>
                <p className="ymca-recommendation">RECOMENDABLE PARA MEDIR EL INICIO DEL PACIENTE</p>
            </div>
        );
    }

    const Timer = ({ start, onTimeUp }) => {
        const [time, setTime] = useState(180); // 3 minutes in seconds

        useEffect(() => {
            if (!start) return;
            const timerId = setInterval(() => {
                setTime(prevTime => {
                    if (prevTime <= 1) {
                        clearInterval(timerId);
                        onTimeUp();
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);

            return () => clearInterval(timerId);
        }, [start, onTimeUp]);

        const formatTime = (seconds) => {
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = seconds % 60;
            return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
        };

        return (
            <div className="ymca-timer">{formatTime(time)}</div>
        );
    }

    const Results = ({ pulse, zone, onPulseChange, onZoneChange }) => {
        return (
            <div className="ymca-results">
                <h2>Resultados</h2>
                <p>
                    Pulso: 
                    <input 
                        type="number" 
                        value={pulse} 
                        onChange={(e) => onPulseChange(e.target.value)} 
                    />
                </p>
                <p>
                    Zona cardíaca: 
                    <input 
                        type="number" 
                        value={zone} 
                        onChange={(e) => onZoneChange(e.target.value)} 
                    />%
                </p>
            </div>
        );
    }

    const App = () => {
        const [start, setStart] = useState(false);
        const [pulse, setPulse] = useState(0);
        const [zone, setZone] = useState(0);

        const startTest = () => {
            setStart(true);
        }

        const stopTest = () => {
            setStart(false);
        }

        const onTimeUp = () => {
            setStart(false);
        }

        return (
            <div className="ymca-main">
                <h1>Prueba del Escalón YMCA</h1>
                <Description />
                <div className="ymca-attempt-container">
                    <div className="ymca-attempt-row">
                        <label htmlFor="stepCount">Recuento de pasos:</label>
                        <input type="number" id="stepCount" min="0" step="1" />
                    </div>
                    <div className="ymca-attempt-row">
                        <Timer start={start} onTimeUp={onTimeUp} />
                        {!start ? (
                            <button onClick={startTest}>Iniciar Prueba</button>
                        ) : (
                            <button onClick={stopTest}>Parar Prueba</button>
                        )}
                    </div>
                </div>
                <Results 
                    pulse={pulse} 
                    zone={zone} 
                    onPulseChange={setPulse} 
                    onZoneChange={setZone} 
                />
            </div>
        );
    }

    export default App;
