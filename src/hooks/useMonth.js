export const numToMonth = (num) => {
    const monthOfYear = ["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];

    switch (num) {
        case 0 :
            return monthOfYear[0];
        case 1 :
            return monthOfYear[1];
        case 2 :
            return monthOfYear[2];
        case 3 :
            return monthOfYear[3];
        case 4 :
            return monthOfYear[4];
        case 5 :
            return monthOfYear[5];
        case 6 :
            return monthOfYear[6];
        case 7 :
            return monthOfYear[7];
        case 8 :
            return monthOfYear[8];
        case 9 :
            return monthOfYear[9];
        case 10 :
            return monthOfYear[10];
        case 11 :
            return monthOfYear[11];
        default:
            break;
    }
}