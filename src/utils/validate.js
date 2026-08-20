const CheckValidData = (email,password) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(password);   
    if (!emailRegex) {
        return { valid: false, message: "Invalid email format." };
    }
    if (!passwordRegex) {
        return { valid: false, message: "Password must be at least 8 characters long and contain both letters and numbers." };
    }
    return { valid: true, message: "Data is valid." };

};
export default CheckValidData;