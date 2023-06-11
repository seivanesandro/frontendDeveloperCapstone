//TODO:COLORS
export const colorsPrimary = {
    primary: '#495E57',
    secondary: '#F4CE14',
};

export const colorsSecundary = {
    primary: '#fff',
    secondary: '#000000'
};

export const colorsSpecials = {
    primary: '#EE9972',
    secondary: '##FBDABB',
    third: '#EDEFEE',
    four: '#333333',
};

//TODO:FONT-Family
export const fontFamily = {
    markazi: '"Markazi Text" , serif',
    karla: '"Karla" , sans-serif'
};

//TODO:FONT-SIZES
export const fontSize = {
    small: '18px',
    medium: '40px',
    large: '64px'
};

export const gap = {
    small: '5rem',
    medium: '10rem',
    large: '20rem',
}

//TODO:FONT-LINE-HEIGHT
export const fontLineHeight = {
    small: '20px',
    medium: '40px',
    large: '70px'
};

//TODO:FONT-WEIGHT
export const fontWeight = {
    small: '400',
    medium: '500',
    large: '600'
};

//TODO:DEFAULT-SIZES
export const sizes = {
    small: '3rem',
    medium: '5rem',
    large: '10rem'
};
//TODO:BORDER-RADIUS
export const borderRadius = {
    small: '6rem',
    medium: '10rem',
    large: '16rem'
};

//TODO:TEXT-SHADOW
export const textShadow = {
    small: '0 0 0 0.2rem black',
    medium: '0 0 0 0.4rem black',
    large: '0 0 0 0.8rem black'
};

//TODO:BOX-SHADOW
export const boxShadow = {
    small: '0 0 0.2rem black',
    medium: '0 0 0.4rem black',
    large: '0 0 0.8rem black'
};

////TODO:SHADOW-Function
export const shadow = ({
    firstValue= 0,
    secondValue= 0,
    thirdValue= '0.3rem',
    color= 'black'
}) => {
    return `
            ${firstValue}
            ${secondValue}
            ${thirdValue}rem
            ${color}
            `;
};