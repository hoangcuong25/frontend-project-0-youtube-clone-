export const API_KEY = "AIzaSyAUT24cdhyD4FvRqzI-1IrC3lPJq8iqBF0";

export const valueConverter = (value) => {
    if(value >= 1000000)
    {
        return Math.floor(value/1000000) + 'M';
    }
    else if(value >= 1000)
    {
        return Math.floor(value/1000) + 'k';
    }
    else{
        return value
    }
}