export const validatePhoneNumber = (phone: string): boolean => {

    let isValid = false;
    const colombianNumberRex: RegExp = /^3[0-9]{9}$/; // Debe empezar por 3 y tener 10 dígitos

    if (phone.match(colombianNumberRex)) {
        
        isValid = true;
    }

    return isValid;
}