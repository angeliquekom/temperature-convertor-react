module.exports = {
    TEMPERATURES_CONFIGURATION: {
        celsius: {
            title: 'Celsius',
            symbol: 'C',
            range: {
                min: 0.0,
                max: 100.0
            },
            transform: {
                celsius: (value) => value,
                fahrenheit: (value) => value * 1.8 + 32,
                kelvin: (value) => value + 273.15,
                reaumur: (value) => value * 4 / 5
            }
        },
        fahrenheit: {
            title: 'Fahrenheit',
            symbol: 'F',
            range: {
                min: 32.0,
                max: 212.0
            },
            transform: {
                celsius: (value) => (value - 32) * 5 / 9,
                fahrenheit: (value) => value,
                kelvin: (value) => (value + 459.67) * 5 / 9,
                reaumur: (value) => (value - 32) * 4 / 9
            }
        },
        kelvin: {
            title: 'Kelvin',
            symbol: 'K',
            range: {
                min: -273.1,
                max: 373.1
            },
            transform: {
                celsius: (value) => value - 273.15,
                fahrenheit: (value) => value * 9 / 5 - 459.67,
                kelvin: (value) => value,
                reaumur: (value) => (value - 273.15) * 0.8
            }
        },
        reaumur: {
            title: 'Reaumur',
            symbol: 'R',
            range: {
                min: 0.0,
                max: 80.0
            },
            transform: {
                celsius: (value) => value * 5 / 4,
                fahrenheit: (value) => value * 9 / 4 + 32,
                kelvin: (value) => value * 5 / 4 + 273.15,
                reaumur: (value) => value
            }
        }
    }
};
