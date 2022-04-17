const colors = {
    redPrimary: '#940a0a',
    leftNavWidth: 200,
    cardShadow: '3px 3px 5px rgba(0, 0, 0, 0.25)',
    light: {
        textColor: 'rgb(32, 33, 36)',
        textColorSecondary: '#65676B',
        backgroundColor: 'rgb(245, 245, 245)',
        backgroundColorHover: '#f2f2f2',
        componentBackground: 'white',
        textColor: 'black',
        textColorSelected: 'white',
    },
    dark: {
        textColor: 'rgb(250, 246, 246)',
        backgroundColor: 'rgb(32, 33, 36)'
    },
};

const effects = {
    boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.25)'
};

const theme = {
    ...colors,
    ...effects
};

export default theme;
