let A = Math.random() * 10;
let B = Math.random() * 10;
let C = Math.random() * 10;

if (A > B) {
    if (A > C) {
        if (B > C) {
            console.log(A, B, C);
        } else {
            console.log(A, C, B);
        }
    } else {
        console.log(C, A, B);
    }
} else {
    if (B > C) {
        if (A > C) {
            console.log(B, A, C);
        } else {
            console.log(B, C, A);
        }
    } else {
        console.log(C, B, A);
    }
}
